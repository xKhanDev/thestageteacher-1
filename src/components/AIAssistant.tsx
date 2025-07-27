import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, Bot, User, Loader2, Lightbulb, Wand2 } from "lucide-react";
import { generateEducationalContent } from "@/utils/aiService";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
  timestamp: Date;
  recommendedTools?: any[];
}

interface AIAssistantProps {
  tools?: any[];
  onToolRecommend?: (tool: any) => void;
}

const AIAssistant = ({ tools = [], onToolRecommend }: AIAssistantProps) => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "Hello! I'm your AI Teaching Assistant powered by Vicerta. I can help you with lesson planning, student support, classroom management, and educational guidance. I can also recommend specific tools from our EasyTeach suite. What would you like assistance with today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Function to find relevant tools based on user message
  const findRelevantTools = (userMessage: string): any[] => {
    if (!tools.length) return [];
    
    const keywords = userMessage.toLowerCase();
    const relevantTools = tools.filter(tool => {
      return (
        tool.name?.toLowerCase().includes('lesson') && keywords.includes('lesson') ||
        tool.name?.toLowerCase().includes('assessment') && keywords.includes('assessment') ||
        tool.name?.toLowerCase().includes('quiz') && keywords.includes('quiz') ||
        tool.name?.toLowerCase().includes('worksheet') && keywords.includes('worksheet') ||
        tool.name?.toLowerCase().includes('email') && keywords.includes('parent') ||
        tool.name?.toLowerCase().includes('behavior') && keywords.includes('behavior') ||
        tool.category?.includes('Assessment') && (keywords.includes('test') || keywords.includes('evaluate')) ||
        tool.category?.includes('Communication') && (keywords.includes('parent') || keywords.includes('email')) ||
        tool.category?.includes('Lesson Planning') && (keywords.includes('plan') || keywords.includes('objective'))
      );
    });
    
    return relevantTools.slice(0, 3); // Return max 3 relevant tools
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Enhanced prompt to include tool recommendation context
      const enhancedPrompt = `${inputMessage}\n\nContext: You are an AI assistant for EasyTeach by Vicerta, helping educators with teaching-related questions. If relevant, mention that specific tools are available to help with their request.`;
      
      const aiResponse = await generateEducationalContent(
        enhancedPrompt,
        "AI Assistant Chat"
      );

      // Find relevant tools based on user message
      const recommendedTools = findRelevantTools(inputMessage);

      let finalResponse = aiResponse;
      if (recommendedTools.length > 0) {
        finalResponse += `\n\n🛠️ **Recommended Tools:**\n${recommendedTools.map(tool => `• ${tool.name}: ${tool.description}`).join('\n')}`;
      }

      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: "ai",
        text: finalResponse,
        timestamp: new Date(),
        recommendedTools: recommendedTools,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      toast({
        title: "AI Assistant Error",
        description:
          "Unable to generate response. Please check your OpenRouter API key and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="h-[600px] flex flex-col bg-white/95 backdrop-blur-md border border-primary/20 shadow-xl rounded-2xl">
      <CardHeader className="pb-3 bg-gradient-to-r from-primary to-secondary text-white rounded-t-2xl">
        <CardTitle className="flex items-center space-x-2 text-lg text-white">
          <Bot className="h-5 w-5" />
          <span>Virtual Teaching Assistant</span>
          <div className="ml-auto text-xs bg-white/20 px-2 py-1 rounded-full">
            by Vicerta
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-4">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 mb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === "user"
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                <div
                  className={`size-8 rounded-full p-2 flex items-center justify-center text-xs ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-primary to-secondary text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {message.sender === "user" ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>
                <div
                  className={`p-3 rounded-lg text-sm max-w-md ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-primary to-secondary text-white"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.text}</div>
                  {/* Tool recommendations */}
                  {message.recommendedTools && message.recommendedTools.length > 0 && onToolRecommend && (
                    <div className="mt-3 space-y-2">
                      {message.recommendedTools.map((tool, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => onToolRecommend(tool)}
                          className="w-full justify-start text-xs bg-white/80 hover:bg-white border-primary/20 hover:border-primary text-primary"
                        >
                          <Wand2 className="h-3 w-3 mr-2" />
                          Use {tool.name}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                  <Bot className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="bg-muted p-3 rounded-lg flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  <span className="text-sm text-muted-foreground">Thinking...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="flex space-x-2">
          <Textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about lesson planning, classroom management, or any teaching topic..."
            className="flex-1 min-h-[40px] focus:outline-none max-h-[100px] resize-none text-sm border-primary/20 focus:border-primary"
            rows={1}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 self-end text-white"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAssistant;
