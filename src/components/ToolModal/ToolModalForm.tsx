import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface ToolModalFormProps {
  tool: any;
  formData: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

const ToolModalForm = ({ tool, formData, onInputChange, onGenerate, isGenerating }: ToolModalFormProps) => {
  const renderInputFields = () => {
    if (!tool.fields || !Array.isArray(tool.fields)) {
      return (
        <div className="space-y-2">
          <Label htmlFor="prompt">What would you like to create?</Label>
          <Textarea
            id="prompt"
            placeholder={`Describe what you'd like to generate with ${tool.name}`}
            value={formData.prompt || ''}
            onChange={(e) => onInputChange('prompt', e.target.value)}
          />
        </div>
      );
    }

    return tool.fields.map((field: any, index: number) => (
      <div key={index} className="space-y-2">
        <Label htmlFor={field.name}>{field.label}</Label>
        {field.type === 'select' ? (
          <Select onValueChange={(value) => onInputChange(field.name, value)}>
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
            onChange={(e) => onInputChange(field.name, e.target.value)}
          />
        ) : (
          <Input
            id={field.name}
            type={field.type || 'text'}
            placeholder={field.placeholder}
            value={formData[field.name] || ''}
            onChange={(e) => onInputChange(field.name, e.target.value)}
          />
        )}
      </div>
    ));
  };

  const isFormValid = Object.values(formData).some(v => v?.trim());

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Input Details</h3>
      {renderInputFields()}
      
      <Button 
        onClick={onGenerate} 
        disabled={isGenerating || !isFormValid}
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
  );
};

export default ToolModalForm;