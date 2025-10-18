import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

export function SleepConcernsPage() {
  const concerns = [
    "Sleep Concerns: Insomnia, frequent waking, nightmares, difficulty falling asleep, or irregular sleep cycles.",
    "Psychosomatic Symptoms: Physical issues such as headaches, stomach pain, muscle tension, or fatigue that are triggered or worsened by stress, anxiety, or trauma."
  ];

  const approaches = [
    "Comprehensive Evaluations: Careful assessment to rule out underlying medical or psychiatric causes.",
    "Sleep Hygiene Education: Practical, personalized strategies to improve sleep routines and environment.",
    "Therapeutic Support: Evidence-based therapies for stress, anxiety, and trauma management.",
    "Collaborative Care: Partnership with medical providers when additional support is needed.",
    "Professional Documentation: Reports for workplace, school, or disability accommodations if appropriate."
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Sleep Concerns & Psychosomatic Symptoms - Specialties"
        description="Comprehensive care for rest, balance, and overall well-being at Barrat Behavioral Health. Addressing sleep difficulties and stress-related physical symptoms."
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
            Sleep Concerns & Psychosomatic Symptoms
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Comprehensive care for rest, balance, and overall well-being.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose lg:prose-lg max-w-none prose-p:text-gray-700 prose-headings:font-display prose-headings:text-gray-900 prose-p:leading-relaxed space-y-8">
            
            <div>
              <p>
                Healthy sleep is the foundation of mental and physical wellness. Yet many individuals struggle with insomnia, restless nights, or stress-related physical symptoms that disrupt daily life.
              </p>
              <p>
                At Barrat Behavioral Health, we help patients identify and address the root causes of sleep difficulties and psychosomatic symptoms, promoting long-term balance, rest, and resilience.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Understanding the Connection</h2>
              <ul className="space-y-2">
                {concerns.map((concern, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>{concern}</span>
                  </li>
                ))}
              </ul>
              <p>
                These challenges are often interconnected—emotional strain can affect the body, and poor sleep can intensify mental health symptoms. At Barrat Behavioral Health, we look at the whole picture to provide meaningful solutions.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
              <p>
                We provide holistic, evidence-based care designed to restore rest and relieve stress-related symptoms. This may include:
              </p>
              <ul className="space-y-4">
                {approaches.map((approach, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-brand-orange flex-shrink-0 mt-1" />
                    <span>{approach}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Restoring Balance</h2>
              <p>
                Restful sleep and relief from stress-related physical symptoms are possible. At Barrat Behavioral Health we are committed to helping you restore balance, strengthen resilience, and allow your body and mind to heal.
              </p>
              <p>
                With the right care, you can wake with renewed energy, clarity, and peace of mind—because healing begins with rest.
              </p>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105">
                <Link to="/contact" aria-label="Contact us about sleep concerns and psychosomatic symptoms">
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