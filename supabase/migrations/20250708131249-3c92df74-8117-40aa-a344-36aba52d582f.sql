-- Create LMS core tables

-- Create courses table
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  instructor_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  course_code TEXT UNIQUE,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  difficulty_level TEXT DEFAULT 'beginner' CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
  estimated_duration INTEGER, -- in hours
  price DECIMAL(10,2) DEFAULT 0,
  is_free BOOLEAN DEFAULT true,
  max_students INTEGER,
  start_date TIMESTAMP WITH TIME ZONE,
  end_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create course categories table
CREATE TABLE public.course_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  color TEXT DEFAULT '#6366f1',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create course_category_assignments table (many-to-many)
CREATE TABLE public.course_category_assignments (
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES public.course_categories(id) ON DELETE CASCADE,
  PRIMARY KEY (course_id, category_id)
);

-- Create lessons table
CREATE TABLE public.lessons (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  video_url TEXT,
  order_index INTEGER NOT NULL,
  duration INTEGER, -- in minutes
  is_preview BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create enrollments table
CREATE TABLE public.enrollments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  completed_at TIMESTAMP WITH TIME ZONE,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'completed', 'dropped', 'suspended')),
  progress_percentage DECIMAL(5,2) DEFAULT 0,
  UNIQUE(student_id, course_id)
);

-- Create assignments table
CREATE TABLE public.assignments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES public.lessons(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT,
  instructions TEXT,
  max_points DECIMAL(8,2) DEFAULT 100,
  due_date TIMESTAMP WITH TIME ZONE,
  submission_type TEXT DEFAULT 'text' CHECK (submission_type IN ('text', 'file', 'url', 'quiz')),
  is_required BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create assignment submissions table
CREATE TABLE public.assignment_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  assignment_id UUID NOT NULL REFERENCES public.assignments(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT,
  file_url TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  grade DECIMAL(8,2),
  feedback TEXT,
  graded_at TIMESTAMP WITH TIME ZONE,
  graded_by UUID REFERENCES auth.users(id),
  status TEXT NOT NULL DEFAULT 'submitted' CHECK (status IN ('draft', 'submitted', 'graded', 'returned')),
  UNIQUE(assignment_id, student_id)
);

-- Create lesson progress table
CREATE TABLE public.lesson_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  completed_at TIMESTAMP WITH TIME ZONE,
  time_spent INTEGER DEFAULT 0, -- in seconds
  progress_percentage DECIMAL(5,2) DEFAULT 0,
  last_accessed_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(student_id, lesson_id)
);

-- Create announcements table
CREATE TABLE public.announcements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  priority TEXT DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
  is_pinned BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_category_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assignment_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for courses
CREATE POLICY "Anyone can view published courses" ON public.courses
  FOR SELECT USING (status = 'published');

CREATE POLICY "Instructors can manage their own courses" ON public.courses
  FOR ALL USING (auth.uid() = instructor_id);

CREATE POLICY "Enrolled students can view their courses" ON public.courses
  FOR SELECT USING (
    id IN (
      SELECT course_id FROM public.enrollments 
      WHERE student_id = auth.uid() AND status = 'active'
    )
  );

-- Create RLS policies for lessons
CREATE POLICY "Anyone can view lessons of published courses" ON public.lessons
  FOR SELECT USING (
    course_id IN (SELECT id FROM public.courses WHERE status = 'published')
  );

CREATE POLICY "Instructors can manage lessons in their courses" ON public.lessons
  FOR ALL USING (
    course_id IN (SELECT id FROM public.courses WHERE instructor_id = auth.uid())
  );

-- Create RLS policies for enrollments
CREATE POLICY "Students can view their own enrollments" ON public.enrollments
  FOR SELECT USING (auth.uid() = student_id);

CREATE POLICY "Students can enroll themselves in courses" ON public.enrollments
  FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Instructors can view enrollments in their courses" ON public.enrollments
  FOR SELECT USING (
    course_id IN (SELECT id FROM public.courses WHERE instructor_id = auth.uid())
  );

