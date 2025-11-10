import { Button } from "@/components/ui/button";
import { CheckCircle, Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
const benefits = [
  { title: "Strengths-Based Care", description: "We focus on your inherent strengths to build resilience and foster growth." },
  { title: "Personalized Support", description: "Your treatment plan is tailored to your unique needs, goals, and circumstances." },
  { title: "Holistic Approach", description: "We consider all aspects of your well-being, including mental, emotional, and physical health." },
  { title: "Accessible & Flexible", description: "Offering telehealth services to meet you where you are, ensuring convenience and comfort." },
];
export function WhyChooseUsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-text">Why Choose Barrat Behavioral Health & Primary Care?</h2>
            <p className="mt-4 text-lg text-neutral-gray font-body">
              We are committed to providing a safe, non-judgmental space where you can explore your challenges and discover your path to a more balanced and joyful life.
            </p>
            <div className="mt-8 space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-dark-text font-heading">{benefit.title}</h3>
                    <p className="text-neutral-gray font-body">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold rounded-md px-8 py-4 text-base transition-all duration-300 hover:scale-105">
                <Link to="/contact" aria-label="Book your session">
                  Book Your Session
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="rounded-lg shadow-md w-full h-64 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-text mb-2">Compassionate Care</h3>
                  <p className="text-neutral-gray text-sm">Your mental health journey starts here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}