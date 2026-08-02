import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { 
  TrendingUp, 
  Calendar, 
  Download, 
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  Zap,
  Sun,
  Battery
} from "lucide-react";

export default function Analytics() {
  const monthlyData = [
    { month: 'Jan', generation: 45, consumption: 38, savings: 2500 },
    { month: 'Feb', generation: 52, consumption: 42, savings: 2800 },
    { month: 'Mar', generation: 61, consumption: 47, savings: 3200 },
    { month: 'Apr', generation: 68, consumption: 51, savings: 3600 },
    { month: 'May', generation: 75, consumption: 55, savings: 4100 },
    { month: 'Jun', generation: 72, consumption: 58, savings: 3900 }
  ];

  const efficiencyData = [
    { name: 'Solar', value: 87, fill: 'hsl(var(--energy-orange))' },
    { name: 'Battery', value: 94, fill: 'hsl(var(--energy-green))' },
    { name: 'Grid', value: 91, fill: 'hsl(var(--energy-blue))' },
    { name: 'Other', value: 6, fill: 'hsl(var(--muted))' }
  ];

  const gridPerformance = [
    { grid: 'MG001', efficiency: 94, uptime: 99.2, users: 47 },
    { grid: 'MG002', efficiency: 91, uptime: 98.8, users: 38 },
    { grid: 'MG003', efficiency: 87, uptime: 95.5, users: 52 },
    { grid: 'MG004', efficiency: 96, uptime: 99.5, users: 45 },
    { grid: 'MG005', efficiency: 89, uptime: 97.2, users: 41 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Analytics & Reports</h1>
          <p className="text-muted-foreground">Comprehensive insights into your microgrid network</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" />
            Date Range
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            title: "Total Generation", 
            value: "72.5 MWh", 
            change: "+12.5%", 
            icon: Sun, 
            color: "text-energy-orange",
            trend: "up"
          },
          { 
            title: "System Efficiency", 
            value: "92.3%", 
            change: "+2.1%", 
            icon: Activity, 
            color: "text-energy-green",
            trend: "up"
          },
          { 
            title: "Cost Savings", 
            value: "₹4.2L", 
            change: "+18.7%", 
            icon: TrendingUp, 
            color: "text-energy-blue",
            trend: "up"
          },
          { 
            title: "Grid Uptime", 
            value: "98.2%", 
            change: "-0.3%", 
            icon: Zap, 
            color: "text-energy-yellow",
            trend: "down"
          }
        ].map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="shadow-card animate-fade-in-up">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold">{metric.value}</span>
                      <Badge 
                        variant="outline" 
                        className={`${metric.trend === 'up' ? 'text-energy-green border-energy-green/20 bg-energy-green/10' : 'text-energy-orange border-energy-orange/20 bg-energy-orange/10'}`}
                      >
                        {metric.change}
                      </Badge>
                    </div>
                  </div>
                  <Icon className={`w-8 h-8 ${metric.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trends */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-energy-blue" />
              Monthly Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="generationGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--energy-orange))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--energy-orange))" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="consumptionGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--energy-blue))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--energy-blue))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="generation"
                    stroke="hsl(var(--energy-orange))"
                    fillOpacity={1}
                    fill="url(#generationGradient)"
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
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* System Efficiency Breakdown */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChartIcon className="w-5 h-5 text-energy-green" />
              System Efficiency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={efficiencyData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {efficiencyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {efficiencyData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="text-sm">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grid Performance Table */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Grid Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {gridPerformance.map((grid, index) => (
              <div key={index} className="p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold">{grid.grid}</h3>
                    <p className="text-sm text-muted-foreground">{grid.users} active users</p>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`${grid.efficiency >= 90 ? 'bg-energy-green/10 text-energy-green border-energy-green/20' : 'bg-energy-orange/10 text-energy-orange border-energy-orange/20'}`}
                  >
                    {grid.efficiency >= 90 ? 'Excellent' : 'Good'}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">Efficiency</span>
                      <span className="text-sm font-semibold">{grid.efficiency}%</span>
                    </div>
                    <Progress value={grid.efficiency} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">Uptime</span>
                      <span className="text-sm font-semibold">{grid.uptime}%</span>
                    </div>
                    <Progress value={grid.uptime} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
