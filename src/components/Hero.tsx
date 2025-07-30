import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/swastik-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Swastik Nandakumar - Peak Performance Coach"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:max-w-3xl">
          {/* Main Tagline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Crush Procrastination.
            <span className="block bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Take Relentless Action.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            I help entrepreneurs, coaches & consultants unlock flow‑state performance 
            and align deeply with their values.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Register For Free Masterclass
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10">
              <Play className="mr-2 h-5 w-5" />
              Watch Preview
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <div className="flex text-accent">
                  {"★".repeat(5)}
                </div>
                <span className="font-semibold">4.9/5</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <span className="font-medium">421+ Success Stories</span>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <span className="font-medium">90-Minute Masterclass</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;