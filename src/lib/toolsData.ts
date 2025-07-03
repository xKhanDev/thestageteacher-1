import { 
  BookOpen, MessageCircle, Users, FileText, Target, 
  PenTool, Mail, ClipboardList, Calendar, Star,
  CheckCircle, AlertCircle, TrendingUp, Award,
  Lightbulb, Heart, Clock, Puzzle, Brain, Zap,
  Presentation, Calculator, Eye, Layers, HelpCircle,
  FileQuestion, Edit, Plus, BarChart
} from "lucide-react";

export const tools = [
  // Lesson Planning
  {
    id: 1,
    name: "Lesson Plan Generator",
    description: "Create comprehensive lesson plans with objectives, activities, and assessments tailored to your grade level and subject.",
    category: "Lesson Planning",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-600",
    timesSaved: "2h",
    estimatedTime: "3 min",
    fields: [
      { name: "subject", label: "Subject", type: "text", placeholder: "e.g., Mathematics, Science, English Literature, History" },
      { name: "grade", label: "Grade Level", type: "select", options: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "topic", label: "Topic or Objectives", type: "text", placeholder: "e.g., Understanding photosynthesis, Adding fractions, Character analysis in literature" },
      { name: "duration", label: "Lesson Duration", type: "select", options: ["1 hour", "1.5 hours", "2 hours", "2.5 hours", "3 hours"] },
      { name: "learningStyle", label: "Focus Learning Style", type: "select", options: ["Visual", "Auditory", "Kinesthetic", "Mixed"] },
      { name: "additionalContext", label: "Additional Context", type: "textarea", placeholder: "Include any specific requirements, student needs, available resources, or teaching constraints that should be considered..." },
      { name: "standardAlignment", label: "Standard Alignment", type: "text", placeholder: "UK standard" }
    ]
  },
  {
    id: 2,
    name: "Lesson Hook Ideas",
    description: "Generate creative and engaging opening activities to capture student attention at the start of your lesson.",
    category: "Lesson Planning",
    icon: Zap,
    color: "bg-blue-100 text-blue-600",
    timesSaved: "30m",
    estimatedTime: "2 min",
    fields: [
      { name: "subject", label: "Subject", type: "text", placeholder: "e.g., Mathematics, Science, History" },
      { name: "grade", label: "Grade Level", type: "select", options: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "topic", label: "Topic", type: "text", placeholder: "What topic are you introducing?" },
      { name: "duration", label: "Hook Duration", type: "select", options: ["5 minutes", "10 minutes", "15 minutes"] },
      { name: "resources", label: "Available Resources", type: "select", options: ["Basic supplies only", "Technology available", "Manipulatives", "No special resources"] }
    ]
  },
  {
    id: 3,
    name: "IEP Generator",
    description: "Create individualized education program goals and accommodations tailored to specific student needs.",
    category: "Lesson Planning",
    icon: Target,
    color: "bg-blue-100 text-blue-600",
    timesSaved: "2h",
    estimatedTime: "5 min",
    fields: [
      { name: "studentAge", label: "Student Age/Grade", type: "select", options: ["K-2", "3-5", "6-8", "9-12"] },
      { name: "disability", label: "Primary Disability", type: "select", options: ["Learning Disability", "ADHD", "Autism Spectrum", "Intellectual Disability", "Other"] },
      { name: "subject", label: "Subject Area", type: "select", options: ["Reading", "Math", "Writing", "Social Skills", "Behavior", "Communication"] },
      { name: "currentLevel", label: "Current Performance Level", type: "textarea", placeholder: "Describe the student's current abilities and challenges..." },
      { name: "goalArea", label: "Goal Area", type: "text", placeholder: "What specific skill or behavior needs improvement?" }
    ]
  },
  {
    id: 4,
    name: "Learning Objective Writer",
    description: "Write clear, measurable learning objectives that align with standards and guide instruction.",
    category: "Lesson Planning",
    icon: Award,
    color: "bg-blue-100 text-blue-600",
    timesSaved: "30m",
    estimatedTime: "3 min",
    fields: [
      { name: "subject", label: "Subject", type: "text", placeholder: "e.g., Mathematics, Science, English" },
      { name: "grade", label: "Grade Level", type: "select", options: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "topic", label: "Topic/Skill", type: "text", placeholder: "What will students learn?" },
      { name: "bloomsLevel", label: "Thinking Level", type: "select", options: ["Remember", "Understand", "Apply", "Analyze", "Evaluate", "Create"] },
      { name: "standard", label: "Related Standard (optional)", type: "text", placeholder: "Common Core, state standard..." }
    ]
  },

  // Content Hub
  {
    id: 5,
    name: "Presentation Generator",
    description: "Create engaging slide presentations with content, activities, and visual suggestions for your lessons.",
    category: "Content Hub",
    icon: Presentation,
    color: "bg-green-100 text-green-600",
    timesSaved: "90m",
    estimatedTime: "4 min",
    fields: [
      { name: "subject", label: "Subject", type: "text", placeholder: "e.g., Biology, World History, Algebra" },
      { name: "topic", label: "Presentation Topic", type: "text", placeholder: "What is your presentation about?" },
      { name: "grade", label: "Grade Level", type: "select", options: ["K-2", "3-5", "6-8", "9-12"] },
      { name: "slideCount", label: "Number of Slides", type: "select", options: ["5-8 slides", "10-12 slides", "15-20 slides"] },
      { name: "includeActivities", label: "Include Interactive Elements", type: "select", options: ["Yes", "No"] }
    ]
  },
  {
    id: 6,
    name: "Academic Content Generator",
    description: "Generate curriculum-aligned content, explanations, and examples for any topic or subject area.",
    category: "Content Hub",
    icon: FileText,
    color: "bg-green-100 text-green-600",
    timesSaved: "60m",
    estimatedTime: "3 min",
    fields: [
      { name: "subject", label: "Subject", type: "text", placeholder: "e.g., Chemistry, Literature, Geography" },
      { name: "topic", label: "Topic", type: "text", placeholder: "What content do you need?" },
      { name: "grade", label: "Grade Level", type: "select", options: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "contentType", label: "Content Type", type: "select", options: ["Explanation", "Examples", "Practice Problems", "Vocabulary", "Summary"] },
      { name: "length", label: "Content Length", type: "select", options: ["Brief", "Moderate", "Detailed"] }
    ]
  },
  {
    id: 7,
    name: "Math Spiral Review",
    description: "Create math practice problems that review previously taught concepts alongside new material.",
    category: "Content Hub",
    icon: Calculator,
    color: "bg-green-100 text-green-600",
    timesSaved: "45m",
    estimatedTime: "3 min",
    fields: [
      { name: "grade", label: "Grade Level", type: "select", options: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "Algebra", "Geometry"] },
      { name: "currentTopic", label: "Current Topic", type: "text", placeholder: "What are you currently teaching?" },
      { name: "reviewTopics", label: "Topics to Review", type: "textarea", placeholder: "List previous topics to include in the review..." },
      { name: "problemCount", label: "Number of Problems", type: "select", options: ["10", "15", "20", "25"] },
      { name: "difficulty", label: "Difficulty Level", type: "select", options: ["Easy", "Medium", "Mixed"] }
    ]
  },
  {
    id: 8,
    name: "Text Validation",
    description: "Check reading level, complexity, and appropriateness of texts for your target grade level.",
    category: "Content Hub",
    icon: Eye,
    color: "bg-green-100 text-green-600",
    timesSaved: "20m",
    estimatedTime: "2 min",
    fields: [
      { name: "text", label: "Text to Analyze", type: "textarea", placeholder: "Paste the text you want to validate..." },
      { name: "targetGrade", label: "Target Grade Level", type: "select", options: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "purpose", label: "Text Purpose", type: "select", options: ["Independent Reading", "Guided Reading", "Instructional Text", "Assessment"] },
      { name: "proofreading", label: "Proofreading", type: "select", options: ["Yes", "No"] },
      { name: "rewriteTo", label: "Re-write to make it", type: "select", options: ["Simpler", "More Complex", "More Engaging", "More Formal", "More Informal"] },
      { name: "textSummariser", label: "Text Summariser", type: "select", options: ["Brief Summary", "Detailed Summary", "Key Points Only", "No Summary"] }
    ]
  },
  {
    id: 9,
    name: "Multiple Explanations Generator",
    description: "Generate different ways to explain the same concept to help diverse learners understand.",
    category: "Content Hub",
    icon: Layers,
    color: "bg-green-100 text-green-600",
    timesSaved: "40m",
    estimatedTime: "3 min",
    fields: [
      { name: "concept", label: "Concept to Explain", type: "text", placeholder: "What concept needs multiple explanations?" },
      { name: "subject", label: "Subject", type: "text", placeholder: "e.g., Math, Science, Social Studies" },
      { name: "grade", label: "Grade Level", type: "select", options: ["K-2", "3-5", "6-8", "9-12"] },
      { name: "explanationTypes", label: "Types of Explanations", type: "select", options: ["Visual & Verbal", "Simple & Complex", "Analogy & Direct", "All Types"] }
    ]
  },

  // Assessment
  {
    id: 10,
    name: "General Assessment",
    description: "Create comprehensive assessments including quizzes, tests, and performance tasks for any subject.",
    category: "Assessment",
    icon: CheckCircle,
    color: "bg-purple-100 text-purple-600",
    timesSaved: "90m",
    estimatedTime: "4 min",
    fields: [
      { name: "subject", label: "Subject", type: "text", placeholder: "e.g., Biology, World History, Literature" },
      { name: "topic", label: "Topic/Unit", type: "text", placeholder: "What will you assess?" },
      { name: "grade", label: "Grade Level", type: "select", options: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "assessmentType", label: "Assessment Type", type: "select", options: ["Quiz", "Test", "Performance Task", "Project Rubric"] },
      { name: "questionCount", label: "Number of Questions", type: "select", options: ["5", "10", "15", "20", "25"] },
      { name: "questionTypes", label: "Question Types", type: "select", options: ["Multiple Choice", "Short Answer", "Essay", "Mixed"] },
      { name: "additionalContext", label: "Additional Context", type: "textarea", placeholder: "Include any specific requirements, student needs, learning objectives, or assessment criteria that should be considered..." }
    ]
  },
  {
    id: 11,
    name: "Question Stem Generator",
    description: "Generate thought-provoking question stems to deepen student thinking and discussion.",
    category: "Assessment",
    icon: HelpCircle,
    color: "bg-purple-100 text-purple-600",
    timesSaved: "30m",
    estimatedTime: "2 min",
    fields: [
      { name: "subject", label: "Subject", type: "text", placeholder: "e.g., Science, Literature, History" },
      { name: "topic", label: "Topic", type: "text", placeholder: "What topic are you discussing?" },
      { name: "bloomsLevel", label: "Thinking Level", type: "select", options: ["Remember", "Understand", "Apply", "Analyze", "Evaluate", "Create"] },
      { name: "questionCount", label: "Number of Questions", type: "select", options: ["5", "10", "15", "20"] }
    ]
  },
  {
    id: 12,
    name: "Worksheet Generator",
    description: "Create practice worksheets with problems, exercises, and activities for any subject area.",
    category: "Assessment",
    icon: FileQuestion,
    color: "bg-purple-100 text-purple-600",
    timesSaved: "60m",
    estimatedTime: "4 min",
    fields: [
      { name: "subject", label: "Subject", type: "text", placeholder: "e.g., Math, Grammar, Science" },
      { name: "topic", label: "Topic/Skill", type: "text", placeholder: "What skill will students practice?" },
      { name: "grade", label: "Grade Level", type: "select", options: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "problemCount", label: "Number of Problems", type: "select", options: ["10", "15", "20", "25", "30"] },
      { name: "includeAnswerKey", label: "Include Answer Key", type: "select", options: ["Yes", "No"] },
      { name: "additionalContext", label: "Additional Context", type: "textarea", placeholder: "Include any specific requirements, difficulty adjustments, student accommodations, or worksheet format preferences..." }
    ]
  },
  {
    id: 13,
    name: "Multi-Step Assignment Creator",
    description: "Design complex assignments that break down into manageable steps with clear instructions.",
    category: "Assessment",
    icon: Layers,
    color: "bg-purple-100 text-purple-600",
    timesSaved: "75m",
    estimatedTime: "5 min",
    fields: [
      { name: "subject", label: "Subject", type: "text", placeholder: "e.g., Research Project, Lab Report, Essay" },
      { name: "assignmentType", label: "Assignment Type", type: "select", options: ["Research Project", "Lab Report", "Essay", "Creative Project", "Problem Solving"] },
      { name: "grade", label: "Grade Level", type: "select", options: ["3-5", "6-8", "9-12"] },
      { name: "duration", label: "Assignment Duration", type: "select", options: ["1 week", "2 weeks", "1 month", "Quarter-long"] },
      { name: "learningGoals", label: "Learning Goals", type: "textarea", placeholder: "What should students learn from this assignment?" }
    ]
  },
  {
    id: 14,
    name: "DOK Questions Generator",
    description: "Create questions at different Depth of Knowledge levels to assess various thinking skills.",
    category: "Assessment",
    icon: Brain,
    color: "bg-purple-100 text-purple-600",
    timesSaved: "45m",
    estimatedTime: "3 min",
    fields: [
      { name: "subject", label: "Subject", type: "text", placeholder: "e.g., Math, Science, Social Studies" },
      { name: "topic", label: "Topic", type: "text", placeholder: "What topic will you assess?" },
      { name: "dokLevel", label: "DOK Level", type: "select", options: ["Level 1 (Recall)", "Level 2 (Application)", "Level 3 (Analysis)", "Level 4 (Extended Thinking)", "Mixed Levels"] },
      { name: "questionCount", label: "Number of Questions", type: "select", options: ["5", "8", "10", "12"] }
    ]
  },
  {
    id: 15,
    name: "Quiz Creator",
    description: "Generate quick formative assessment quizzes to check student understanding.",
    category: "Assessment",
    icon: ClipboardList,
    color: "bg-purple-100 text-purple-600",
    timesSaved: "30m",
    estimatedTime: "3 min",
    fields: [
      { name: "subject", label: "Subject", type: "text", placeholder: "e.g., Vocabulary, Math Facts, Science Concepts" },
      { name: "topic", label: "Topic", type: "text", placeholder: "What will you quiz on?" },
      { name: "questionCount", label: "Number of Questions", type: "select", options: ["5", "10", "15"] },
      { name: "questionType", label: "Question Type", type: "select", options: ["Multiple Choice", "True/False", "Fill in the Blank", "Mixed"] },
      { name: "difficulty", label: "Difficulty", type: "select", options: ["Easy", "Medium", "Hard"] },
      { name: "additionalContext", label: "Additional Context", type: "textarea", placeholder: "Include any specific learning standards, student accommodations, or quiz format preferences..." }
    ]
  },
  {
    id: 16,
    name: "Math Problem Generator",
    description: "Create custom math problems and word problems for practice or assessment.",
    category: "Assessment",
    icon: Calculator,
    color: "bg-purple-100 text-purple-600",
    timesSaved: "40m",
    estimatedTime: "3 min",
    fields: [
      { name: "mathTopic", label: "Math Topic", type: "select", options: ["Addition", "Subtraction", "Multiplication", "Division", "Fractions", "Decimals", "Geometry", "Algebra", "Word Problems"] },
      { name: "grade", label: "Grade Level", type: "select", options: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "Algebra", "Geometry"] },
      { name: "problemCount", label: "Number of Problems", type: "select", options: ["10", "15", "20", "25"] },
      { name: "includeWordProblems", label: "Include Word Problems", type: "select", options: ["Yes", "No", "Only Word Problems"] },
      { name: "additionalContext", label: "Additional Context", type: "textarea", placeholder: "Include any specific difficulty requirements, real-world contexts, or student accommodations for the math problems..." }
    ]
  },

  // Communication
  {
    id: 17,
    name: "Parent Email Composer",
    description: "Draft professional, warm emails to parents about student progress, concerns, or celebrations.",
    category: "Communication",
    icon: Mail,
    color: "bg-orange-100 text-orange-600",
    timesSaved: "30m",
    estimatedTime: "2 min",
    fields: [
      { name: "emailType", label: "Email Purpose", type: "select", options: ["Positive Update", "Concern/Issue", "Conference Request", "General Update", "Thank You"] },
      { name: "studentName", label: "Student Name", type: "text", placeholder: "Student's first name" },
      { name: "situation", label: "Situation Details", type: "textarea", placeholder: "Brief description of what you want to communicate..." },
      { name: "tone", label: "Tone", type: "select", options: ["Professional & Warm", "Direct & Clear", "Encouraging", "Diplomatic"] }
    ]
  },
  {
    id: 18,
    name: "Student Report/Feedback Writer",
    description: "Create personalized, constructive progress reports and detailed feedback for students.",
    category: "Communication",
    icon: Edit,
    color: "bg-orange-100 text-orange-600",
    timesSaved: "2h",
    estimatedTime: "3 min",
    fields: [
      { name: "studentName", label: "Student Name", type: "text", placeholder: "Student's name" },
      { name: "subject", label: "Subject Area", type: "select", options: ["Math", "Reading", "Writing", "Science", "Social Studies", "Overall Performance"] },
      { name: "strengths", label: "Key Strengths", type: "textarea", placeholder: "What is this student doing well?" },
      { name: "growthAreas", label: "Growth Areas", type: "textarea", placeholder: "Areas for improvement" },
      { name: "reportType", label: "Report Type", type: "select", options: ["Progress Report", "Report Card Comment", "Conference Notes", "Assignment Feedback"] }
    ]
  },
  {
    id: 19,
    name: "Class Newsletter Creator",
    description: "Design engaging newsletters to keep parents informed about classroom happenings and learning.",
    category: "Communication",
    icon: MessageCircle,
    color: "bg-orange-100 text-orange-600",
    timesSaved: "60m",
    estimatedTime: "5 min",
    fields: [
      { name: "grade", label: "Grade/Class", type: "text", placeholder: "e.g., 3rd Grade, Mrs. Smith's Class" },
      { name: "period", label: "Time Period", type: "select", options: ["Weekly", "Monthly", "End of Unit", "Special Event"] },
      { name: "highlights", label: "Learning Highlights", type: "textarea", placeholder: "What have students been learning?" },
      { name: "upcoming", label: "Upcoming Events", type: "textarea", placeholder: "Important dates, assignments, events..." },
      { name: "tone", label: "Newsletter Tone", type: "select", options: ["Friendly & Casual", "Professional", "Enthusiastic", "Informative"] }
    ]
  },

  // Behaviour Support
  {
    id: 20,
    name: "Behavior Plan Creator",
    description: "Develop positive behavior intervention plans tailored to individual student needs.",
    category: "Behaviour Support",
    icon: Users,
    color: "bg-red-100 text-red-600",
    timesSaved: "90m",
    estimatedTime: "6 min",
    fields: [
      { name: "studentAge", label: "Student Age/Grade", type: "select", options: ["K-2", "3-5", "6-8", "9-12"] },
      { name: "behaviorConcern", label: "Primary Behavior Concern", type: "select", options: ["Attention/Focus", "Following Directions", "Social Interactions", "Emotional Regulation", "Work Completion"] },
      { name: "triggers", label: "Possible Triggers", type: "textarea", placeholder: "When does this behavior typically occur?" },
      { name: "strengths", label: "Student Strengths", type: "textarea", placeholder: "What motivates this student?" }
    ]
  },
  {
    id: 21,
    name: "Calm Down Strategies",
    description: "Get personalized de-escalation techniques and calm-down strategies for different situations.",
    category: "Behaviour Support",
    icon: Heart,
    color: "bg-red-100 text-red-600",
    timesSaved: "45m",
    estimatedTime: "3 min",
    fields: [
      { name: "ageGroup", label: "Age Group", type: "select", options: ["Early Elementary (K-2)", "Elementary (3-5)", "Middle School (6-8)", "High School (9-12)"] },
      { name: "situation", label: "Situation Type", type: "select", options: ["Individual Student", "Whole Class", "Transition Times", "Testing Situations"] },
      { name: "behaviorType", label: "Behavior Pattern", type: "select", options: ["Anxiety/Worry", "Anger/Frustration", "Overexcitement", "Withdrawal"] }
    ]
  },

  // Differentiation
  {
    id: 22,
    name: "Learning Accommodations",
    description: "Generate specific accommodations and modifications for diverse learners and special needs.",
    category: "Differentiation",
    icon: Target,
    color: "bg-pink-100 text-pink-600",
    timesSaved: "75m",
    estimatedTime: "5 min",
    fields: [
      { name: "learningNeed", label: "Learning Need", type: "select", options: ["ADHD", "Dyslexia", "Autism Spectrum", "English Language Learner", "Gifted", "Processing Delays", "Visual Impairment", "Hearing Impairment"] },
      { name: "subject", label: "Subject Area", type: "select", options: ["Reading", "Math", "Writing", "Science", "All Subjects"] },
      { name: "currentChallenges", label: "Current Challenges", type: "textarea", placeholder: "What specific difficulties is the student experiencing?" },
      { name: "strengths", label: "Student Strengths", type: "textarea", placeholder: "What does this student do well?" }
    ]
  },
  {
    id: 23,
    name: "Multilevel Activities",
    description: "Create the same activity with different difficulty levels for mixed-ability classes.",
    category: "Differentiation",
    icon: TrendingUp,
    color: "bg-pink-100 text-pink-600",
    timesSaved: "60m",
    estimatedTime: "4 min",
    fields: [
      { name: "subject", label: "Subject", type: "text", placeholder: "e.g., Math, Reading, Science" },
      { name: "topic", label: "Topic/Skill", type: "text", placeholder: "What are you teaching?" },
      { name: "grade", label: "Grade Level", type: "select", options: ["K", "1", "2", "3", "4", "5", "6", "7", "8"] },
      { name: "levels", label: "How Many Levels?", type: "select", options: ["2 levels", "3 levels", "4 levels"] },
      { name: "activityType", label: "Activity Type", type: "select", options: ["Worksheet", "Hands-on Activity", "Discussion Questions", "Project"] }
    ]
  }
];
