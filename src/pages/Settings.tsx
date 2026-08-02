import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Globe, 
  Battery, 
  Sun, 
  Zap,
  Save,
  RefreshCw,
  Download
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      sms: false,
      push: true,
      criticalAlerts: true
    },
    system: {
      autoOptimization: true,
      smartCharging: true,
      loadBalancing: true,
      maintenanceMode: false
    },
    thresholds: {
      batteryLow: 20,
      batteryHigh: 90,
      solarEfficiency: 85,
      maxLoad: 80
    }
  });

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your configuration has been updated successfully.",
    });
  };

  const handleReset = () => {
    toast({
      title: "Settings Reset",
      description: "All settings have been restored to defaults.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Settings</h1>
          <p className="text-muted-foreground">Configure your UrjaMitra system preferences</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={handleReset} className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Reset to Defaults
          </Button>
          <Button onClick={handleSave} className="gap-2 bg-gradient-energy">
            <Save className="w-4 h-4" />
            Save Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="system" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="system" className="gap-2">
            <SettingsIcon className="w-4 h-4" />
            System
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Shield className="w-4 h-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="advanced" className="gap-2">
            <Globe className="w-4 h-4" />
            Advanced
          </TabsTrigger>
        </TabsList>

        {/* System Settings */}
        <TabsContent value="system" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-energy-blue" />
                  Power Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="auto-opt">Auto Optimization</Label>
                    <p className="text-sm text-muted-foreground">Automatically optimize energy distribution</p>
                  </div>
                  <Switch 
                    id="auto-opt"
                    checked={settings.system.autoOptimization}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({
                        ...prev,
                        system: { ...prev.system, autoOptimization: checked }
                      }))
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="smart-charge">Smart Charging</Label>
                    <p className="text-sm text-muted-foreground">Intelligent battery charging during peak solar</p>
                  </div>
                  <Switch 
                    id="smart-charge"
                    checked={settings.system.smartCharging}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({
                        ...prev,
                        system: { ...prev.system, smartCharging: checked }
                      }))
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="load-balance">Load Balancing</Label>
                    <p className="text-sm text-muted-foreground">Distribute power evenly across grids</p>
                  </div>
                  <Switch 
                    id="load-balance"
                    checked={settings.system.loadBalancing}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({
                        ...prev,
                        system: { ...prev.system, loadBalancing: checked }
                      }))
                    }
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Battery className="w-5 h-5 text-energy-green" />
                  Threshold Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="battery-low">Battery Low Warning (%)</Label>
                  <Input
                    id="battery-low"
                    type="number"
                    value={settings.thresholds.batteryLow}
                    onChange={(e) => 
                      setSettings(prev => ({
                        ...prev,
                        thresholds: { ...prev.thresholds, batteryLow: Number(e.target.value) }
                      }))
                    }
                    min="5"
                    max="50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="battery-high">Battery Full Threshold (%)</Label>
                  <Input
                    id="battery-high"
                    type="number"
                    value={settings.thresholds.batteryHigh}
                    onChange={(e) => 
                      setSettings(prev => ({
                        ...prev,
                        thresholds: { ...prev.thresholds, batteryHigh: Number(e.target.value) }
                      }))
                    }
                    min="80"
                    max="100"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="solar-eff">Solar Efficiency Minimum (%)</Label>
                  <Input
                    id="solar-eff"
                    type="number"
                    value={settings.thresholds.solarEfficiency}
                    onChange={(e) => 
                      setSettings(prev => ({
                        ...prev,
                        thresholds: { ...prev.thresholds, solarEfficiency: Number(e.target.value) }
                      }))
                    }
                    min="70"
                    max="95"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-energy-orange" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="font-semibold">Delivery Methods</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-notif">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive alerts via email</p>
                      </div>
                      <Switch 
                        id="email-notif"
                        checked={settings.notifications.email}
                        onCheckedChange={(checked) => 
                          setSettings(prev => ({
                            ...prev,
                            notifications: { ...prev.notifications, email: checked }
                          }))
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="sms-notif">SMS Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive alerts via SMS</p>
                      </div>
                      <Switch 
                        id="sms-notif"
                        checked={settings.notifications.sms}
                        onCheckedChange={(checked) => 
                          setSettings(prev => ({
                            ...prev,
                            notifications: { ...prev.notifications, sms: checked }
                          }))
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-notif">Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">Browser and mobile alerts</p>
                      </div>
                      <Switch 
                        id="push-notif"
                        checked={settings.notifications.push}
                        onCheckedChange={(checked) => 
                          setSettings(prev => ({
                            ...prev,
                            notifications: { ...prev.notifications, push: checked }
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="font-semibold">Alert Types</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="critical-alerts">Critical Alerts</Label>
                        <p className="text-sm text-muted-foreground">System failures and emergencies</p>
                      </div>
                      <Switch 
                        id="critical-alerts"
                        checked={settings.notifications.criticalAlerts}
                        onCheckedChange={(checked) => 
                          setSettings(prev => ({
                            ...prev,
                            notifications: { ...prev.notifications, criticalAlerts: checked }
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-energy-green" />
                Security Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button className="w-full">Update Password</Button>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Session Timeout</Label>
                    <Select defaultValue="30">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="240">4 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Access Level</Label>
                    <Select defaultValue="admin">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="viewer">Viewer</SelectItem>
                        <SelectItem value="operator">Operator</SelectItem>
                        <SelectItem value="admin">Administrator</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Advanced Settings */}
        <TabsContent value="advanced" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-energy-blue" />
                Advanced Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Data Export Format</Label>
                    <Select defaultValue="csv">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="csv">CSV</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                        <SelectItem value="json">JSON</SelectItem>
                        <SelectItem value="pdf">PDF Report</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Backup Frequency</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full gap-2">
                    <Download className="w-4 h-4" />
                    Export All Data
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Reset System
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
