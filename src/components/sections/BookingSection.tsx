import { Button } from "@/components/ui/button";

export function BookingSection() {
  return (
    <section className="bg-white py-20">
      <div className="container max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-text mb-4">
            Nurturing Mental Wellness for All Ages
          </h2>
          <p className="text-lg text-neutral-gray font-body mb-12">
            Neurodivergent care for adolescents and adults across the lifespan.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Psychology Today Card */}
            <div className="bg-white border border-neutral-gray/30 rounded-md p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <span className="text-brand-blue font-bold text-lg font-heading" style={{ letterSpacing: '-0.5px' }}>
                  Psychology Today
                </span>
              </div>
              <Button 
                asChild 
                className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white rounded-md px-3 py-2 text-xs font-medium transition-all duration-300 whitespace-nowrap"
              >
                <a 
                  href="https://www.psychologytoday.com/us/psychiatrists/kadija-conteh-barrat-stafford-va/1164659" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Book appointment on Psychology Today"
                >
                  Book An Appointment
                </a>
              </Button>
            </div>

            {/* Headway Card */}
            <div className="bg-white border border-neutral-gray/30 rounded-md p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-dark-text font-heading">Headway</span>
                </div>
              </div>
              <Button 
                asChild 
                className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white rounded-md px-3 py-2 text-xs font-medium transition-all duration-300 whitespace-nowrap"
              >
                <a 
                  href="https://care.headway.co/providers/kadija-conteh-barrat?utm_source=website&utm_medium=direct_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Book appointment on Headway"
                >
                  Book An Appointment
                </a>
              </Button>
            </div>

            {/* Growtherapy Card */}
            <div className="bg-white border border-neutral-gray/30 rounded-md p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <span className="font-bold text-dark-text text-lg lowercase font-heading">
                  growtherapy
                </span>
              </div>
              <Button 
                asChild 
                className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white rounded-md px-3 py-2 text-xs font-medium transition-all duration-300 whitespace-nowrap"
              >
                <a 
                  href="https://growtherapy.com/book-appointment?id=25415&utm_source=website&utm_medium=booking-link&utm_campaign=provider-dashboard" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Book appointment on Growtherapy"
                >
                  Book An Appointment
                </a>
              </Button>
            </div>

            {/* HelloAlma Card */}
            <div className="bg-white border border-neutral-gray/30 rounded-md p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <span className="font-bold text-dark-text text-lg font-heading">
                  HelloAlma
                </span>
              </div>
              <Button 
                asChild 
                className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white rounded-md px-3 py-2 text-xs font-medium transition-all duration-300 whitespace-nowrap"
              >
                <a 
                  href="https://secure.helloalma.com/providers/kadija-conteh-barrat/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Book appointment on HelloAlma"
                >
                  Book An Appointment
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
