import { supabase } from '@/integrations/supabase/client';

export const generateEducationalContent = async (prompt: string, toolContext?: string) => {
  try {
    console.log('Generating educational content:', { prompt: prompt.substring(0, 100), toolContext });

    const { data, error } = await supabase.functions.invoke('generate-ai-content', {
      body: {
        prompt,
        toolType: 'general',
        context: toolContext || 'General teaching assistance'
      }
    });

    if (error) {
      console.error('Supabase function error:', error);
      
      // Handle specific error types
      if (error.message?.includes('Failed to fetch')) {
        throw new Error('Connection error. Please check your internet connection and try again.');
      }
      
      if (error.message?.includes('credits') || error.message?.includes('tokens')) {
        throw new Error('Service temporarily unavailable. Please try again in a few minutes.');
      }
      
      throw new Error('Failed to generate content. Please try again.');
    }

    if (!data?.content) {
      throw new Error('No content received from AI service');
    }

    return data.content;
  } catch (error) {
    console.error('AI generation error:', error);
    
    // Return more specific error messages
    if (error.message.includes('Connection error') || 
        error.message.includes('Service temporarily unavailable') ||
        error.message.includes('No content received')) {
      throw error; // Re-throw specific errors
    }
    
    throw new Error('Unable to generate AI response. Please check your connection and try again.');
  }
};

export const generateLessonPlan = async (subject: string, topic: string, grade: string) => {
  const prompt = `Create a comprehensive lesson plan for ${grade} students learning about "${topic}" in ${subject}. 

Please include:
- Clear learning objectives
- Materials needed
- Step-by-step activities (opening, main activities, closing)
- Assessment strategies
- Differentiation for different learning styles
- Estimated time for each section
- Extension activities for early finishers

Subject: ${subject}
Topic: ${topic}
Grade Level: ${grade}`;

  try {
    console.log('Generating lesson plan:', { subject, topic, grade });

    const { data, error } = await supabase.functions.invoke('generate-ai-content', {
      body: {
        prompt,
        toolType: 'lessonPlan',
        context: 'Lesson Planning'
      }
    });

    if (error) {
      console.error('Lesson plan generation error:', error);
      
      // Handle specific error types
      if (error.message?.includes('Failed to fetch')) {
        throw new Error('Connection error. Please check your internet connection and try again.');
      }
      
      if (error.message?.includes('credits') || error.message?.includes('tokens')) {
        throw new Error('Service temporarily unavailable. Please try again in a few minutes.');
      }
      
      throw error;
    }
    
    if (!data?.content) {
      throw new Error('No lesson plan content received');
    }

    return data.content;
  } catch (error) {
    console.error('Lesson plan generation error:', error);
    
    // Return more specific error messages
    if (error.message.includes('Connection error') || 
        error.message.includes('Service temporarily unavailable') ||
        error.message.includes('No lesson plan content received')) {
      throw error; // Re-throw specific errors
    }
    
    throw new Error('Unable to generate lesson plan. Please try again.');
  }
};

export const generateParentEmail = async (studentName: string, situation: string, emailType: string) => {
  const prompt = `Draft a professional ${emailType.toLowerCase()} email to parents about ${studentName}. 

Email Type: ${emailType}
Student: ${studentName}
Situation: ${situation}

Please include:
- Appropriate greeting
- Clear purpose of the email
- Specific details about the situation
- Next steps or recommendations
- Professional closing
- Maintain a positive, collaborative tone`;

  try {
    console.log('Generating parent email:', { studentName, situation, emailType });

    const { data, error } = await supabase.functions.invoke('generate-ai-content', {
      body: {
        prompt,
        toolType: 'parentEmail',
        context: 'Parent Communication'
      }
    });

    if (error) {
      console.error('Parent email generation error:', error);
      
      // Handle specific error types
      if (error.message?.includes('Failed to fetch')) {
        throw new Error('Connection error. Please check your internet connection and try again.');
      }
      
      if (error.message?.includes('credits') || error.message?.includes('tokens')) {
        throw new Error('Service temporarily unavailable. Please try again in a few minutes.');
      }
      
      throw error;
    }

    if (!data?.content) {
      throw new Error('No email content received');
    }

    return data.content;
  } catch (error) {
    console.error('Parent email generation error:', error);
    
    // Return more specific error messages
    if (error.message.includes('Connection error') || 
        error.message.includes('Service temporarily unavailable') ||
        error.message.includes('No email content received')) {
      throw error; // Re-throw specific errors
    }
    
    throw new Error('Unable to generate parent email. Please try again.');
  }
};

export const generateBehaviorPlan = async (behaviorConcern: string, studentAge: string, strengths: string) => {
  const prompt = `Create a positive behavior support plan for a ${studentAge}-year-old student.

Behavior Concern: ${behaviorConcern}
Student Age: ${studentAge}
Student Strengths: ${strengths}

Please include:
- Behavior analysis (possible triggers and functions)
- Positive behavior goals
- Teaching strategies
- Environmental modifications
- Reinforcement strategies
- Data collection methods
- Crisis intervention procedures (if needed)
- Ways to leverage student strengths`;

  try {
    console.log('Generating behavior plan:', { behaviorConcern, studentAge, strengths });

    const { data, error } = await supabase.functions.invoke('generate-ai-content', {
      body: {
        prompt,
        toolType: 'behaviorPlan',
        context: 'Behavior Support'
      }
    });

    if (error) {
      console.error('Behavior plan generation error:', error);
      
      // Handle specific error types
      if (error.message?.includes('Failed to fetch')) {
        throw new Error('Connection error. Please check your internet connection and try again.');
      }
      
      if (error.message?.includes('credits') || error.message?.includes('tokens')) {
        throw new Error('Service temporarily unavailable. Please try again in a few minutes.');
      }
      
      throw error;
    }

    if (!data?.content) {
      throw new Error('No behavior plan content received');
    }

    return data.content;
  } catch (error) {
    console.error('Behavior plan generation error:', error);
    
    // Return more specific error messages
    if (error.message.includes('Connection error') || 
        error.message.includes('Service temporarily unavailable') ||
        error.message.includes('No behavior plan content received')) {
      throw error; // Re-throw specific errors
    }
    
    throw new Error('Unable to generate behavior plan. Please try again.');
  }
};

// Legacy function for backward compatibility
export const initializeAI = async () => {
  // No longer needed - using OpenRouter via edge function
  return null;
};
