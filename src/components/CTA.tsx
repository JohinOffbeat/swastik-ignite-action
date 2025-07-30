import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Gift, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <Card className="p-12 shadow-hero bg-white/95 backdrop-blur-sm text-foreground text-center relative overflow-hidden">
          
          {/* Urgency Badge */}
          <Badge variant="secondary" className="mb-6 text-accent bg-accent/10 border-accent/20 text-sm px-4 py-2">
            <Clock className="h-4 w-4 mr-2" />
            Limited Seats Available
          </Badge>

          {/* Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to <span className="text-accent">Eliminate Procrastination</span>
            <br />Forever?
          </h2>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Join The Activation Formula Masterclass and discover the exact system 
            that's helped 421+ entrepreneurs take relentless action on their biggest goals.
          </p>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: <Gift className="h-6 w-6" />, text: "Completely Free", subtext: "90-minute training" },
              { icon: <Users className="h-6 w-6" />, text: "421+ Success Stories", subtext: "Proven results" },
              { icon: <Clock className="h-6 w-6" />, text: "Instant Access", subtext: "Start immediately" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center p-4">
                <div className="text-accent mb-2">{item.icon}</div>
                <div className="font-semibold text-foreground">{item.text}</div>
                <div className="text-muted-foreground text-sm">{item.subtext}</div>
              </div>
            ))}
          </div>

          {/* Main CTA Button */}
          <Button variant="hero" size="lg" className="text-xl px-12 py-6 mb-6 shadow-action">
            Register Now For Free
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
            <span>✓ No credit card required</span>
            <span>✓ Instant access</span>
            <span>✓ Mobile-friendly</span>
            <span>✓ Lifetime access</span>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-lg text-muted-foreground italic border-l-4 border-accent pl-6 max-w-2xl mx-auto">
            "This training literally rewired my brain for action. I went from chronic 
            procrastination to launching my business in 6 weeks."
            <footer className="text-accent font-semibold mt-2">- Marcus R., Tech Entrepreneur</footer>
          </blockquote>
        </Card>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Questions? Get In Touch
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3 text-white/90">
              <Mail className="h-5 w-5" />
              <span className="font-medium">info@swastiknandakumar.com</span>
            </div>
            
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;