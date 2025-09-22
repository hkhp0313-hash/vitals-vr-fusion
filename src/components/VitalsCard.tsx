import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface VitalsCardProps {
  title: string;
  value: string;
  unit: string;
  icon: LucideIcon;
  status: "normal" | "warning" | "critical";
  trend?: "up" | "down" | "stable";
  className?: string;
}

const VitalsCard = ({ 
  title, 
  value, 
  unit, 
  icon: Icon, 
  status, 
  trend = "stable",
  className 
}: VitalsCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "normal":
        return "text-success border-success/20 bg-success/5";
      case "warning":
        return "text-warning border-warning/20 bg-warning/5";
      case "critical":
        return "text-critical border-critical/20 bg-critical/5";
      default:
        return "text-muted-foreground border-border";
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return "↗";
      case "down":
        return "↘";
      default:
        return "→";
    }
  };

  return (
    <Card className={cn(
      "p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass hover:shadow-medical transition-all duration-300 animate-scale-in",
      getStatusColor(),
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 rounded-lg bg-background/50">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-2xl font-mono opacity-60">
          {getTrendIcon()}
        </span>
      </div>
      
      <div className="space-y-1">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className="flex items-baseline space-x-1">
          <span className="text-2xl font-bold animate-pulse-gentle">{value}</span>
          <span className="text-sm text-muted-foreground">{unit}</span>
        </div>
      </div>

      <div className="mt-4 h-1 bg-background/30 rounded-full overflow-hidden">
        <div 
          className={cn(
            "h-full rounded-full transition-all duration-1000",
            status === "normal" && "bg-success",
            status === "warning" && "bg-warning",
            status === "critical" && "bg-critical"
          )}
          style={{ width: "75%" }}
        />
      </div>
    </Card>
  );
};

export default VitalsCard;