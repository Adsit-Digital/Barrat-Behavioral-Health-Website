import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export function HeroSection() {
  return (
    <section className="relative bg-cover bg-center" style={{ backgroundImage: "url('https://media.barratbhandconsulting.com/hero%20back%20image.svg')" }}>
      <div className="absolute inset-0 bg-white/75" />
      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
          Supporting Teens and Adults to Thrive at Every Stage
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
          Healing can begin even in the darkest moments.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-6 text-base transition-transform hover:scale-105 w-full sm:w-auto">
            <a href="https://care.headway.co/providers/kadija-conteh-barrat?utm_source=website&utm_medium=direct_link" target="_blank" rel="noopener noreferrer" aria-label="Book an appointment">
              Book Appointment
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold rounded-lg px-8 py-6 text-base transition-colors w-full sm:w-auto border-2 bg-white/50 hover:bg-brand-orange">
            <Link to="/services" aria-label="Explore our services">
              Explore Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}