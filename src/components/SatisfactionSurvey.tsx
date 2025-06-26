
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, ThumbsUp, ThumbsDown, MessageSquare, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SatisfactionSurveyProps {
  isOpen: boolean;
  onClose: () => void;
  toolName: string;
  onSubmit: (feedback: SurveyFeedback) => void;
}

interface SurveyFeedback {
  toolAppreciation: number;
  responseQuality: number;
  missingFields: string;
  additionalFeedback: string;
  wouldRecommend: boolean;
}

const SatisfactionSurvey = ({ isOpen, onClose, toolName, onSubmit }: SatisfactionSurveyProps) => {
  const { toast } = useToast();
  const [feedback, setFeedback] = useState<SurveyFeedback>({
    toolAppreciation: 0,
    responseQuality: 0,
    missingFields: '',
    additionalFeedback: '',
    wouldRecommend: true
  });

  const handleStarRating = (category: 'toolAppreciation' | 'responseQuality', rating: number) => {
    setFeedback(prev => ({
      ...prev,
      [category]: rating
    }));
  };

  const handleSubmit = () => {
    if (feedback.toolAppreciation === 0 || feedback.responseQuality === 0) {
      toast({
        title: "Please complete the ratings",
        description: "Both star ratings are required to submit your feedback.",
        variant: "destructive"
      });
      return;
    }

    onSubmit(feedback);
    toast({
      title: "Thank you for your feedback! 🙏",
      description: "Your input helps us improve the teaching tools experience.",
    });
    onClose();
  };

  const StarRating = ({ rating, onRate, label }: { rating: number; onRate: (rating: number) => void; label: string }) => (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRate(star)}
            className="transition-colors hover:scale-110"
          >
            <Star
              className={`h-6 w-6 ${
                star <= rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300 hover:text-yellow-400'
              }`}
            />
          </button>
        ))}
      </div>
      <p className="text-xs text-gray-500">
        {rating === 0 ? 'Click to rate' : `${rating}/5 stars`}
      </p>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              <span>How was your experience with {toolName}?</span>
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <p className="text-sm text-blue-800">
                Your feedback helps us improve our AI teaching tools. Please take a moment to share your experience! 📚✨
              </p>
            </CardContent>
          </Card>

          {/* Tool Appreciation Rating */}
          <div className="space-y-3">
            <StarRating
              rating={feedback.toolAppreciation}
              onRate={(rating) => handleStarRating('toolAppreciation', rating)}
              label="How much did you appreciate this tool overall?"
            />
          </div>

          {/* Response Quality Rating */}
          <div className="space-y-3">
            <StarRating
              rating={feedback.responseQuality}
              onRate={(rating) => handleStarRating('responseQuality', rating)}
              label="How would you rate the quality of the generated content?"
            />
          </div>

          {/* Missing Fields Feedback */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Were there any fields missing that could have made your request more detailed and accurate?
            </Label>
            <Textarea
              value={feedback.missingFields}
              onChange={(e) => setFeedback(prev => ({ ...prev, missingFields: e.target.value }))}
              placeholder="e.g., 'Would love a field for student reading level', 'Missing options for special needs accommodations', etc."
              className="min-h-[80px]"
            />
          </div>

          {/* Additional Feedback */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Any additional feedback or suggestions?
            </Label>
            <Textarea
              value={feedback.additionalFeedback}
              onChange={(e) => setFeedback(prev => ({ ...prev, additionalFeedback: e.target.value }))}
              placeholder="Share any other thoughts about your experience..."
              className="min-h-[80px]"
            />
          </div>

          {/* Recommendation */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              Would you recommend this tool to other educators?
            </Label>
            <div className="flex space-x-4">
              <Button
                variant={feedback.wouldRecommend ? "default" : "outline"}
                onClick={() => setFeedback(prev => ({ ...prev, wouldRecommend: true }))}
                className="flex items-center space-x-2"
              >
                <ThumbsUp className="h-4 w-4" />
                <span>Yes, I'd recommend it</span>
              </Button>
              <Button
                variant={!feedback.wouldRecommend ? "default" : "outline"}
                onClick={() => setFeedback(prev => ({ ...prev, wouldRecommend: false }))}
                className="flex items-center space-x-2"
              >
                <ThumbsDown className="h-4 w-4" />
                <span>No, needs improvement</span>
              </Button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Skip for now
            </Button>
            <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
              Submit Feedback
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SatisfactionSurvey;
