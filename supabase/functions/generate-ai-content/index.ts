
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

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

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
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

    console.log('Generating content with OpenAI for tool type:', toolType);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-2025-04-14',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        max_tokens: 1500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const generatedContent = data.choices[0]?.message?.content;

    if (!generatedContent) {
      throw new Error('No content generated from OpenAI');
    }

    console.log('Successfully generated content');

    return new Response(JSON.stringify({ content: generatedContent }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in generate-ai-content function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
