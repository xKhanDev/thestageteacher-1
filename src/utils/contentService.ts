
import { supabase } from '@/integrations/supabase/client';

export interface GeneratedContent {
  id: string;
  user_id: string;
  tool_name: string;
  tool_type: string;
  title?: string;
  subject?: string;
  topic?: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export const saveGeneratedContent = async (
  toolName: string,
  toolType: string,
  content: string,
  title?: string,
  subject?: string,
  topic?: string
): Promise<GeneratedContent | null> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('User not authenticated');
    }

    const { data, error } = await supabase
      .from('generated_content')
      .insert({
        user_id: user.id,
        tool_name: toolName,
        tool_type: toolType,
        content,
        title,
        subject,
        topic
      })
      .select()
      .single();

    if (error) {
      console.error('Error saving content:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in saveGeneratedContent:', error);
    throw error;
  }
};

export const getUserGeneratedContent = async (): Promise<GeneratedContent[]> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('User not authenticated');
    }

    const { data, error } = await supabase
      .from('generated_content')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching content:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getUserGeneratedContent:', error);
    throw error;
  }
};

export const deleteGeneratedContent = async (id: string): Promise<void> => {
  try {
    const { error } = await supabase
      .from('generated_content')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting content:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error in deleteGeneratedContent:', error);
    throw error;
  }
};
