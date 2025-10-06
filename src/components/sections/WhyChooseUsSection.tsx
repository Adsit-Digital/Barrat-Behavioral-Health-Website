import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
const benefits = [
  { title: "Strengths-Based Care", description: "We focus on your inherent strengths to build resilience and foster growth." },
  { title: "Personalized Support", description: "Your treatment plan is tailored to your unique needs, goals, and circumstances." },
  { title: "Holistic Approach", description: "We consider all aspects of your well-being, including mental, emotional, and physical health." },
  { title: "Accessible & Flexible", description: "Offering telehealth services to meet you where you are, ensuring convenience and comfort." },
];
export function WhyChooseUsSection() {
  return (
    <section className="bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Why Choose Barrat Behavioral Health and Primary Care?</h2>
            <p className="mt-4 text-lg text-gray-600">
              We are committed to providing a safe, non-judgmental space where you can explore your challenges and discover your path to a more balanced and joyful life.
            </p>
            <div className="mt-8 space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105">
                <a href="https://care.headway.co/providers/kadija-conteh-barrat?utm_source=website&utm_medium=direct_link" target="_blank" rel="noopener noreferrer" aria-label="Book your session">
                  Book Your Session
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop" alt="A calm and welcoming therapy room" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}