import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Target, TrendingUp, Shield, Rocket } from "lucide-react";

const WhyWorkWithMe = () => {
  const reasons = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Neuroscience-Backed Methods",
      description: "Every technique is grounded in proven brain science, not feel-good theories. You get real, measurable results.",
      badge: "Science-Based"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Activation System",
      description: "No waiting weeks to see progress. My Activation Formula works immediately to eliminate procrastination.",
      badge: "Immediate Results"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Values-Aligned Performance",
      description: "Unlike generic productivity hacks, my approach aligns your deepest values with high-performance execution.",
      badge: "Purpose-Driven"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Consistent Without Willpower",
      description: "Build systems that work automatically. No more relying on motivation or discipline to get things done.",
      badge: "Sustainable"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Proven Track Record",
      description: "421+ entrepreneurs have transformed their performance. 4.9-star rating speaks for itself.",
      badge: "Proven Results"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Business Growth Focus",
      description: "Not just personal development - everything is designed to accelerate your business growth and revenue.",
      badge: "Revenue Impact"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary bg-primary/10 border-primary/20">
            <Shield className="h-4 w-4 mr-2" />
            Why Choose Swastik
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Top Performers 
            <span className="text-accent"> Choose My Method</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            While others promise motivation that fades, I deliver systematic transformation 
            that creates lasting, compound results in your business and life.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-8 shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105 relative group">
              
              {/* Badge */}
              <Badge 
                variant="secondary" 
                className="absolute top-4 right-4 text-xs bg-accent/10 text-accent border-accent/20"
              >
                {reason.badge}
              </Badge>

              {/* Icon */}
              <div className="text-primary mb-6 group-hover:text-accent transition-colors duration-300">
                {reason.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {reason.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-lg transition-all duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "421+", label: "Success Stories" },
            { number: "4.9★", label: "Trustpilot Rating" },
            { number: "90 Min", label: "Free Training" },
            { number: "100%", label: "Actionable Content" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <Card className="mt-16 p-8 bg-gradient-trust text-white text-center">
          <div className="max-w-2xl mx-auto">
            <Shield className="h-12 w-12 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Performance Guarantee
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              If you don't see measurable improvements in your action-taking ability 
              within the first week of applying the Activation Formula, I'll personally 
              work with you until you do.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;