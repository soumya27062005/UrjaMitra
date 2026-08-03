import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const energyData = [
  { time: '6:00', solar: 0, consumption: 2.1, battery: 78 },
  { time: '8:00', solar: 1.2, consumption: 3.5, battery: 82 },
  { time: '10:00', solar: 4.8, consumption: 4.2, battery: 85 },
  { time: '12:00', solar: 6.5, consumption: 5.1, battery: 92 },
  { time: '14:00', solar: 5.9, consumption: 4.8, battery: 95 },
  { time: '16:00', solar: 4.2, consumption: 3.9, battery: 93 },
  { time: '18:00', solar: 1.8, consumption: 5.2, battery: 88 },
  { time: '20:00', solar: 0, consumption: 4.5, battery: 84 }
];

export function EnergyChart() {
  return (
    <Card className="shadow-card animate-fade-in-up">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Energy Flow Today</span>
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-energy-orange"></div>
              <span>Solar Generation</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-energy-blue"></div>
              <span>Consumption</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-energy-green"></div>
              <span>Battery %</span>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={energyData}>
              <defs>
                <linearGradient id="solarGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--energy-orange))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--energy-orange))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="consumptionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--energy-blue))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--energy-blue))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Area
                type="monotone"
                dataKey="solar"
                stroke="hsl(var(--energy-orange))"
                fillOpacity={1}
                fill="url(#solarGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="consumption"
                stroke="hsl(var(--energy-blue))"
                fillOpacity={1}
                fill="url(#consumptionGradient)"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="battery"
                stroke="hsl(var(--energy-green))"
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--energy-green))', strokeWidth: 2, r: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
