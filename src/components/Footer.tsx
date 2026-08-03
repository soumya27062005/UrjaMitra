import { Link } from "react-router-dom";
import { 
  Sun, 
  Battery, 
  Leaf, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Heart
} from "lucide-react";
import urjaMitraLogo from "@/assets/urjamitra-logo.jpg";

export function Footer() {
  const quickLinks = [
    { name: "Dashboard", href: "/" },
    { name: "Admin Panel", href: "/admin" },
    { name: "Alerts", href: "/alerts" },
    { name: "Settings", href: "/settings" },
    { name: "About Us", href: "/about" }
  ];

  const services = [
    { name: "Microgrid Installation", href: "#" },
    { name: "System Monitoring", href: "#" },
    { name: "Maintenance Support", href: "#" },
    { name: "Training Programs", href: "#" },
    { name: "Consulting Services", href: "#" }
  ];

  const resources = [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "User Guides", href: "#" },
    { name: "Best Practices", href: "#" },
    { name: "Case Studies", href: "#" }
  ];

  return (
    <footer className="bg-gradient-energy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={urjaMitraLogo} 
                alt="UrjaMitra Logo" 
                className="w-12 h-12 rounded-lg shadow-sm"
              />
              <div>
                <h3 className="text-xl font-bold">UrjaMitra</h3>
                <p className="text-sm text-white/70">Your Energy Friend</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-md">
              Empowering rural India with affordable, sustainable microgrid solutions. 
              Making renewable energy accessible for communities, one village at a time.
            </p>
            
            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Sun className="w-4 h-4 text-energy-orange" />
                </div>
                <p className="text-sm font-semibold">50MW+</p>
                <p className="text-xs text-white/70">Solar Capacity</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Battery className="w-4 h-4 text-energy-yellow" />
                </div>
                <p className="text-sm font-semibold">2,500+</p>
                <p className="text-xs text-white/70">Families Served</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Leaf className="w-4 h-4 text-energy-green" />
                </div>
                <p className="text-sm font-semibold">1,200T</p>
                <p className="text-xs text-white/70">CO₂ Reduced</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-white/80 hover:text-white text-sm transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-white/80 hover:text-white text-sm transition-colors duration-200 hover:underline"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="text-white/80 hover:text-white text-sm transition-colors duration-200 hover:underline"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-energy-orange" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-white/80">contact@urjamitra.in</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-energy-yellow" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-white/80">+91-11-4567-8900</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-energy-blue" />
              <div>
                <p className="font-medium">Head Office</p>
                <p className="text-sm text-white/80">New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-sm text-white/80">Follow us:</p>
            <div className="flex space-x-3">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-white/80">
            <span>© 2024 UrjaMitra. Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>for rural India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
