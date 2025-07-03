import ToolModalActions from './ToolModalActions';
import ToolModalChat from './ToolModalChat';

interface ToolModalContentProps {
  tool: any;
  formData: Record<string, string>;
  generatedContent: string;
  isSaving: boolean;
  isSaved: boolean;
  isExportingSlides: boolean;
  isRegenerating: boolean;
  onCopy: () => void;
  onDownload: () => void;
  onSave: () => void;
  onExportSlides: () => void;
  onChatRegenerate: (message: string) => Promise<void>;
}

const ToolModalContent = ({ 
  tool,
  formData,
  generatedContent, 
  isSaving, 
  isSaved, 
  isExportingSlides,
  isRegenerating,
  onCopy, 
  onDownload, 
  onSave, 
  onExportSlides,
  onChatRegenerate
}: ToolModalContentProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Generated Content</h3>
        <ToolModalActions
          generatedContent={generatedContent}
          tool={tool}
          formData={formData}
          isSaving={isSaving}
          isSaved={isSaved}
          isExportingSlides={isExportingSlides}
          onCopy={onCopy}
          onDownload={onDownload}
          onSave={onSave}
          onExportSlides={onExportSlides}
        />
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

      <ToolModalChat
        generatedContent={generatedContent}
        onChatRegenerate={onChatRegenerate}
        isRegenerating={isRegenerating}
      />
    </div>
  );
};

export default ToolModalContent;