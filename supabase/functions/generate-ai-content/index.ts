
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openRouterApiKey = Deno.env.get('OPENROUTER_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt, toolType, context } = await req.json();

    if (!openRouterApiKey) {
      throw new Error('OpenRouter API key not configured');
    }

    // Create specialized prompts based on tool type
    let systemPrompt = '';
    let userPrompt = prompt;

    switch (toolType) {
      case 'lessonPlan':
        systemPrompt = 'You are an expert educational consultant. Create detailed, engaging lesson plans that include clear objectives, activities, assessments, and differentiation strategies. Format your response with clear headings and bullet points for easy reading.';
        break;
      case 'parentEmail':
        systemPrompt = 'You are a professional educator writing to parents. Create warm, professional emails that maintain positive relationships while clearly communicating important information. Use a respectful and collaborative tone.';
        break;
      case 'behaviorPlan':
        systemPrompt = 'You are a behavior specialist creating positive behavior support plans. Focus on understanding root causes, building on student strengths, and providing practical, evidence-based strategies. Structure your response clearly.';
        break;
      default:
        systemPrompt = 'You are an AI teaching assistant. Provide helpful, practical educational content that supports effective teaching and learning. Be specific, actionable, and professional in your responses.';
    }

    console.log('Generating content with OpenRouter for tool type:', toolType);

    // Try primary model first with reduced token limit
    const models = [
      'anthropic/claude-3.5-sonnet',
      'openai/gpt-4o-mini',
      'anthropic/claude-3-haiku'
    ];

    let lastError = null;

    for (const model of models) {
      try {
        console.log(`Attempting with model: ${model}`);
        
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openRouterApiKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'https://easyteach.app',
            'X-Title': 'EasyTeach AI Assistant',
          },
          body: JSON.stringify({
            model: model,
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: userPrompt }
            ],
            max_tokens: 1000, // Reduced from 1500 to avoid credit issues
            temperature: 0.7,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error(`${model} API error:`, errorData);
          lastError = errorData;
          continue; // Try next model
        }

        const data = await response.json();
        const generatedContent = data.choices[0]?.message?.content;

        if (!generatedContent) {
          console.error(`No content generated from ${model}`);
          continue; // Try next model
        }

        console.log(`Successfully generated content with ${model}`);

        return new Response(JSON.stringify({ content: generatedContent }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });

      } catch (error) {
        console.error(`Error with model ${model}:`, error);
        lastError = error;
        continue; // Try next model
      }
    }

    // If all models failed, return the last error
    throw new Error(`All models failed. Last error: ${lastError?.error?.message || lastError?.message || 'Unknown error'}`);

  } catch (error) {
    console.error('Error in generate-ai-content function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Failed to generate content. Please try again.'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
