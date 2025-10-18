import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

export function MeetOurTeamPage() {
  return (
    <div className="bg-white">
      <SEO
        title="Meet Our Team - Barrat Behavioral Health & Primary"
        description="Meet the compassionate professionals at Barrat Behavioral Health & Primary. Our dedicated team is committed to providing exceptional mental health care and support."
      />
      
      {/* Hero Section */}
      <section className="relative bg-light-gray overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/media/supporting%20pages%20background.webm" type="video/webm" />
        </video>
        
        {/* Content */}
        <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
            Meet Our Team
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Get to know the compassionate professionals who are dedicated to supporting your mental wellness journey.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Dedicated Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of experienced mental health professionals is committed to providing compassionate, 
              evidence-based care that empowers you to achieve your wellness goals.
            </p>
          </div>
          
          {/* Team Content Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-light-gray rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Team Information Coming Soon
              </h3>
              <p className="text-gray-600 mb-6">
                We're currently preparing detailed information about our team members. 
                Check back soon to learn more about the professionals who will be supporting your care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105">
                  <Link to="/contact" aria-label="Contact us to learn more">
                    Contact Us
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold rounded-lg px-8 py-4 text-base transition-all duration-300">
                  <Link to="/about" aria-label="Learn more about our practice">
                    About Our Practice
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-light-gray">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is here to support you every step of the way. Contact us today to schedule 
              a consultation and begin your path to mental wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105">
                <Link to="/contact" aria-label="Book a consultation">
                  Book a Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold rounded-lg px-8 py-4 text-base transition-all duration-300">
                <Link to="/services" aria-label="View our services">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
