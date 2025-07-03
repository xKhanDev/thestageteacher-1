
-- Create a table to store user feedback from satisfaction surveys
CREATE TABLE public.user_feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  tool_name TEXT NOT NULL,
  tool_appreciation INTEGER NOT NULL CHECK (tool_appreciation >= 1 AND tool_appreciation <= 5),
  response_quality INTEGER NOT NULL CHECK (response_quality >= 1 AND response_quality <= 5),
  missing_fields TEXT,
  additional_feedback TEXT,
  would_recommend BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.user_feedback ENABLE ROW LEVEL SECURITY;

-- Create policies for user feedback
CREATE POLICY "Users can view their own feedback" 
  ON public.user_feedback 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own feedback" 
  ON public.user_feedback 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Allow anonymous users to submit feedback (optional - remove if you only want authenticated feedback)
CREATE POLICY "Anonymous users can submit feedback" 
  ON public.user_feedback 
  FOR INSERT 
  WITH CHECK (user_id IS NULL);

-- Create an index for better performance when querying by tool
CREATE INDEX idx_user_feedback_tool_name ON public.user_feedback(tool_name);
CREATE INDEX idx_user_feedback_created_at ON public.user_feedback(created_at DESC);
