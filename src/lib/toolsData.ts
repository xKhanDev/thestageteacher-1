
import { 
  BookOpen, MessageCircle, Users, FileText, Target, 
  PenTool, Mail, ClipboardList, Calendar, Star,
  CheckCircle, AlertCircle, TrendingUp, Award,
  Lightbulb, Heart, Clock, Puzzle, Brain, Zap
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
      { name: "subject", label: "Subject", type: "select", options: ["Math", "Science", "English", "History", "Art"] },
      { name: "grade", label: "Grade Level", type: "select", options: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "topic", label: "Lesson Topic", type: "text", placeholder: "e.g., Photosynthesis, Fractions, Character Analysis" },
      { name: "duration", label: "Lesson Duration", type: "select", options: ["30 min", "45 min", "60 min", "90 min"] },
      { name: "learningStyle", label: "Focus Learning Style", type: "select", options: ["Visual", "Auditory", "Kinesthetic", "Mixed"] }
    ]
  },
  {
    id: 2,
    name: "Assessment Creator",
    description: "Generate quizzes, tests, and rubrics that align with your learning objectives and standards.",
    category: "Lesson Planning",
    icon: CheckCircle,
    color: "bg-blue-100 text-blue-600",
    timesSaved: "90m",
    estimatedTime: "4 min",
    fields: [
      { name: "assessmentType", label: "Assessment Type", type: "select", options: ["Quiz", "Test", "Rubric", "Project Checklist"] },
      { name: "subject", label: "Subject", type: "select", options: ["Math", "Science", "English", "History", "Art"] },
      { name: "topic", label: "Topic/Unit", type: "text", placeholder: "What will you assess?" },
      { name: "questionCount", label: "Number of Questions", type: "select", options: ["5", "10", "15", "20", "25"] },
      { name: "difficulty", label: "Difficulty Level", type: "select", options: ["Easy", "Medium", "Hard", "Mixed"] }
    ]
  },
  {
    id: 3,
    name: "Activity Ideas Generator",
    description: "Get creative, engaging activities and games to make your lessons memorable and fun.",
    category: "Lesson Planning",
    icon: Puzzle,
    color: "bg-blue-100 text-blue-600",
    timesSaved: "45m",
    estimatedTime: "2 min",
    fields: [
      { name: "subject", label: "Subject", type: "select", options: ["Math", "Science", "English", "History", "Art", "PE"] },
      { name: "activityType", label: "Activity Type", type: "select", options: ["Individual", "Group", "Whole Class", "Centers"] },
      { name: "topic", label: "Topic", type: "text", placeholder: "What concept are you teaching?" },
      { name: "materials", label: "Available Materials", type: "select", options: ["Basic supplies only", "Technology available", "Manipulatives", "Outdoor space"] }
    ]
  },

  // Communication
  {
    id: 4,
    name: "Parent Email Composer",
    description: "Draft professional, warm emails to parents about student progress, concerns, or celebrations.",
    category: "Communication",
    icon: Mail,
    color: "bg-green-100 text-green-600",
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
    id: 5,
    name: "Student Report Writer",
    description: "Create personalized, constructive progress reports and report card comments.",
    category: "Communication",
    icon: FileText,
    color: "bg-green-100 text-green-600",
    timesSaved: "2h",
    estimatedTime: "3 min",
    fields: [
      { name: "studentName", label: "Student Name", type: "text", placeholder: "Student's name" },
      { name: "subject", label: "Subject Area", type: "select", options: ["Math", "Reading", "Writing", "Science", "Social Studies", "Overall"] },
      { name: "strengths", label: "Key Strengths", type: "textarea", placeholder: "What is this student doing well?" },
      { name: "growthAreas", label: "Growth Areas", type: "textarea", placeholder: "Areas for improvement" },
      { name: "reportType", label: "Report Type", type: "select", options: ["Progress Report", "Report Card", "Conference Notes"] }
    ]
  },
  {
    id: 6,
    name: "Class Newsletter Creator",
    description: "Design engaging newsletters to keep parents informed about classroom happenings.",
    category: "Communication",
    icon: MessageCircle,
    color: "bg-green-100 text-green-600",
    timesSaved: "60m",
    estimatedTime: "5 min",
    fields: [
      { name: "grade", label: "Grade/Class", type: "text", placeholder: "e.g., 3rd Grade, Mrs. Smith's Class" },
      { name: "period", label: "Time Period", type: "select", options: ["Weekly", "Monthly", "End of Unit", "Special Event"] },
      { name: "highlights", label: "Learning Highlights", type: "textarea", placeholder: "What have students been learning?" },
      { name: "upcoming", label: "Upcoming Events", type: "textarea", placeholder: "Important dates, assignments, events..." }
    ]
  },

  // Behavior Support
  {
    id: 7,
    name: "Behavior Plan Creator",
    description: "Develop positive behavior intervention plans tailored to individual student needs.",
    category: "Behavior Support",
    icon: Users,
    color: "bg-orange-100 text-orange-600",
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
    id: 8,
    name: "Calm Down Strategies",
    description: "Get personalized de-escalation techniques and calm-down strategies for different situations.",
    category: "Behavior Support",
    icon: Heart,
    color: "bg-orange-100 text-orange-600",
    timesSaved: "45m",
    estimatedTime: "3 min",
    fields: [
      { name: "ageGroup", label: "Age Group", type: "select", options: ["Early Elementary (K-2)", "Elementary (3-5)", "Middle School (6-8)", "High School (9-12)"] },
      { name: "situation", label: "Situation Type", type: "select", options: ["Individual Student", "Whole Class", "Transition Times", "Testing Situations"] },
      { name: "behaviorType", label: "Behavior Pattern", type: "select", options: ["Anxiety/Worry", "Anger/Frustration", "Overexcitement", "Withdrawal"] }
    ]
  },
  {
    id: 9,
    name: "Positive Reinforcement Ideas",
    description: "Discover creative ways to celebrate student achievements and motivate positive behavior.",
    category: "Behavior Support",
    icon: Star,
    color: "bg-orange-100 text-orange-600",
    timesSaved: "30m",
    estimatedTime: "2 min",
    fields: [
      { name: "grade", label: "Grade Level", type: "select", options: ["K", "1-2", "3-5", "6-8", "9-12"] },
      { name: "reinforcementType", label: "Type of Recognition", type: "select", options: ["Individual Achievement", "Class Goal", "Behavior Improvement", "Academic Progress"] },
      { name: "budget", label: "Budget/Resources", type: "select", options: ["No cost", "Low cost ($1-5)", "Classroom supplies", "Time-based rewards"] }
    ]
  },

  // Admin
  {
    id: 10,
    name: "Meeting Minutes Generator",
    description: "Create professional meeting summaries and action items for IEPs, PLCs, and parent conferences.",
    category: "Admin",
    icon: ClipboardList,
    color: "bg-gray-100 text-gray-600",
    timesSaved: "45m",
    estimatedTime: "4 min",
    fields: [
      { name: "meetingType", label: "Meeting Type", type: "select", options: ["IEP Meeting", "Parent Conference", "PLC/Team Meeting", "Grade Level Meeting"] },
      { name: "attendees", label: "Attendees", type: "text", placeholder: "Who was present?" },
      { name: "keyPoints", label: "Key Discussion Points", type: "textarea", placeholder: "Main topics discussed..." },
      { name: "actionItems", label: "Action Items", type: "textarea", placeholder: "What needs to follow up?" }
    ]
  },
  {
    id: 11,
    name: "Supply Request Letter",
    description: "Write compelling requests for classroom supplies, funding, or resources.",
    category: "Admin",
    icon: PenTool,
    color: "bg-gray-100 text-gray-600",
    timesSaved: "60m",
    estimatedTime: "5 min",
    fields: [
      { name: "requestType", label: "Request Type", type: "select", options: ["Classroom Supplies", "Technology", "Books/Materials", "Field Trip Funding", "Professional Development"] },
      { name: "recipient", label: "Requesting From", type: "select", options: ["Principal", "District Office", "Parent Organization", "Local Business", "Grant Foundation"] },
      { name: "items", label: "Items Needed", type: "textarea", placeholder: "List what you need..." },
      { name: "justification", label: "Educational Impact", type: "textarea", placeholder: "How will this benefit students?" }
    ]
  },
  {
    id: 12,
    name: "Sub Plans Creator",
    description: "Generate detailed substitute teacher plans that keep your class running smoothly.",
    category: "Admin",
    icon: Calendar,
    color: "bg-gray-100 text-gray-600",
    timesSaved: "90m",
    estimatedTime: "4 min",
    fields: [
      { name: "grade", label: "Grade Level", type: "select", options: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9-12"] },
      { name: "duration", label: "Absence Duration", type: "select", options: ["Half Day", "Full Day", "Multiple Days"] },
      { name: "subjects", label: "Subjects to Cover", type: "text", placeholder: "Math, Reading, Science..." },
      { name: "classInfo", label: "Important Class Info", type: "textarea", placeholder: "Special needs, routines, helpful students..." }
    ]
  },

  // Differentiation
  {
    id: 13,
    name: "Learning Accommodations",
    description: "Generate specific accommodations and modifications for diverse learners.",
    category: "Differentiation",
    icon: Target,
    color: "bg-pink-100 text-pink-600",
    timesSaved: "75m",
    estimatedTime: "5 min",
    fields: [
      { name: "learningNeed", label: "Learning Need", type: "select", options: ["ADHD", "Dyslexia", "Autism Spectrum", "English Language Learner", "Gifted", "Processing Delays"] },
      { name: "subject", label: "Subject Area", type: "select", options: ["Reading", "Math", "Writing", "Science", "All Subjects"] },
      { name: "currentChallenges", label: "Current Challenges", type: "textarea", placeholder: "What specific difficulties is the student experiencing?" },
      { name: "strengths", label: "Student Strengths", type: "textarea", placeholder: "What does this student do well?" }
    ]
  },
  {
    id: 14,
    name: "Multilevel Activities",
    description: "Create the same activity with different difficulty levels for mixed-ability classes.",
    category: "Differentiation",
    icon: TrendingUp,
    color: "bg-pink-100 text-pink-600",
    timesSaved: "60m",
    estimatedTime: "4 min",
    fields: [
      { name: "subject", label: "Subject", type: "select", options: ["Math", "Reading", "Writing", "Science", "Social Studies"] },
      { name: "topic", label: "Topic/Skill", type: "text", placeholder: "What are you teaching?" },
      { name: "grade", label: "Grade Level", type: "select", options: ["K", "1", "2", "3", "4", "5", "6", "7", "8"] },
      { name: "levels", label: "How Many Levels?", type: "select", options: ["2 levels", "3 levels", "4 levels"] }
    ]
  },
  {
    id: 15,
    name: "Choice Board Creator",
    description: "Design engaging choice boards that let students demonstrate learning in different ways.",
    category: "Differentiation",
    icon: Lightbulb,
    color: "bg-pink-100 text-pink-600",
    timesSaved: "45m",
    estimatedTime: "3 min",
    fields: [
      { name: "subject", label: "Subject", type: "select", options: ["Math", "Reading", "Writing", "Science", "Social Studies", "Any Subject"] },
      { name: "topic", label: "Topic/Unit", type: "text", placeholder: "What topic will students explore?" },
      { name: "grade", label: "Grade Level", type: "select", options: ["K-2", "3-5", "6-8", "9-12"] },
      { name: "learningStyles", label: "Include Activities For", type: "select", options: ["All Learning Styles", "Visual Learners", "Kinesthetic Learners", "Creative Types"] }
    ]
  },

  // Additional High-Value Tools
  {
    id: 16,
    name: "Question Stems Generator",
    description: "Get thought-provoking questions to deepen student thinking and discussion.",
    category: "Lesson Planning",
    icon: Brain,
    color: "bg-blue-100 text-blue-600",
    timesSaved: "30m",
    estimatedTime: "2 min",
    fields: [
      { name: "subject", label: "Subject", type: "select", options: ["Math", "Science", "English", "History", "Art"] },
      { name: "bloomsLevel", label: "Thinking Level", type: "select", options: ["Remember", "Understand", "Apply", "Analyze", "Evaluate", "Create"] },
      { name: "topic", label: "Topic", type: "text", placeholder: "What topic are you discussing?" }
    ]
  },
  {
    id: 17,
    name: "Icebreaker Activities",
    description: "Fun, quick activities to build community and start class on a positive note.",
    category: "Behavior Support",
    icon: Zap,
    color: "bg-orange-100 text-orange-600",
    timesSaved: "20m",
    estimatedTime: "1 min",
    fields: [
      { name: "grade", label: "Grade Level", type: "select", options: ["K-2", "3-5", "6-8", "9-12"] },
      { name: "time", label: "Time Available", type: "select", options: ["5 minutes", "10 minutes", "15 minutes"] },
      { name: "purpose", label: "Purpose", type: "select", options: ["Getting to Know Each Other", "Energizer", "Academic Review", "Calm Focus"] }
    ]
  },
  {
    id: 18,
    name: "Learning Objective Writer",
    description: "Write clear, measurable learning objectives that align with standards.",
    category: "Lesson Planning",
    icon: Award,
    color: "bg-blue-100 text-blue-600",
    timesSaved: "30m",
    estimatedTime: "3 min",
    fields: [
      { name: "subject", label: "Subject", type: "select", options: ["Math", "Science", "English", "History", "Art"] },
      { name: "grade", label: "Grade Level", type: "select", options: ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
      { name: "topic", label: "Topic/Skill", type: "text", placeholder: "What will students learn?" },
      { name: "standard", label: "Related Standard (optional)", type: "text", placeholder: "Common Core, state standard..." }
    ]
  }
];
