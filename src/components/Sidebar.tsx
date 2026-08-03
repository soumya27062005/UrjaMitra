import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Settings,
  Bell,
  Users,
  BarChart3,
  Zap,
  Shield,
  Info,
  Menu,
  X,
  Battery,
  Sun
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import urjaMitraLogo from "@/assets/urjamitra-logo.jpg";

const navigationItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
    description: "Energy overview"
  },
  {
    title: "Admin Panel",
    href: "/admin",
    icon: Shield,
    description: "System management"
  },
  {
    title: "Alerts",
    href: "/alerts",
    icon: Bell,
    description: "Notifications & warnings"
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
    description: "Reports & insights"
  },
  {
    title: "Community",
    href: "/community",
    icon: Users,
    description: "User management"
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    description: "Configuration"
  },
  {
    title: "About",
    href: "/about",
    icon: Info,
    description: "About UrjaMitra"
  }
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const location = useLocation();

  const isActivePath = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 z-50 h-full w-80 bg-gradient-energy border-r border-energy-green/20 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-energy-green/20">
          <div className="flex items-center space-x-3">
            <img 
              src={urjaMitraLogo} 
              alt="UrjaMitra Logo" 
              className="w-10 h-10 rounded-lg shadow-sm"
            />
            <div>
              <h2 className="text-lg font-bold text-white">UrjaMitra</h2>
              <p className="text-xs text-white/70">Energy Friend</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onToggle}
            className="text-white hover:bg-white/10 lg:hidden"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="p-6 border-b border-energy-green/20">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <Sun className="w-4 h-4 text-energy-orange" />
                <span className="text-xs text-white/80">Solar</span>
              </div>
              <p className="text-lg font-semibold text-white">4.2kW</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <Battery className="w-4 h-4 text-energy-yellow" />
                <span className="text-xs text-white/80">Battery</span>
              </div>
              <p className="text-lg font-semibold text-white">88%</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = isActivePath(item.href);
            
            return (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={onToggle}
                className={cn(
                  "flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group",
                  isActive 
                    ? "bg-white/20 text-white shadow-glow" 
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                <Icon className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-energy-yellow" : "group-hover:text-energy-yellow"
                )} />
                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-xs opacity-70">{item.description}</p>
                </div>
              </NavLink>
            );
          })}
        </nav>

        {/* System Status Footer */}
        <div className="p-4 border-t border-energy-green/20">
          <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/80">System Status</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-energy-green rounded-full animate-pulse-glow"></div>
                <span className="text-xs text-energy-green">Online</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
