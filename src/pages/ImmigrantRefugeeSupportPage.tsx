import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

export function ImmigrantRefugeeSupportPage() {
  const expectations = [
    "Compassionate, Confidential Interview – available via telehealth or in-person.",
    "Trauma-Informed Mental Health Assessment – sensitive to cultural and personal experiences."
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Immigrant & Refugee Psychological Support - Specialties"
        description="Compassionate, trauma-informed care for individuals and families navigating immigration at Barrat Behavioral Health. Professional psychological evaluations and support."
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
            Immigrant & Refugee Psychological Support
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Compassionate, trauma-informed care for individuals and families navigating immigration.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose lg:prose-lg max-w-none prose-p:text-gray-700 prose-headings:font-display prose-headings:text-gray-900 prose-p:leading-relaxed space-y-8">
            
            <div>
              <p>
                At Barrat Behavioral Health, we understand that immigration is not just a legal process—it is an emotional journey. Many families face trauma, separation, and overwhelming stress while navigating this system.
              </p>
              <p>
                Our mission is to provide compassionate, trauma-informed psychological evaluations that support individuals and families during their immigration cases, ensuring their experiences are documented with dignity and care.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">What to Expect</h2>
              <p>
                When you come to Barrat Behavioral Health, you can expect a process that is both professional and compassionate:
              </p>
              <ul className="space-y-4">
                {expectations.map((expectation, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-brand-orange flex-shrink-0 mt-1" />
                    <span>{expectation}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Supporting Your Journey</h2>
              <p>
                Immigration challenges can feel overwhelming, but you don't have to face them alone. At Barrat Behavioral Health, we provide psychological support with compassion, cultural sensitivity, and clinical expertise, we are here to walk with you every step of the way.
              </p>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105">
                <Link to="/contact" aria-label="Contact us about immigrant and refugee psychological support">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}