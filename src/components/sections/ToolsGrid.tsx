import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Wand2 } from "lucide-react";
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => {
        const IconComponent = tool.icon;
        const categoryInfo = categories.find(
          (cat) => cat.name === tool.category
        );

        return (
          <Card
            key={tool.id}
            className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white/95 backdrop-blur-md border border-primary/20 hover:border-primary/40 rounded-2xl"
            onClick={(e) => handleToolClick(tool, e)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${categoryInfo?.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
            />
            
            <CardHeader className="pb-4 relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                {tool.timesSaved && (
                  <div className="flex items-center space-x-1 text-xs text-accent bg-accent/10 px-2 py-1 rounded-full border border-accent/20">
                    <Clock className="h-3 w-3" />
                    <span className="font-medium">{tool.timesSaved}</span>
                  </div>
                )}
              </div>

              <CardTitle className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-primary transition-all duration-300 line-clamp-2 min-h-[3.5rem]">
                {tool.name}
              </CardTitle>
              
              <div className="flex items-center justify-between mt-2">
                <Badge
                  variant="secondary"
                  className="text-xs bg-primary/10 text-primary border-primary/20 font-medium"
                >
                  {tool.category}
                </Badge>
                
                {tool.estimatedTime && (
                  <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
                    ✓ {t("easyteach.tools.readyIn", { time: tool.estimatedTime })}
                  </span>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="relative pt-0">
              <CardDescription className="text-muted-foreground leading-relaxed text-sm mb-6 line-clamp-3 min-h-[4.5rem]">
                {tool.description}
              </CardDescription>
              
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium rounded-xl group-hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={(e) => handleToolClick(tool, e)}
              >
                <Wand2 className="h-4 w-4 mr-2" />
                {t("easyteach.tools.useToolButton")}
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ToolsGrid;
