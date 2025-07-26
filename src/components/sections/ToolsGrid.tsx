import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ToolsGridProps {
  tools: any[];
  categories: any[];
  onToolClick: (tool: any) => void;
  searchTerm: string;
}

const ToolsGrid = ({
  tools,
  categories,
  onToolClick,
  searchTerm,
}: ToolsGridProps) => {
  const { t } = useTranslation();

  if (tools.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-8xl mb-6">🔍</div>
        <h3 className="text-2xl font-bold text-gray-700 mb-3">
          {t("easyteach.search.noToolsFound", { searchTerm })}
        </h3>
        <p className="text-lg text-gray-500">
          {t("easyteach.search.tryDifferentSearch")}
        </p>
      </div>
    );
  }

  const handleToolClick = (tool: any, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Tool clicked:", tool.name, tool.id);
    onToolClick(tool);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {tools.map((tool) => {
        const IconComponent = tool.icon;
        const categoryInfo = categories.find(
          (cat) => cat.name === tool.category
        );

        return (
          <Card
            key={tool.id}
            className="group hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm shadow-lg overflow-hidden relative"
            onClick={(e) => handleToolClick(tool, e)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${categoryInfo?.gradient} opacity-0 group-hover:opacity-1 transition-opacity duration-300`}
            ></div>
            <CardHeader className="pb-4 relative">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-2xl icon-bg group-hover:scale-110 transition-transform duration-200 shadow-md`}
                  >
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 ">
                      {tool.name}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className={`bg-blue-100 text-gray-800 font-medium mt-1`}
                    >
                      {tool.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">{tool.timesSaved}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <CardDescription className="text-gray-600 leading-relaxed text-base mb-6">
                {tool.description}
              </CardDescription>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                  ✓ {t("easyteach.tools.readyIn", { time: tool.estimatedTime })}
                </span>
                <button
                  className="rounded-full bg-blue-100 hover:bg-blue-200 text-sm text-[#2901b3] py-1 px-3"
                  onClick={(e) => handleToolClick(tool, e)}
                >
                  {t("easyteach.tools.useToolButton")}
                </button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ToolsGrid;
