import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Swastik Nandakumar</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Peak Performance Coach & Business Growth Expert helping entrepreneurs, 
              coaches & consultants unlock flow-state performance and align deeply with their values.
            </p>
            
            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
              4.9★ Rated • 421+ Success Stories
            </Badge>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                "Free Masterclass", 
                "About Swastik", 
                "Success Stories", 
                "Contact"
              ].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@swastiknandakumar.com</span>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3 mt-4">
                {[
                  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                  { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                  { icon: <Youtube className="h-5 w-5" />, label: "YouTube" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="p-2 rounded-lg bg-primary-light/20 text-primary-foreground/80 hover:text-accent hover:bg-accent/10 transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-foreground/60 text-sm">
            © 2024 Swastik Nandakumar. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-primary-foreground/60 text-sm">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;