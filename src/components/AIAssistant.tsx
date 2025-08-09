import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, Bot, User, Loader2, Lightbulb, Wand2 } from "lucide-react";
import { generateEducationalContent } from "@/utils/aiServiceWithUsage";
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
  const { t, i18n } = useTranslation();
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
        "AI Assistant Chat",
        i18n.language
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
<<<<<<< HEAD
    <Card className="h-[500px] flex flex-col bg-white/90 backdrop-blur-sm border-blue-200">
      <CardHeader className="pb-3 bg-gradient-to-r from-blue-500 to-[#2901b3] text-white rounded-t-lg">
=======
    <Card className="h-[700px] flex flex-col bg-white/95 backdrop-blur-md border border-primary/20 shadow-xl rounded-2xl">
      <CardHeader className="pb-3 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-t-2xl">
>>>>>>> main
        <CardTitle className="flex items-center space-x-2 text-lg text-white">
          <Bot className="h-5 w-5" />
          <span>Virtual Teaching Assistant</span>
          <div className="ml-auto text-xs bg-white/20 px-2 py-1 rounded-full">
            by Vicerta
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-4 overflow-hidden">
        {/* Messages Container - Scrollable */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start space-x-3 max-w-[85%] ${
                  message.sender === "user"
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full p-2 flex items-center justify-center flex-shrink-0 ${
                    message.sender === "user"
<<<<<<< HEAD
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-600"
=======
                      ? "bg-gradient-to-r from-primary via-secondary to-accent text-white"
                      : "bg-muted text-muted-foreground"
>>>>>>> main
                  }`}
                >
                  {message.sender === "user" ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>
<<<<<<< HEAD
                <div
                  className={`p-3 rounded-lg text-sm ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.text}
=======
                <div className="flex flex-col space-y-2 flex-1 min-w-0">
                  <div
                    className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-primary via-secondary to-accent text-white ml-4"
                        : "bg-gray-50 text-gray-800 mr-4 border border-gray-200"
                    }`}
                  >
                    <div className="whitespace-pre-wrap break-words">
                      {message.text.split('\n').map((line, index) => {
                        // Handle bold text formatting
                        if (line.includes('**')) {
                          const parts = line.split('**');
                          return (
                            <div key={index} className="mb-2">
                              {parts.map((part, partIndex) => (
                                partIndex % 2 === 1 ? 
                                  <strong key={partIndex} className="font-bold">{part}</strong> : 
                                  <span key={partIndex}>{part}</span>
                              ))}
                            </div>
                          );
                        }
                        // Handle bullet points
                        if (line.startsWith('•')) {
                          return (
                            <div key={index} className="mb-1 pl-2">
                              {line}
                            </div>
                          );
                        }
                        // Handle emojis and tool recommendations
                        if (line.includes('🛠️')) {
                          return (
                            <div key={index} className="mb-2 font-semibold border-t border-white/20 pt-2 mt-2">
                              {line}
                            </div>
                          );
                        }
                        return line ? <div key={index} className="mb-1">{line}</div> : <br key={index} />;
                      })}
                    </div>
                  </div>
                  
                  {/* Tool recommendations */}
                  {message.recommendedTools && message.recommendedTools.length > 0 && onToolRecommend && (
                    <div className="space-y-2 ml-11">
                      {message.recommendedTools.map((tool, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => onToolRecommend(tool)}
                          className="w-full justify-start text-xs bg-white hover:bg-blue-50 border-blue-200 hover:border-blue-300 text-blue-600 hover:text-blue-700 transition-all duration-200"
                        >
                          <Wand2 className="h-3 w-3 mr-2" />
                          Use {tool.name}
                        </Button>
                      ))}
                    </div>
                  )}
>>>>>>> main
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <Bot className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl flex items-center space-x-2 border border-gray-200">
                  <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
                  <span className="text-sm text-gray-600">Thinking...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="flex space-x-2 border-t border-gray-100 pt-4">
          <Textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about lesson planning, classroom management, or any teaching topic..."
            className="flex-1 min-h-[45px] focus:outline-none max-h-[120px] resize-none text-sm border-blue-200 focus:border-blue-400 rounded-xl"
            rows={1}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
<<<<<<< HEAD
            className="bg-blue-600 hover:bg-[#2901b3] self-end group"
=======
            className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 self-end text-white px-4 rounded-xl"
>>>>>>> main
          >
            <Send className="h-4 w-4 group-hover:rotate-45 transition-transform duration-300" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAssistant;
