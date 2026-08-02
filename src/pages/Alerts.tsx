import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  Zap, 
  Battery, 
  Sun, 
  Users,
  Search,
  Filter,
  Bell,
  BellOff
} from "lucide-react";

export default function Alerts() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const alerts = [
    {
      id: 1,
      type: "critical",
      title: "Low Battery Warning - MG003",
      message: "Battery level has dropped below 15% in Green Valley microgrid",
      location: "Green Valley",
      timestamp: "2 minutes ago",
      icon: Battery,
      status: "active"
    },
    {
      id: 2,
      type: "warning",
      title: "High Energy Demand Alert",
      message: "Peak usage detected in Rajpur Village. Consider load balancing.",
      location: "Rajpur Village",
      timestamp: "15 minutes ago",
      icon: Zap,
      status: "active"
    },
    {
      id: 3,
      type: "info",
      title: "Scheduled Maintenance Reminder",
      message: "Solar panel cleaning scheduled for tomorrow at Sundarpur",
      location: "Sundarpur",
      timestamp: "1 hour ago",
      icon: Sun,
      status: "pending"
    },
    {
      id: 4,
      type: "success",
      title: "System Optimization Complete",
      message: "Battery management system successfully optimized for MG001",
      location: "Rajpur Village",
      timestamp: "2 hours ago",
      icon: CheckCircle,
      status: "resolved"
    },
    {
      id: 5,
      type: "warning",
      title: "Network Connectivity Issue",
      message: "Intermittent connection detected in Eco Village monitoring system",
      location: "Eco Village",
      timestamp: "3 hours ago",
      icon: Info,
      status: "investigating"
    },
    {
      id: 6,
      type: "info",
      title: "New User Registration",
      message: "5 new households connected to Solar Heights microgrid",
      location: "Solar Heights",
      timestamp: "4 hours ago",
      icon: Users,
      status: "completed"
    }
  ];

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical': return 'border-l-red-500 bg-red-50 dark:bg-red-950/20';
      case 'warning': return 'border-l-energy-orange bg-energy-orange-light dark:bg-energy-orange/10';
      case 'success': return 'border-l-energy-green bg-energy-green-light dark:bg-energy-green/10';
      case 'info': return 'border-l-energy-blue bg-energy-blue-light dark:bg-energy-blue/10';
      default: return 'border-l-muted bg-muted/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'resolved': return 'bg-energy-green/10 text-energy-green border-energy-green/20';
      case 'pending': return 'bg-energy-orange/10 text-energy-orange border-energy-orange/20';
      case 'investigating': return 'bg-energy-blue/10 text-energy-blue border-energy-blue/20';
      case 'completed': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const filteredAlerts = alerts.filter(alert => {
    const matchesFilter = filter === "all" || alert.type === filter;
    const matchesSearch = alert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         alert.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Alerts & Notifications</h1>
          <p className="text-muted-foreground">Monitor system alerts and manage notifications</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="gap-2">
            <Bell className="w-4 h-4" />
            Mark All Read
          </Button>
          <Button variant="outline" className="gap-2">
            <BellOff className="w-4 h-4" />
            Mute All
          </Button>
        </div>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Critical", count: 1, color: "text-red-500", bg: "bg-red-50 dark:bg-red-950/20" },
          { label: "Warning", count: 2, color: "text-energy-orange", bg: "bg-energy-orange-light dark:bg-energy-orange/10" },
          { label: "Info", count: 2, color: "text-energy-blue", bg: "bg-energy-blue-light dark:bg-energy-blue/10" },
          { label: "Resolved", count: 1, color: "text-energy-green", bg: "bg-energy-green-light dark:bg-energy-green/10" }
        ].map((stat, index) => (
          <Card key={index} className={`${stat.bg} border-l-4 border-l-current shadow-card`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.count}</p>
                </div>
                <AlertTriangle className={`w-6 h-6 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters and Search */}
      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search alerts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {["all", "critical", "warning", "info", "success"].map((filterType) => (
                <Button
                  key={filterType}
                  variant={filter === filterType ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(filterType)}
                  className="capitalize"
                >
                  {filterType === "all" ? "All Alerts" : filterType}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alerts List */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => {
          const Icon = alert.icon;
          return (
            <Card key={alert.id} className={`shadow-card border-l-4 ${getAlertColor(alert.type)} animate-fade-in-up`}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{alert.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(alert.status)} variant="outline">
                          {alert.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-medium text-muted-foreground">Location:</span>
                        <Badge variant="outline" className="text-xs">
                          {alert.location}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {alert.status === 'active' && (
                          <Button size="sm" className="bg-gradient-energy">
                            Resolve
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredAlerts.length === 0 && (
        <Card className="shadow-card">
          <CardContent className="p-12 text-center">
            <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No alerts found</h3>
            <p className="text-muted-foreground">
              {searchQuery ? "Try adjusting your search criteria" : "All systems are running smoothly"}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
