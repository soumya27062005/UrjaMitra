import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sun, 
  Users, 
  Leaf, 
  IndianRupee, 
  Heart, 
  Globe, 
  Target,
  Award,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import urjaMitraLogo from "@/assets/urjamitra-logo.jpg";

export default function About() {
  const stats = [
    { icon: Users, label: "Families Served", value: "2,500+", color: "text-energy-blue" },
    { icon: Sun, label: "Solar Capacity", value: "50MW+", color: "text-energy-orange" },
    { icon: Leaf, label: "CO₂ Reduced", value: "1,200T", color: "text-energy-green" },
    { icon: IndianRupee, label: "Savings Generated", value: "₹2.5Cr", color: "text-energy-yellow" }
  ];

  const features = [
    {
      icon: Target,
      title: "Rural Focus",
      description: "Designed specifically for rural Indian communities with low-cost, high-impact solutions"
    },
    {
      icon: Globe,
      title: "Scalable Technology",
      description: "Modular microgrid systems that grow with community needs and resources"
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Local ownership models that empower communities and create sustainable livelihoods"
    },
    {
      icon: Award,
      title: "Proven Impact", 
      description: "Track record of successful deployments across multiple states in India"
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      description: "20+ years in renewable energy, IIT Delhi alumni"
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      description: "Expert in IoT and rural technology solutions"
    },
    {
      name: "Amit Patel",
      role: "Head of Operations",
      description: "Rural development specialist with grassroots experience"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-8">
        <div className="flex justify-center">
          <img 
            src={urjaMitraLogo} 
            alt="UrjaMitra Logo" 
            className="w-24 h-24 rounded-2xl shadow-glow"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">About UrjaMitra</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-primary">UrjaMitra</span> means "Energy Friend" in Hindi. 
            We're on a mission to make renewable energy accessible, affordable, and impactful for 
            rural communities across India through smart microgrid technology.
          </p>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="shadow-card animate-fade-in-up text-center">
              <CardContent className="p-6">
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-energy-orange" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              To democratize access to clean, reliable, and affordable energy in rural India by 
              developing innovative microgrid solutions that are easy to deploy, operate, and maintain. 
              We believe every community deserves energy independence and the economic opportunities 
              it brings.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-energy-green" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              A future where every rural community in India has access to clean, sustainable energy 
              that powers not just homes, but dreams, businesses, and aspirations. We envision 
              energy-independent villages that are economically prosperous and environmentally sustainable.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Key Features */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>What Makes UrjaMitra Special</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-subtle">
                  <div className="flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Leadership Team */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Leadership Team</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div key={index} className="text-center space-y-3 p-4 rounded-lg bg-muted/20">
                <div className="w-16 h-16 bg-gradient-energy rounded-full mx-auto flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">{member.name}</h3>
                  <p className="text-sm text-energy-orange font-medium">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-2">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technology & Approach */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Our Technology</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Badge className="bg-energy-orange/10 text-energy-orange border-energy-orange/20">
                Smart Monitoring
              </Badge>
              <p className="text-sm text-muted-foreground">
                IoT-enabled monitoring systems with real-time data collection and analysis
              </p>
            </div>
            <div className="space-y-3">
              <Badge className="bg-energy-green/10 text-energy-green border-energy-green/20">
                Adaptive Controls
              </Badge>
              <p className="text-sm text-muted-foreground">
                AI-powered load balancing and energy optimization algorithms
              </p>
            </div>
            <div className="space-y-3">
              <Badge className="bg-energy-blue/10 text-energy-blue border-energy-blue/20">
                Mobile-First Design
              </Badge>
              <p className="text-sm text-muted-foreground">
                Intuitive interfaces designed for low-cost smartphones and tablets
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Our Impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-primary">Economic Empowerment</h4>
              <p className="text-sm text-muted-foreground">
                Created 500+ local jobs and enabled 200+ micro-businesses in rural areas
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-primary">Environmental Benefits</h4>
              <p className="text-sm text-muted-foreground">
                Prevented 1,200 tons of CO₂ emissions and promoted sustainable development
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-primary">Social Impact</h4>
              <p className="text-sm text-muted-foreground">
                Improved education, healthcare access, and quality of life for thousands of families
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Information */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-energy-blue" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">contact@urjamitra.in</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-energy-green" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+91-11-4567-8900</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-energy-orange" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm text-muted-foreground">New Delhi, India</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button className="gap-2 bg-gradient-energy">
              <Mail className="w-4 h-4" />
              Contact Us
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
