import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, Wifi, Settings } from "lucide-react";

export function StatusPanel() {
  const systemStatus = {
    grid: { status: 'online', lastUpdate: '2 mins ago' },
    solar: { status: 'optimal', lastUpdate: 'Live' },
    battery: { status: 'charging', lastUpdate: 'Live' },
    network: { status: 'connected', lastUpdate: 'Live' }
  };

  const alerts = [
    { type: 'info', message: 'Battery at optimal charge level', time: '5m ago' },
    { type: 'warning', message: 'Peak usage expected at 7 PM', time: '1h ago' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
      case 'optimal':
      case 'connected':
        return 'bg-energy-green/10 text-energy-green border-energy-green/20';
      case 'charging':
        return 'bg-energy-orange/10 text-energy-orange border-energy-orange/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    if (['online', 'optimal', 'connected'].includes(status)) {
      return <CheckCircle className="w-4 h-4" />;
    }
    return <AlertTriangle className="w-4 h-4" />;
  };

  return (
    <Card className="shadow-card animate-fade-in-up">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>System Status</span>
          <Button variant="outline" size="sm" className="gap-2">
            <Settings className="w-4 h-4" />
            Configure
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* System Components */}
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(systemStatus).map(([key, item]) => (
            <div key={key} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center space-x-2">
                {getStatusIcon(item.status)}
                <span className="text-sm font-medium capitalize">{key}</span>
              </div>
              <div className="text-right">
                <Badge className={getStatusColor(item.status)} variant="outline">
                  {item.status}
                </Badge>
                <p className="text-xs text-muted-foreground mt-1">{item.lastUpdate}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Connection Status */}
        <div className="flex items-center justify-between p-3 bg-energy-blue/5 rounded-lg border border-energy-blue/10">
          <div className="flex items-center space-x-2">
            <Wifi className="w-4 h-4 text-energy-blue" />
            <span className="text-sm font-medium">Network Connection</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-energy-green rounded-full animate-pulse-glow"></div>
            <span className="text-sm text-energy-green">Strong</span>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Recent Alerts</h4>
          {alerts.map((alert, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-muted/20 rounded-lg">
              <AlertTriangle className={`w-4 h-4 mt-0.5 ${
                alert.type === 'warning' ? 'text-energy-orange' : 'text-energy-blue'
              }`} />
              <div className="flex-1">
                <p className="text-sm">{alert.message}</p>
                <p className="text-xs text-muted-foreground">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
