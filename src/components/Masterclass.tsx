import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Zap, Target, TrendingUp, Award } from "lucide-react";

const Masterclass = () => {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "B × I / D × D Formula",
      description: "The neuroscience-backed equation for instant motivation activation"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "A.P.M. Method", 
      description: "Action-Performance-Momentum system for consistent execution"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Micro-Wins Momentum Formula",
      description: "Build unstoppable momentum through strategic small victories"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "2-Min Micro-Action Rule",
      description: "Eliminate overthinking and take immediate action on any goal"
    }
  ];

  const outcomes = [
    "Build unshakeable habits that stick permanently",
    "Develop complete trust in your ability to execute",
    "Smash through your biggest goals with confidence",
    "Eliminate procrastination from your life forever"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-accent bg-accent/10 border-accent/20">
            <Clock className="h-4 w-4 mr-2" />
            90-Minute Masterclass
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            The <span className="text-accent">Activation Formula</span>
            <br />Masterclass
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A free 90-minute training that eliminates procrastination forever and 
            drives relentless action toward your biggest goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* What You'll Learn */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">
              What You'll Master
            </h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 shadow-card hover:shadow-glow transition-all duration-300 border-l-4 border-l-accent">
                  <div className="flex gap-4">
                    <div className="text-accent mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Results You'll Get */}
          <div>
            <Card className="p-8 shadow-hero bg-gradient-trust text-white">
              <h3 className="text-3xl font-bold mb-6">
                Results You'll Get
              </h3>
              
              <div className="space-y-4 mb-8">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 font-medium text-lg">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="border-t border-white/20 pt-6 mb-8">
                <div className="flex items-center justify-between text-white/80">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span className="font-medium">2,847+ Attendees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-accent">
                      {"★".repeat(5)}
                    </div>
                    <span className="font-medium">4.9/5 Rating</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button variant="hero" size="lg" className="w-full text-lg py-6">
                Register Now - Completely Free
              </Button>
              
              <p className="text-center text-white/60 text-sm mt-4">
                No credit card required • Instant access • Limited seats
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Masterclass;