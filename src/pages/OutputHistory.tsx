
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Download, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const OutputHistory = () => {
  // Mock data for demonstration
  const [history] = useState([
    {
      id: 1,
      toolName: "Lesson Plan Generator",
      topic: "Introduction to Fractions",
      date: "2024-01-15",
      status: "completed",
      preview: "A comprehensive lesson plan covering basic fraction concepts..."
    },
    {
      id: 2,
      toolName: "Parent Email Composer",
      subject: "Student Progress Update",
      date: "2024-01-14",
      status: "completed",
      preview: "Dear Parents, I wanted to update you on your child's recent progress..."
    },
    {
      id: 3,
      toolName: "Quiz Creator",
      topic: "American History - Civil War",
      date: "2024-01-13",
      status: "completed",
      preview: "Multiple choice quiz with 10 questions covering key Civil War events..."
    },
    {
      id: 4,
      toolName: "Worksheet Generator",
      topic: "Algebra - Linear Equations",
      date: "2024-01-12",
      status: "completed",
      preview: "Practice worksheet with 15 problems on solving linear equations..."
    },
    {
      id: 5,
      toolName: "Learning Accommodations",
      student: "Student with ADHD",
      date: "2024-01-11",
      status: "completed",
      preview: "Tailored accommodations including extended time, frequent breaks..."
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Output History</h1>
              <p className="text-gray-600">View all your generated content and past requests</p>
            </div>
          </div>
        </div>

        {/* History List */}
        <div className="space-y-4">
          {history.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {item.toolName}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {item.topic || item.subject || item.student}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{item.preview}</p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {history.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No output history yet
            </h3>
            <p className="text-gray-500">
              Start using our AI tools to see your generated content here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputHistory;
