import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Business Consultant",
      rating: 5,
      text: "Superhuman energy and clarity after just one session. This training is life-changing and worth far more than what I've paid for expensive coaching sessions.",
      highlight: "Superhuman energy"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Tech Entrepreneur",
      rating: 5,
      text: "I went from chronic procrastination to launching my SaaS in 6 weeks. The Activation Formula literally rewired my brain for action.",
      highlight: "Rewired my brain"
    },
    {
      name: "Jennifer Walsh",
      role: "Life Coach",
      rating: 5,
      text: "As a coach myself, I can say this is the most practical and effective system I've ever encountered. My clients are now asking what changed!",
      highlight: "Most effective system"
    },
    {
      name: "David Kim",
      role: "Marketing Agency Owner", 
      rating: 5,
      text: "From overwhelmed and scattered to laser-focused execution. I've scaled my agency 300% using these exact principles.",
      highlight: "Scaled 300%"
    },
    {
      name: "Lisa Thompson",
      role: "Online Course Creator",
      rating: 5,
      text: "The micro-action system is genius. I launched my course that had been 'in progress' for 2 years within 30 days of this training.",
      highlight: "Genius system"
    },
    {
      name: "Robert Chen",
      role: "Executive Coach",
      rating: 5,
      text: "Swastik's approach combines neuroscience with practical application perfectly. My productivity has never been higher.",
      highlight: "Never been higher"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-success bg-success/10 border-success/20">
            <Star className="h-4 w-4 mr-2" />
            Trustpilot Reviews
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Results from 
            <span className="text-accent"> Real People</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex text-accent text-2xl">
              {"★".repeat(5)}
            </div>
            <span className="text-3xl font-bold text-foreground">4.9/5</span>
            <span className="text-muted-foreground text-lg">from 421+ reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105 relative">
              
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-accent/20 absolute top-4 right-4" />
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-accent">
                  {"★".repeat(testimonial.rating)}
                </div>
                <Badge variant="outline" className="text-xs">
                  Verified
                </Badge>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="border-t pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonial.role}
                </div>
              </div>

              {/* Highlight Badge */}
              <Badge variant="secondary" className="absolute bottom-4 right-4 text-xs bg-accent/10 text-accent border-accent/20">
                {testimonial.highlight}
              </Badge>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-muted-foreground mb-6">
            Join hundreds of entrepreneurs who've transformed their performance
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>✓ No credit card required</span>
            <span>✓ Instant access</span>  
            <span>✓ 90-minute training</span>
            <span>✓ Lifetime value</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;