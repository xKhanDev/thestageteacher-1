
import { supabase } from '@/integrations/supabase/client';

export interface FeedbackData {
  toolName: string;
  toolAppreciation: number;
  responseQuality: number;
  missingFields: string;
  additionalFeedback: string;
  wouldRecommend: boolean;
}

export const submitFeedback = async (feedbackData: FeedbackData): Promise<void> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    const { error } = await supabase
      .from('user_feedback')
      .insert({
        user_id: user?.id || null, // Allow anonymous feedback
        tool_name: feedbackData.toolName,
        tool_appreciation: feedbackData.toolAppreciation,
        response_quality: feedbackData.responseQuality,
        missing_fields: feedbackData.missingFields || null,
        additional_feedback: feedbackData.additionalFeedback || null,
        would_recommend: feedbackData.wouldRecommend
      });

    if (error) {
      console.error('Error submitting feedback:', error);
      throw error;
    }

    console.log('Feedback submitted successfully');
  } catch (error) {
    console.error('Error in submitFeedback:', error);
    throw error;
  }
};

export const getUserFeedback = async (): Promise<any[]> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('User not authenticated');
    }

    const { data, error } = await supabase
      .from('user_feedback')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching feedback:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getUserFeedback:', error);
    throw error;
  }
};
