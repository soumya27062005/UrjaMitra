import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Home, Users, Leaf, IndianRupee } from "lucide-react";

export function CommunityImpact() {
  const impactData = [
    {
      icon: <Home className="w-5 h-5 text-energy-orange" />,
      label: "Homes Powered",
      value: 47,
      target: 50,
      suffix: ""
    },
    {
      icon: <Users className="w-5 h-5 text-energy-blue" />,
      label: "Families Benefited",
      value: 189,
      target: 200,
      suffix: ""
    },
    {
      icon: <Leaf className="w-5 h-5 text-energy-green" />,
      label: "CO₂ Saved",
      value: 245,
      target: 300,
      suffix: "kg"
    },
    {
      icon: <IndianRupee className="w-5 h-5 text-energy-yellow" />,
      label: "Money Saved",
      value: 12500,
      target: 15000,
      suffix: "₹"
    }
  ];

  return (
    <Card className="shadow-card border-energy-green/10 animate-fade-in-up">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span className="text-primary">Community Impact</span>
          <span className="text-xs bg-energy-green/10 text-energy-green px-2 py-1 rounded-full">
            This Month
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {impactData.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <span className="text-sm font-semibold">
                {item.value.toLocaleString()}{item.suffix} / {item.target.toLocaleString()}{item.suffix}
              </span>
            </div>
            <Progress 
              value={(item.value / item.target) * 100} 
              className="h-2"
            />
          </div>
        ))}
        
        <div className="mt-6 p-4 bg-gradient-subtle rounded-lg border border-energy-green/10">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">₹2.3L</p>
            <p className="text-sm text-muted-foreground">Total savings this year</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