-- Create RLS policies for assignments
CREATE POLICY "Students can view assignments in enrolled courses" ON public.assignments
  FOR SELECT USING (
    course_id IN (
      SELECT course_id FROM public.enrollments 
      WHERE student_id = auth.uid() AND status = 'active'
    )
  );

CREATE POLICY "Instructors can manage assignments in their courses" ON public.assignments
  FOR ALL USING (
    course_id IN (SELECT id FROM public.courses WHERE instructor_id = auth.uid())
  );

-- Create RLS policies for assignment submissions
CREATE POLICY "Students can manage their own submissions" ON public.assignment_submissions
  FOR ALL USING (auth.uid() = student_id);

CREATE POLICY "Instructors can view submissions in their courses" ON public.assignment_submissions
  FOR SELECT USING (
    assignment_id IN (
      SELECT a.id FROM public.assignments a
      JOIN public.courses c ON a.course_id = c.id
      WHERE c.instructor_id = auth.uid()
    )
  );

CREATE POLICY "Instructors can grade submissions in their courses" ON public.assignment_submissions
  FOR UPDATE USING (
    assignment_id IN (
      SELECT a.id FROM public.assignments a
      JOIN public.courses c ON a.course_id = c.id
      WHERE c.instructor_id = auth.uid()
    )
  );

-- Create RLS policies for lesson progress
CREATE POLICY "Students can manage their own progress" ON public.lesson_progress
  FOR ALL USING (auth.uid() = student_id);

CREATE POLICY "Instructors can view progress in their courses" ON public.lesson_progress
  FOR SELECT USING (
    course_id IN (SELECT id FROM public.courses WHERE instructor_id = auth.uid())
  );

-- Create RLS policies for announcements
CREATE POLICY "Students can view announcements in enrolled courses" ON public.announcements
  FOR SELECT USING (
    course_id IN (
      SELECT course_id FROM public.enrollments 
      WHERE student_id = auth.uid() AND status = 'active'
    )
  );

CREATE POLICY "Instructors can manage announcements in their courses" ON public.announcements
  FOR ALL USING (
    course_id IN (SELECT id FROM public.courses WHERE instructor_id = auth.uid())
  );

-- Create RLS policies for course categories (public read access)
CREATE POLICY "Anyone can view course categories" ON public.course_categories
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can use course categories" ON public.course_category_assignments
  FOR SELECT USING (true);

-- Create indexes for better performance
CREATE INDEX idx_courses_instructor_id ON public.courses(instructor_id);
CREATE INDEX idx_courses_status ON public.courses(status);
CREATE INDEX idx_lessons_course_id ON public.lessons(course_id);
CREATE INDEX idx_lessons_order ON public.lessons(course_id, order_index);
CREATE INDEX idx_enrollments_student_id ON public.enrollments(student_id);
CREATE INDEX idx_enrollments_course_id ON public.enrollments(course_id);
CREATE INDEX idx_assignments_course_id ON public.assignments(course_id);
CREATE INDEX idx_assignment_submissions_student_id ON public.assignment_submissions(student_id);
CREATE INDEX idx_lesson_progress_student_id ON public.lesson_progress(student_id);
CREATE INDEX idx_lesson_progress_course_id ON public.lesson_progress(course_id);
CREATE INDEX idx_announcements_course_id ON public.announcements(course_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_courses_updated_at
  BEFORE UPDATE ON public.courses
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_lessons_updated_at
  BEFORE UPDATE ON public.lessons
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_assignments_updated_at
  BEFORE UPDATE ON public.assignments
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_announcements_updated_at
  BEFORE UPDATE ON public.announcements
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some default course categories
INSERT INTO public.course_categories (name, description, color) VALUES
  ('Programming', 'Software development and coding courses', '#3b82f6'),
  ('Mathematics', 'Mathematical concepts and problem solving', '#ef4444'),
  ('Science', 'Natural sciences and research methods', '#10b981'),
  ('Language Arts', 'Literature, writing, and communication', '#f59e0b'),
  ('Arts & Design', 'Creative and visual arts', '#8b5cf6'),
  ('Business', 'Entrepreneurship and business skills', '#06b6d4'),
  ('Health & Wellness', 'Physical and mental health topics', '#84cc16'),
  ('History & Social Studies', 'Historical events and social sciences', '#f97316');