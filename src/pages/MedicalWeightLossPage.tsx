import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

export function MedicalWeightLossPage() {
  const offerings = [
    "Comprehensive Assessment: A detailed evaluation of medical history, mental health, lifestyle habits, and metabolic risk factors.",
    "Personalized Treatment Plans: Individualized strategies tailored to your goals, which may include nutritional counseling, behavioral therapy, physical activity planning, and medication management when appropriate.",
    "Medication-Assisted Weight Loss: Evidence-based use of FDA-approved medications to support appetite control, metabolism, and weight reduction.",
    "Integrated Behavioral Support: Focused guidance on emotional eating, stress management, and building healthier habits for long-term success.",
    "Ongoing Monitoring & Support: Regular follow-ups to track progress, adjust treatment, and provide motivation every step of the way."
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Medical Weight Loss Management - Specialties"
        description="Compassionate, evidence-based medical weight loss management at Barrat Behavioral Health. Comprehensive approach addressing both physical and emotional aspects of weight management."
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
            Medical Weight Loss Management
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            A compassionate and evidence-based approach to sustainable weight loss and improved well-being.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose lg:prose-lg max-w-none prose-p:text-gray-700 prose-headings:font-display prose-headings:text-gray-900 prose-p:leading-relaxed space-y-8">
            
            <div>
              <p>
                At Barrat Behavioral Health, our Medical Weight Loss Management Program provides a compassionate and evidence-based approach to help patients achieve safe, sustainable weight loss while improving overall health and well-being. We recognize that weight challenges are often influenced by a combination of biological, psychological, and lifestyle factors. Our program is designed to address the whole person, not just the number on the scale.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">What We Offer</h2>
              <ul className="space-y-4">
                {offerings.map((offering, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-brand-orange flex-shrink-0 mt-1" />
                    <span>{offering}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
              <p>
                At Barrat Behavioral Health, we combine medical expertise with behavioral health support to address both the physical and emotional aspects of weight management. Our dual focus ensures that patients not only lose weight but also gain the tools to maintain healthier lifestyles, improve confidence, and reduce the risks of chronic conditions such as diabetes, hypertension, and heart disease.
              </p>
              <p>
                Our mission is to help you achieve lasting results through a safe, supportive, and empowering process.
              </p>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105">
                <Link to="/contact" aria-label="Contact us about medical weight loss management">
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