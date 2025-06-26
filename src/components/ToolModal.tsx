import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Copy, Download, Sparkles, Clock, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SatisfactionSurvey from "./SatisfactionSurvey";

const ToolModal = ({ tool, isOpen, onClose, teacherProfile }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [showSurvey, setShowSurvey] = useState(false);

  const handleInputChange = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const generateContent = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation with realistic delay
    setTimeout(() => {
      const content = generateMockContent(tool, formData, teacherProfile);
      setGeneratedContent(content);
      setIsGenerating(false);
      
      toast({
        title: "Content generated! ✨",
        description: "Your personalized teaching content is ready to use.",
      });

      // Show satisfaction survey after a brief delay
      setTimeout(() => {
        setShowSurvey(true);
      }, 1500);
    }, 2000 + Math.random() * 2000); // 2-4 second delay
  };

  const handleSurveySubmit = (feedback) => {
    // Save feedback to localStorage for now (in a real app, this would go to a database)
    const existingFeedback = JSON.parse(localStorage.getItem('toolFeedback') || '[]');
    const newFeedback = {
      id: Date.now(),
      toolId: tool.id,
      toolName: tool.name,
      feedback,
      timestamp: new Date().toISOString(),
      teacherProfile: teacherProfile?.name || 'Anonymous'
    };
    
    existingFeedback.push(newFeedback);
    localStorage.setItem('toolFeedback', JSON.stringify(existingFeedback));
    
    console.log('Feedback saved:', newFeedback);
  };

  const generateMockContent = (tool, data, profile) => {
    const teacherName = profile?.name || "Teacher";
    const grade = profile?.grade || "your grade";
    
    switch (tool.id) {
      case 1: // Lesson Plan Generator
        return `# ${data.subject} Lesson Plan - ${data.topic}
**Grade Level:** ${data.grade} | **Duration:** ${data.duration} | **Teacher:** ${teacherName}

## Learning Objective
Students will be able to understand and apply key concepts of ${data.topic} through ${data.learningStyle?.toLowerCase()} learning activities.

## Materials Needed
- Whiteboard/markers
- Student worksheets
- ${data.learningStyle === 'Visual' ? 'Visual aids, charts' : data.learningStyle === 'Kinesthetic' ? 'Manipulatives, hands-on materials' : 'Audio resources, discussion prompts'}

## Lesson Structure

### Opening (5 minutes)
- Warm greeting and review of previous lesson
- Brief introduction to today's topic: "${data.topic}"

### Direct Instruction (15 minutes)
- Present key concepts using ${data.learningStyle?.toLowerCase()} methods
- Interactive demonstration
- Check for understanding with quick questions

### Guided Practice (15 minutes)
- Students work through examples with teacher support
- Pair-share activities to reinforce learning

### Independent Practice (10 minutes)
- Individual worksheet or activity
- Teacher circulates to provide support

### Closing (5 minutes)
- Review key learning points
- Preview tomorrow's lesson
- Exit ticket: "One thing I learned today..."

## Assessment
- Formative: Observe student participation and understanding during guided practice
- Summative: Exit ticket responses and completed independent work

## Differentiation
- Advanced learners: Extension questions
- Struggling learners: Additional visual supports
- ELL students: Vocabulary supports and peer partners

*Generated with love for ${teacherName}'s ${grade} classroom! 💙*`;

      case 4: // Parent Email
        return `Subject: ${data.emailType} - ${data.studentName}

Dear ${data.studentName}'s Family,

I hope this message finds you well! I wanted to reach out to share some information about ${data.studentName}.

${data.situation}

${data.studentName} is such a wonderful addition to our classroom, and I appreciate the support you provide at home. 

${data.emailType === 'Positive Update' ? 
  `Please celebrate this achievement with ${data.studentName} - they should be proud of their hard work!` :
  `I'm confident that by working together, we can help ${data.studentName} continue to grow and succeed.`
}

If you have any questions or would like to discuss this further, please don't hesitate to reach out. I'm here to support ${data.studentName}'s success!

Warm regards,
${teacherName}

P.S. Thank you for being such supportive parents. It makes all the difference! 🌟`;

      case 7: // Behavior Plan
        return `# Positive Behavior Support Plan for Student

## Student Information
- **Age/Grade:** ${data.studentAge}
- **Primary Concern:** ${data.behaviorConcern}
- **Teacher:** ${teacherName}

## Behavior Analysis
**Target Behavior:** ${data.behaviorConcern}

**Possible Triggers:** 
${data.triggers}

**Student Strengths:**
${data.strengths}

## Intervention Strategies

### Prevention Strategies
1. **Environmental Modifications**
   - Provide clear visual schedules and expectations
   - Create a calm-down space in the classroom
   - Use timers for transitions

2. **Proactive Teaching**
   - Practice expected behaviors during calm moments
   - Use social stories to teach appropriate responses
   - Provide choice when possible

### Response Strategies
**When the behavior occurs:**
1. Stay calm and use a neutral tone
2. Redirect to appropriate behavior
3. Provide support as needed
4. Follow through with natural consequences

### Positive Reinforcement
- Praise specific positive behaviors immediately
- Use the student's strengths and interests as motivators
- Celebrate small improvements

## Data Collection
Track frequency and intensity of target behavior daily to measure progress.

## Review Schedule
Plan will be reviewed weekly and adjusted as needed.

*Remember: Every behavior is communication. We're here to help this student succeed! 💪*`;

      default:
        return `# ${tool.name} Output

Thank you for using the ${tool.name} tool, ${teacherName}! 

Based on your inputs, here's your personalized content designed specifically for your ${grade} classroom.

${Object.entries(data).map(([key, value]) => `**${key}:** ${value}`).join('\n')}

This content has been tailored to match your teaching style and classroom needs. Feel free to modify and adapt it as needed!

*Generated with care for ${teacherName}'s amazing students! ✨*`;
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    toast({
      title: "Copied! 📋",
      description: "Content copied to clipboard.",
    });
  };

  const IconComponent = tool.icon;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${tool.color}`}>
                <IconComponent className="h-6 w-6" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold">{tool.name}</DialogTitle>
                <p className="text-gray-600 mt-1">{tool.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <Badge variant="secondary">{tool.category}</Badge>
              <div className="flex items-center space-x-1 text-sm text-amber-600">
                <Clock className="h-4 w-4" />
                <span>Saves {tool.timesSaved}</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-green-600">
                <Sparkles className="h-4 w-4" />
                <span>Ready in {tool.estimatedTime}</span>
              </div>
            </div>
          </DialogHeader>

          <div className="py-6">
            {!generatedContent ? (
              // Input Form
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    Let's create something amazing for your classroom! 🎯
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Fill out the details below and we'll generate personalized content just for you.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tool.fields.map((field) => (
                    <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                      <Label htmlFor={field.name} className="text-sm font-medium">
                        {field.label}
                      </Label>
                      
                      {field.type === 'text' && (
                        <Input
                          id={field.name}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          placeholder={field.placeholder}
                          className="mt-1"
                        />
                      )}
                      
                      {field.type === 'select' && (
                        <Select 
                          value={formData[field.name] || ''} 
                          onValueChange={(value) => handleInputChange(field.name, value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder={field.placeholder || `Select ${field.label.toLowerCase()}`} />
                          </SelectTrigger>
                          <SelectContent>
                            {field.options.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                      
                      {field.type === 'textarea' && (
                        <Textarea
                          id={field.name}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          placeholder={field.placeholder}
                          className="mt-1"
                          rows={3}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="flex justify-end space-x-3">
                  <Button variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button 
                    onClick={generateContent} 
                    disabled={isGenerating}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating magic...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate Content
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ) : (
              // Generated Content Display
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">
                    Your content is ready! 🎉
                  </h3>
                  <p className="text-green-700 text-sm">
                    Feel free to copy, edit, or save this content. It's personalized just for your classroom!
                  </p>
                </div>

                <div className="bg-white border rounded-lg p-6 max-h-96 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm font-mono text-gray-800 leading-relaxed">
                    {generatedContent}
                  </pre>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Generated for {teacherProfile?.name || 'your classroom'} • {new Date().toLocaleDateString()}
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" onClick={copyToClipboard}>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Save
                    </Button>
                    <Button onClick={() => setGeneratedContent('')}>
                      Create Another
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Satisfaction Survey Modal */}
      <SatisfactionSurvey
        isOpen={showSurvey}
        onClose={() => setShowSurvey(false)}
        toolName={tool.name}
        onSubmit={handleSurveySubmit}
      />
    </>
  );
};

export default ToolModal;
