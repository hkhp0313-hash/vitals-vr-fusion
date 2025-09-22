import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  trend: "up" | "down" | "stable";
  trendValue: string;
  className?: string;
}

const StatsCard = ({
  title,
  value,
  description,
  icon: Icon,
  trend,
  trendValue,
  className
}: StatsCardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-success";
      case "down":
        return "text-critical";
      default:
        return "text-muted-foreground";
    }
  };

  const getTrendSymbol = () => {
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
      "p-6 bg-gradient-card backdrop-blur-sm border border-border/50 shadow-glass hover:shadow-vitals transition-all duration-300 group animate-fade-in",
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
            {value}
          </p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        
        <div className="flex flex-col items-end space-y-2">
          <div className="p-3 rounded-lg bg-gradient-vitals">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className={cn("flex items-center space-x-1 text-sm font-medium", getTrendColor())}>
            <span>{getTrendSymbol()}</span>
            <span>{trendValue}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;