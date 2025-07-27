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
        const isSelected = selectedCategory === category.name;
        return (
          <Button
            key={category.name}
            variant={isSelected ? "default" : "outline"}
            onClick={() => onCategorySelect(category.name)}
            className={`flex items-center space-x-1 sm:space-x-2 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 transition-all duration-300 text-xs sm:text-sm font-medium border-2 ${
              isSelected
                ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg border-transparent hover:shadow-xl`
                : "bg-white/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:bg-primary/5 text-foreground hover:shadow-md"
            }`}
          >
            <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="whitespace-nowrap">
              {category.name}
            </span>
          </Button>
        );
      })}
    </div>
  );
};

export default CategoryFilters;
