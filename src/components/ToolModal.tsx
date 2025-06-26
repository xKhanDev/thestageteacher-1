
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Copy, Download, Sparkles, Clock, Loader2, Bot, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SatisfactionSurvey from "./SatisfactionSurvey";
import { generateLessonPlan, generateParentEmail, generateBehaviorPlan, generateEducationalContent } from "@/utils/aiService";

interface FormData {
  [key: string]: string;
}

const ToolModal = ({ tool, isOpen, onClose, teacherProfile }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [showSurvey, setShowSurvey] = useState(false);
  const [hasGeneratedContent, setHasGeneratedContent] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const generateContent = async () => {
    setIsGenerating(true);
    setError('');
    
    try {
      let aiContent = '';
      
      // Use AI to generate content based on tool type
      switch (tool.id) {
        case 1: // Lesson Plan Generator
          aiContent = await generateLessonPlan(
            formData.subject || 'General',
            formData.topic || 'Learning Activity',
            formData.grade || 'Elementary'
          );
          break;
        case 4: // Parent Email - Note: This is tool ID 17 in the data, but keeping 4 for backward compatibility
        case 17: // Parent Email Composer
          aiContent = await generateParentEmail(
            formData.studentName || 'Student',
            formData.situation || 'General update',
            formData.emailType || 'Positive Update'
          );
          break;
        case 7: // Behavior Plan - Note: This is tool ID 20 in the data, but keeping 7 for backward compatibility
        case 20: // Behavior Plan Creator
          aiContent = await generateBehaviorPlan(
            formData.behaviorConcern || 'Classroom behavior',
            formData.studentAge || '10',
            formData.strengths || 'Eager to learn'
          );
          break;
        default:
          // Generic content generation for other tools
          const prompt = `Create educational content for ${tool.name} with the following details: ${JSON.stringify(formData)}`;
          aiContent = await generateEducationalContent(prompt, tool.category);
      }

      const enhancedContent = enhanceGeneratedContent(tool, formData, teacherProfile, aiContent);
      setGeneratedContent(enhancedContent);
      setHasGeneratedContent(true);
      
      toast({
        title: "AI Content Generated! ✨",
        description: "Your personalized teaching content is ready.",
      });

    } catch (error) {
      console.error('Generation error:', error);
      const errorMessage = error.message || 'Unable to generate content. Please try again.';
      setError(errorMessage);
      
      toast({
        title: "Generation Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const enhanceGeneratedContent = (tool, data: FormData, profile, aiContent: string) => {
    const teacherName = profile?.name || "Teacher";
    const grade = profile?.grade || "your grade";
    
    return `# ${tool.name} - AI Generated Content
**Created for:** ${teacherName} | **Grade:** ${grade} | **Date:** ${new Date().toLocaleDateString()}

## AI-Powered Educational Content

${aiContent}

---

## Input Summary
${Object.entries(data).map(([key, value]) => `**${key}:** ${value}`).join('\n')}

*This content was generated using AI to assist with your teaching needs. Please review and customize as needed for your specific classroom context.*

**Powered by AI Teaching Assistant** 🤖✨`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    toast({
      title: "Copied! 📋",
      description: "Content copied to clipboard.",
    });
  };

  const handleClose = () => {
    // Only show survey if content was generated and survey hasn't been shown yet
    if (hasGeneratedContent && !showSurvey) {
      setShowSurvey(true);
    } else {
      // Always close the modal if survey is already showing or no content generated
      onClose();
    }
  };

  const handleSurveyClose = () => {
    setShowSurvey(false);
    onClose(); // Close the entire modal when survey is closed
  };

  const handleSurveySubmit = (feedback) => {
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
    setShowSurvey(false);
    onClose(); // Close the modal after survey submission
  };

  const IconComponent = tool.icon;

  useEffect(() => {
    if (!isOpen) {
      setFormData({});
      setGeneratedContent('');
      setHasGeneratedContent(false);
      setShowSurvey(false);
      setError('');
    }
  }, [isOpen]);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${tool.color}`}>
                <IconComponent className="h-6 w-6" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-gray-800">{tool.name}</DialogTitle>
                <p className="text-gray-600 mt-1 text-sm">{tool.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">{tool.category}</Badge>
              <div className="flex items-center space-x-1 text-sm text-amber-600">
                <Clock className="h-4 w-4" />
                <span>Saves {tool.timesSaved}</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-emerald-600">
                <Bot className="h-4 w-4" />
                <span>AI-Powered</span>
              </div>
            </div>
          </DialogHeader>

          <div className="py-6">
            {!generatedContent ? (
              // Input Form
              <div className="space-y-6">
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                  <h3 className="font-semibold text-emerald-800 mb-2">
                    🤖 AI-Enhanced Content Creation
                  </h3>
                  <p className="text-emerald-700 text-sm">
                    Our AI assistant will help generate personalized educational content based on your inputs.
                  </p>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <h4 className="font-semibold text-red-800">Generation Error</h4>
                    </div>
                    <p className="text-red-700 text-sm mt-2">{error}</p>
                    {error.includes('quota') && (
                      <p className="text-red-600 text-sm mt-2">
                        Please add credits to your OpenAI account or contact your administrator.
                      </p>
                    )}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tool.fields.map((field) => (
                    <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                      <Label htmlFor={field.name} className="text-sm font-medium text-gray-700">
                        {field.label}
                      </Label>
                      
                      {field.type === 'text' && (
                        <Input
                          id={field.name}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          placeholder={field.placeholder}
                          className="mt-1 border-emerald-300 focus:border-emerald-500"
                        />
                      )}
                      
                      {field.type === 'select' && (
                        <Select 
                          value={formData[field.name] || ''} 
                          onValueChange={(value) => handleInputChange(field.name, value)}
                        >
                          <SelectTrigger className="mt-1 border-emerald-300 focus:border-emerald-500">
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
                          className="mt-1 border-emerald-300 focus:border-emerald-500"
                          rows={3}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="flex justify-end space-x-3">
                  <Button variant="outline" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button 
                    onClick={generateContent} 
                    disabled={isGenerating}
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        AI is creating...
                      </>
                    ) : (
                      <>
                        <Bot className="mr-2 h-4 w-4" />
                        Generate with AI
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ) : (
              // Generated Content Display
              <div className="space-y-6">
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                  <h3 className="font-semibold text-emerald-800 mb-2">
                    ✨ AI-Generated Content Ready!
                  </h3>
                  <p className="text-emerald-700 text-sm">
                    Your personalized educational content has been created. Review, edit, and use as needed!
                  </p>
                </div>

                <div className="bg-white border-2 border-emerald-200 rounded-lg p-6 max-h-96 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm font-mono text-gray-800 leading-relaxed">
                    {generatedContent}
                  </pre>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Generated by AI for {teacherProfile?.name || 'your classroom'} • {new Date().toLocaleDateString()}
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" onClick={copyToClipboard} className="border-emerald-300 hover:bg-emerald-50">
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                    <Button variant="outline" className="border-emerald-300 hover:bg-emerald-50">
                      <Download className="mr-2 h-4 w-4" />
                      Save
                    </Button>
                    <Button onClick={() => setGeneratedContent('')} className="bg-emerald-600 hover:bg-emerald-700">
                      Create Another
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <SatisfactionSurvey
        isOpen={showSurvey}
        onClose={handleSurveyClose}
        toolName={tool.name}
        onSubmit={handleSurveySubmit}
      />
    </>
  );
};

export default ToolModal;
