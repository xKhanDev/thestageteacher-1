
import { pipeline } from '@huggingface/transformers';

let textGenerator: any = null;

export const initializeAI = async () => {
  if (!textGenerator) {
    try {
      // Use a lightweight text generation model that works in the browser
      textGenerator = await pipeline(
        'text-generation',
        'Xenova/gpt2',
        { device: 'webgpu' }
      );
    } catch (error) {
      console.warn('WebGPU not available, falling back to CPU');
      textGenerator = await pipeline(
        'text-generation',
        'Xenova/gpt2'
      );
    }
  }
  return textGenerator;
};

export const generateEducationalContent = async (prompt: string, toolContext?: string) => {
  try {
    const generator = await initializeAI();
    
    // Create educational context for better responses
    const educationalPrompt = `As an AI teaching assistant, provide helpful educational guidance for: ${prompt}
    
    Context: ${toolContext || 'General teaching assistance'}
    
    Response:`;

    const result = await generator(educationalPrompt, {
      max_new_tokens: 200,
      temperature: 0.7,
      do_sample: true,
      pad_token_id: generator.tokenizer.eos_token_id
    });

    return result[0].generated_text.replace(educationalPrompt, '').trim();
  } catch (error) {
    console.error('AI generation error:', error);
    throw new Error('Unable to generate AI response. Please try again.');
  }
};

export const generateLessonPlan = async (subject: string, topic: string, grade: string) => {
  const prompt = `Create a detailed lesson plan for ${grade} students learning about "${topic}" in ${subject}. Include learning objectives, activities, and assessment methods.`;
  return generateEducationalContent(prompt, 'Lesson Planning');
};

export const generateParentEmail = async (studentName: string, situation: string, emailType: string) => {
  const prompt = `Draft a professional ${emailType.toLowerCase()} email to parents about ${studentName}. Situation: ${situation}`;
  return generateEducationalContent(prompt, 'Parent Communication');
};

export const generateBehaviorPlan = async (behaviorConcern: string, studentAge: string, strengths: string) => {
  const prompt = `Create a positive behavior support plan for a ${studentAge}-year-old student showing ${behaviorConcern}. Student strengths: ${strengths}`;
  return generateEducationalContent(prompt, 'Behavior Support');
};
