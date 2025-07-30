import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="h-4 w-4" />
              Peak Performance Expert
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              From Life-Altering Accident to 
              <span className="text-accent"> Purpose-Driven Success</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              I'm Swastik Nandakumar, a Peak Performance Coach & Business Growth Specialist 
              who discovered the power of aligned action through overcoming life's greatest challenges.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              After a life-altering accident, I discovered that true performance isn't about 
              grinding harder—it's about aligning your deepest values with relentless, 
              purpose-driven action. Today, I help entrepreneurs, coaches & consultants 
              eliminate procrastination and execute consistently without burning out.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {[
                "Neuroscience-backed methodologies for peak performance",
                "Proven frameworks that eliminate procrastination permanently",
                "Values-aligned approach to sustainable business growth"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>

            <Button variant="action" size="lg" className="px-8">
              Learn My Story
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">421+</div>
                <div className="text-muted-foreground font-medium">Success Stories</div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">4.9★</div>
                <div className="text-muted-foreground font-medium">Trustpilot Rating</div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105 col-span-2">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">90 Minutes</div>
                <div className="text-muted-foreground font-medium">
                  Free Masterclass That Changes Everything
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;