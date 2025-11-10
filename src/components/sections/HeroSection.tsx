import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ApproachSection } from "./ContentSections";
import { OptimizedVideo } from "@/components/OptimizedVideo";

export function HeroSection() {
  return (
    <section className="hero-section relative min-h-screen flex flex-col overflow-hidden">
      {/* Video Background */}
      <OptimizedVideo
        src="https://media.barratbhandconsulting.com/videoBanner.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
        preload="metadata"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Hero Content */}
      <div className="relative z-20 flex-1 flex items-center justify-center pt-20 md:pt-0">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight tracking-wide">
            Supporting Teens and Adults to Thrive at Every Stage
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/90 font-body">
            Healing can begin even in the darkest moments.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold rounded-md px-8 py-6 text-base transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              <Link to="/contact" aria-label="Book an appointment">
                Book Appointment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-brand-blue font-semibold rounded-md px-8 py-6 text-base transition-all duration-300 w-full sm:w-auto bg-transparent">
              <Link to="/services" aria-label="Explore our services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Our Approach Section Overlay */}
      <div className="relative z-20">
        <ApproachSection />
      </div>
    </section>
  );
}