
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, CheckCircle, MessageCircle, Users, Target } from "lucide-react";

interface CategoryFiltersProps {
  categories: any[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const iconMap = {
  BookOpen,
  FileText,
  CheckCircle,
  MessageCircle,  
  Users,
  Target
};

const CategoryFilters = ({ categories, selectedCategory, onCategorySelect }: CategoryFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const IconComponent = iconMap[category.icon];
        return (
          <Button
            key={category.name}
            variant={selectedCategory === category.name ? "default" : "outline"}
            onClick={() => onCategorySelect(category.name)}
            className={`flex items-center space-x-2 rounded-2xl px-6 py-3 transition-all duration-200 ${
              selectedCategory === category.name 
                ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg transform scale-105` 
                : 'bg-white/80 backdrop-blur-sm border-2 hover:border-purple-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
            }`}
          >
            <IconComponent className="h-4 w-4" />
            <span className="font-medium">{category.name}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default CategoryFilters;
