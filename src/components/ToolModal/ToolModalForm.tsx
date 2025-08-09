import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageBasedGradeSelector from "@/components/LanguageBasedGradeSelector";

interface ToolModalFormProps {
  tool: any;
  formData: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

<<<<<<< HEAD
const ToolModalForm = ({
  tool,
  formData,
  onInputChange,
  onGenerate,
  isGenerating,
}: ToolModalFormProps) => {
=======
const ToolModalForm = ({ tool, formData, onInputChange, onGenerate, isGenerating }: ToolModalFormProps) => {
  const { t } = useTranslation();
>>>>>>> main
  const renderInputFields = () => {
    if (!tool.fields || !Array.isArray(tool.fields)) {
      return (
        <div className="space-y-2">
          <Label htmlFor="prompt">What would you like to create?</Label>
          <Textarea
            id="prompt"
            placeholder={`Describe what you'd like to generate with ${tool.name}`}
            value={formData.prompt || ""}
            onChange={(e) => onInputChange("prompt", e.target.value)}
          />
        </div>
      );
    }

    return tool.fields.map((field: any, index: number) => (
      <div key={index} className="space-y-2">
        <Label htmlFor={field.name}>{field.label}</Label>
<<<<<<< HEAD
        {field.type === "select" ? (
=======
        {field.type === 'grade_selector' ? (
          <LanguageBasedGradeSelector
            selectedGrade={formData[field.name] || ''}
            onGradeChange={(value) => onInputChange(field.name, value)}
          />
        ) : field.type === 'select' ? (
>>>>>>> main
          <Select onValueChange={(value) => onInputChange(field.name, value)}>
            <SelectTrigger>
              <SelectValue
                placeholder={
                  field.placeholder || `Select ${field.label.toLowerCase()}`
                }
              />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option: string) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : field.type === "textarea" ? (
          <Textarea
            id={field.name}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={(e) => onInputChange(field.name, e.target.value)}
            className="focus:outline-none"
          />
        ) : (
          <Input
            id={field.name}
            type={field.type || "text"}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={(e) => onInputChange(field.name, e.target.value)}
            className="py-6 focus:outline-none"
          />
        )}
      </div>
    ));
  };

  const isFormValid = Object.values(formData).some((v) => v?.trim());

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Input Details</h3>
      {renderInputFields()}

      <button
        onClick={onGenerate}
        disabled={isGenerating || !isFormValid}
        className="w-full my-btn p-3 cursor-pointer rounded-2xl"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t('ui.buttons.generating')}
          </>
        ) : (
<<<<<<< HEAD
          "Generate Content"
=======
          t('ui.buttons.generateContent')
>>>>>>> main
        )}
      </button>
    </div>
  );
};

export default ToolModalForm;
