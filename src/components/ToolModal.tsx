
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Download, Save, Copy, CheckCircle } from "lucide-react";
import { generateLessonPlan, generateParentEmail, generateBehaviorPlan, generateEducationalContent } from "@/utils/aiService";
import { saveGeneratedContent } from "@/utils/contentService";
import { useToast } from "@/hooks/use-toast";

interface ToolModalProps {
  tool: any;
  isOpen: boolean;
  onClose: () => void;
  teacherProfile: any;
}

const ToolModal = ({ tool, isOpen, onClose, teacherProfile }: ToolModalProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      let content = '';
      
      switch (tool.id) {
        case 1: // lesson-plan
          content = await generateLessonPlan(
            formData.subject || '',
            formData.topic || '',
            formData.grade || ''
          );
          break;
        case 17: // parent-email
          content = await generateParentEmail(
            formData.studentName || '',
            formData.situation || '',
            formData.emailType || ''
          );
          break;
        case 20: // behavior-plan
          content = await generateBehaviorPlan(
            formData.behaviorConcern || '',
            formData.studentAge || '',
            formData.strengths || ''
          );
          break;
        default:
          const prompt = Object.entries(formData)
            .map(([key, value]) => `${key}: ${value}`)
            .join(', ');
          content = await generateEducationalContent(prompt, tool.name);
          break;
      }
      
      setGeneratedContent(content);
      setIsSaved(false);
    } catch (error) {
      toast({
        title: "Generation Error",
        description: "Failed to generate content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = async () => {
    if (!generatedContent.trim()) {
      toast({
        title: "No Content",
        description: "Please generate content first before saving.",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);
    try {
      await saveGeneratedContent(
        tool.name,
        tool.category,
        generatedContent,
        formData.topic || formData.subject || tool.name,
        formData.subject,
        formData.topic
      );

      setIsSaved(true);
      toast({
        title: "Content Saved",
        description: "Your generated content has been saved successfully!",
      });
    } catch (error) {
      toast({
        title: "Save Error",
        description: "Failed to save content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDownload = () => {
    if (!generatedContent) return;
    
    const blob = new Blob([generatedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tool.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    if (!generatedContent) return;
    
    try {
      await navigator.clipboard.writeText(generatedContent);
      toast({
        title: "Copied!",
        description: "Content copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy content to clipboard",
        variant: "destructive",
      });
    }
  };

  const renderInputFields = () => {
    if (!tool.fields || !Array.isArray(tool.fields)) {
      return (
        <div className="space-y-2">
          <Label htmlFor="prompt">What would you like to create?</Label>
          <Textarea
            id="prompt"
            placeholder={`Describe what you'd like to generate with ${tool.name}`}
            value={formData.prompt || ''}
            onChange={(e) => handleInputChange('prompt', e.target.value)}
          />
        </div>
      );
    }

    return tool.fields.map((field: any, index: number) => (
      <div key={index} className="space-y-2">
        <Label htmlFor={field.name}>{field.label}</Label>
        {field.type === 'select' ? (
          <Select onValueChange={(value) => handleInputChange(field.name, value)}>
            <SelectTrigger>
              <SelectValue placeholder={field.placeholder || `Select ${field.label.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option: string) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : field.type === 'textarea' ? (
          <Textarea
            id={field.name}
            placeholder={field.placeholder}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
          />
        ) : (
          <Input
            id={field.name}
            type={field.type || 'text'}
            placeholder={field.placeholder}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
          />
        )}
      </div>
    ));
  };

  // Get the icon component
  const IconComponent = tool.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            {IconComponent && <IconComponent className="h-6 w-6" />}
            <span>{tool.name}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Input Details</h3>
            {renderInputFields()}
            
            <Button 
              onClick={handleGenerate} 
              disabled={isGenerating || Object.values(formData).every(v => !v?.trim())}
              className="w-full"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Content'
              )}
            </Button>
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Generated Content</h3>
              {generatedContent && (
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopy}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDownload}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleSave}
                    disabled={isSaving || isSaved}
                    className={isSaved ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : isSaved ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Saved
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Save
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
            
            <div className="min-h-[300px] border rounded-lg p-4 bg-gray-50">
              {generatedContent ? (
                <div className="whitespace-pre-wrap text-sm">
                  {generatedContent}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  Generated content will appear here
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ToolModal;
