import Hero from "@/components/Hero";
import About from "@/components/About";
import Masterclass from "@/components/Masterclass";
import Testimonials from "@/components/Testimonials";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Masterclass />
      <Testimonials />
      <WhyWorkWithMe />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
