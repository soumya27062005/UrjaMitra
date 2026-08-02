import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Zap, 
  Battery, 
  Sun, 
  AlertTriangle, 
  CheckCircle, 
  Settings,
  Download,
  RefreshCw,
  Power
} from "lucide-react";

export default function AdminPanel() {
  const gridStats = [
    { label: "Total Microgrids", value: "8", change: "+2", icon: Zap, color: "text-energy-blue" },
    { label: "Active Users", value: "189", change: "+15", icon: Users, color: "text-energy-green" },
    { label: "Energy Generated", value: "1.2MW", change: "+8%", icon: Sun, color: "text-energy-orange" },
    { label: "Battery Health", value: "94%", change: "-1%", icon: Battery, color: "text-energy-yellow" }
  ];

  const microgridData = [
    { id: "MG001", location: "Rajpur Village", status: "online", users: 47, efficiency: 94, lastMaintenance: "2 days ago" },
    { id: "MG002", location: "Sundarpur", status: "online", users: 38, efficiency: 91, lastMaintenance: "5 days ago" },
    { id: "MG003", location: "Green Valley", status: "maintenance", users: 52, efficiency: 87, lastMaintenance: "Today" },
    { id: "MG004", location: "Eco Village", status: "online", users: 45, efficiency: 96, lastMaintenance: "1 day ago" },
    { id: "MG005", location: "Solar Heights", status: "warning", users: 41, efficiency: 89, lastMaintenance: "3 days ago" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-energy-green/10 text-energy-green border-energy-green/20';
      case 'warning': return 'bg-energy-orange/10 text-energy-orange border-energy-orange/20';
      case 'maintenance': return 'bg-energy-blue/10 text-energy-blue border-energy-blue/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online': return <CheckCircle className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'maintenance': return <Settings className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Admin Panel</h1>
          <p className="text-muted-foreground">Comprehensive microgrid management system</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
          <Button variant="outline" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
          <Button className="gap-2 bg-gradient-energy">
            <Power className="w-4 h-4" />
            System Control
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {gridStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="shadow-card animate-fade-in-up">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold">{stat.value}</span>
                      <span className="text-sm text-energy-green">{stat.change}</span>
                    </div>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Microgrid Management */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Microgrid Network Status</span>
            <Badge variant="outline" className="bg-energy-green/10 text-energy-green border-energy-green/20">
              5 Active Grids
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {microgridData.map((grid, index) => (
              <div key={grid.id} className="p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(grid.status)}
                      <Badge className={getStatusColor(grid.status)} variant="outline">
                        {grid.status}
                      </Badge>
                    </div>
                    <div>
                      <h3 className="font-semibold">{grid.id} - {grid.location}</h3>
                      <p className="text-sm text-muted-foreground">
                        {grid.users} users • Last maintenance: {grid.lastMaintenance}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="text-sm font-medium">Efficiency</p>
                      <div className="flex items-center space-x-2">
                        <Progress value={grid.efficiency} className="w-20 h-2" />
                        <span className="text-sm font-semibold">{grid.efficiency}%</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Control Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Controls */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>System Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Power className="w-6 h-6" />
                <span>Grid Control</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Battery className="w-6 h-6" />
                <span>Battery Mgmt</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Sun className="w-6 h-6" />
                <span>Solar Config</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Users className="w-6 h-6" />
                <span>User Access</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Grid MG003 switched to maintenance mode", time: "2 minutes ago", type: "maintenance" },
                { action: "New user registered in Rajpur Village", time: "15 minutes ago", type: "user" },
                { action: "Battery optimization completed for MG001", time: "1 hour ago", type: "system" },
                { action: "Weekly report generated and sent", time: "2 hours ago", type: "report" },
                { action: "Solar panel efficiency check completed", time: "3 hours ago", type: "maintenance" }
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-muted/20 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'maintenance' ? 'bg-energy-orange' :
                    activity.type === 'user' ? 'bg-energy-green' :
                    activity.type === 'system' ? 'bg-energy-blue' : 'bg-energy-yellow'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
