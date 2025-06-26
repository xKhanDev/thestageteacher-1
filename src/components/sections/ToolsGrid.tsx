
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface ToolsGridProps {
  tools: any[];
  categories: any[];
  onToolClick: (tool: any) => void;
  searchTerm: string;
}

const ToolsGrid = ({ tools, categories, onToolClick, searchTerm }: ToolsGridProps) => {
  if (tools.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-8xl mb-6">🔍</div>
        <h3 className="text-2xl font-bold text-gray-700 mb-3">
          No tools found for "{searchTerm}"
        </h3>
        <p className="text-lg text-gray-500">
          Try a different search term or browse our categories above.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tools.map((tool) => {
        const IconComponent = tool.icon;
        const categoryInfo = categories.find(cat => cat.name === tool.category);
        
        return (
          <Card 
            key={tool.id}
            className="group hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm shadow-lg overflow-hidden relative"
            onClick={() => onToolClick(tool)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${categoryInfo?.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            <CardHeader className="pb-4 relative">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-2xl ${tool.color} group-hover:scale-110 transition-transform duration-200 shadow-md`}>
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                      {tool.name}
                    </CardTitle>
                    <Badge variant="secondary" className={`${categoryInfo?.color} font-medium mt-1`}>
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
                  ✓ Ready in {tool.estimatedTime}
                </span>
                <Button size="sm" className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium px-6 group-hover:scale-105 transition-all duration-200">
                  Try it →
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ToolsGrid;
