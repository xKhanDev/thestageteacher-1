import { Button } from "@/components/ui/button";
import {
  BookOpen,
  FileText,
  CheckCircle,
  MessageCircle,
  Users,
  Target,
  Grid,
} from "lucide-react";

interface CategoryFiltersProps {
  categories: any[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const iconMap = {
  Grid,
  BookOpen,
  FileText,
  CheckCircle,
  MessageCircle,
  Users,
  Target,
};

const CategoryFilters = ({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {categories.map((category) => {
        const IconComponent = iconMap[category.icon];
        return (
          <Button
            key={category.name}
            variant={selectedCategory === category.name ? "default" : "outline"}
            onClick={() => onCategorySelect(category.name)}
            className={`flex items-center space-x-1 sm:space-x-2 rounded-2xl px-3 sm:px-6 py-2 sm:py-3 transition-all duration-200 text-xs sm:text-sm ${
              selectedCategory === category.name
                ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg transform scale-105`
                : "bg-white/80 backdrop-blur-sm border-2 hover:border-purple-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-black"
            }`}
          >
            <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="font-medium whitespace-nowrap">
              {category.name}
            </span>
          </Button>
        );
      })}
    </div>
  );
};

export default CategoryFilters;
