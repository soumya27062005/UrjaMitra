import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface EnergyCardProps {
  title: string;
  value: string;
  unit: string;
  subtitle?: string;
  icon: React.ReactNode;
  variant?: 'solar' | 'battery' | 'consumption' | 'savings';
  className?: string;
}

const variantStyles = {
  solar: "bg-gradient-sunrise border-energy-orange/20 shadow-glow",
  battery: "bg-gradient-energy border-energy-green/20 shadow-energy",
  consumption: "bg-gradient-sky border-energy-blue/20",
  savings: "bg-gradient-subtle border-energy-yellow/20"
};

export function EnergyCard({ 
  title, 
  value, 
  unit, 
  subtitle, 
  icon, 
  variant = 'solar',
  className 
}: EnergyCardProps) {
  return (
    <Card className={cn(
      "border-2 transition-all duration-300 hover:scale-105 animate-fade-in-up",
      variantStyles[variant],
      className
    )}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground/80">{title}</p>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-foreground">{value}</span>
              <span className="text-sm font-medium text-foreground/60">{unit}</span>
            </div>
            {subtitle && (
              <p className="text-xs text-foreground/70">{subtitle}</p>
            )}
          </div>
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
              {icon}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
