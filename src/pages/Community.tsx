import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Users, 
  Search, 
  Filter, 
  Plus,
  MapPin,
  Zap,
  Home,
  Phone,
  Mail
} from "lucide-react";

export default function Community() {
  const communities = [
    {
      id: 1,
      name: "Rajpur Village",
      gridId: "MG001",
      totalUsers: 47,
      activeUsers: 45,
      location: "Rajpur, Haryana",
      coordinator: "Ramesh Kumar",
      phone: "+91-98765-43210",
      email: "ramesh@rajpur.in",
      status: "active",
      energyUsage: "3.2 kW",
      lastUpdate: "2 minutes ago"
    },
    {
      id: 2,
      name: "Sundarpur Community",
      gridId: "MG002",
      totalUsers: 38,
      activeUsers: 36,
      location: "Sundarpur, Punjab",
      coordinator: "Priya Sharma",
      phone: "+91-98765-43211",
      email: "priya@sundarpur.in",
      status: "active",
      energyUsage: "2.8 kW",
      lastUpdate: "5 minutes ago"
    },
    {
      id: 3,
      name: "Green Valley",
      gridId: "MG003",
      totalUsers: 52,
      activeUsers: 48,
      location: "Green Valley, Uttarakhand",
      coordinator: "Amit Patel",
      phone: "+91-98765-43212",
      email: "amit@greenvalley.in",
      status: "maintenance",
      energyUsage: "0.5 kW",
      lastUpdate: "1 hour ago"
    },
    {
      id: 4,
      name: "Eco Village",
      gridId: "MG004",
      totalUsers: 45,
      activeUsers: 43,
      location: "Eco Village, Rajasthan",
      coordinator: "Sunita Devi",
      phone: "+91-98765-43213",
      email: "sunita@ecovillage.in",
      status: "active",
      energyUsage: "3.8 kW",
      lastUpdate: "10 minutes ago"
    },
    {
      id: 5,
      name: "Solar Heights",
      gridId: "MG005",
      totalUsers: 41,
      activeUsers: 39,
      location: "Solar Heights, Maharashtra",
      coordinator: "Vikash Singh",
      phone: "+91-98765-43214",
      email: "vikash@solarheights.in",
      status: "active",
      energyUsage: "2.9 kW",
      lastUpdate: "3 minutes ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-energy-green/10 text-energy-green border-energy-green/20';
      case 'maintenance': return 'bg-energy-orange/10 text-energy-orange border-energy-orange/20';
      case 'inactive': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const totalUsers = communities.reduce((sum, community) => sum + community.totalUsers, 0);
  const activeUsers = communities.reduce((sum, community) => sum + community.activeUsers, 0);
  const activeCommunities = communities.filter(c => c.status === 'active').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Community Management</h1>
          <p className="text-muted-foreground">Manage users and communities across your microgrid network</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button className="gap-2 bg-gradient-energy">
            <Plus className="w-4 h-4" />
            Add Community
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card animate-fade-in-up">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Communities</p>
                <p className="text-2xl font-bold text-primary">{communities.length}</p>
              </div>
              <Home className="w-8 h-8 text-energy-blue" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card animate-fade-in-up">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Communities</p>
                <p className="text-2xl font-bold text-primary">{activeCommunities}</p>
              </div>
              <Zap className="w-8 h-8 text-energy-green" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card animate-fade-in-up">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold text-primary">{totalUsers}</p>
              </div>
              <Users className="w-8 h-8 text-energy-orange" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card animate-fade-in-up">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                <p className="text-2xl font-bold text-primary">{activeUsers}</p>
              </div>
              <Users className="w-8 h-8 text-energy-yellow" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search communities..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">All</Button>
              <Button variant="outline" size="sm">Active</Button>
              <Button variant="outline" size="sm">Maintenance</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Communities List */}
      <div className="space-y-4">
        {communities.map((community) => (
          <Card key={community.id} className="shadow-card animate-fade-in-up hover:shadow-energy transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-energy text-white font-semibold">
                      {community.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-primary">{community.name}</h3>
                      <Badge className={getStatusColor(community.status)} variant="outline">
                        {community.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {community.gridId}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{community.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {community.activeUsers}/{community.totalUsers} users active
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {community.energyUsage} current usage
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-primary">Community Coordinator</p>
                        <p className="text-muted-foreground">{community.coordinator}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <div className="flex items-center space-x-1">
                            <Phone className="w-3 h-3" />
                            <span className="text-xs">{community.phone}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Mail className="w-3 h-3" />
                            <span className="text-xs">{community.email}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground mb-2">
                          Last updated: {community.lastUpdate}
                        </p>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button size="sm" className="bg-gradient-energy">
                            Manage
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
