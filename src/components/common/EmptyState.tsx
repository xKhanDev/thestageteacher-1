import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

const EmptyState = ({ icon, title, description, action, className = "" }: EmptyStateProps) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center py-12 px-4 ${className}`}>
      {icon && (
        <div className="mb-4 p-3 rounded-full bg-muted text-muted-foreground">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-md mb-6">{description}</p>
      {action && (
        <Button onClick={action.onClick} className="bg-primary hover:bg-primary/90">
          {action.label}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;