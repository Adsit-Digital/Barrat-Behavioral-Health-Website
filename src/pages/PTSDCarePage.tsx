import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

export function PTSDCarePage() {
  const symptoms = [
    "Flashbacks or vivid, unwanted memories",
    "Nightmares and disrupted sleep",
    "Intense fear, guilt, or shame",
    "Feeling detached or disconnected from others",
    "Difficulty concentrating or staying present",
    "Heightened startle response or always feeling \"on edge\""
  ];

  const approaches = [
    "Counseling & Coping Strategies: Practical tools to reduce triggers, manage distress, and build resilience.",
    "Medication Management: Thoughtful use of medication, when appropriate, to support sleep, focus, and emotional balance.",
    "Education & Resources: Guidance for you and your loved ones to better understand PTSD and support recovery.",
    "Professional Documentation: Reports for schools, workplaces, legal, or immigration purposes when needed."
  ];

  return (
    <div className="bg-white">
      <SEO
        title="PTSD Care - Specialties"
        description="Compassionate, trauma-informed PTSD care at Barrat Behavioral Health. Comprehensive evaluation and personalized treatment for healing and recovery."
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
            PTSD Care
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Compassionate care for every step of your healing journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose lg:prose-lg max-w-none prose-p:text-gray-700 prose-headings:font-display prose-headings:text-gray-900 prose-p:leading-relaxed space-y-8">
            
            <div>
              <p>
                At Barrat Behavioral Health, we understand how deeply Post-Traumatic Stress Disorder (PTSD) can affect daily life. PTSD may develop after experiencing or witnessing distressing events such as violence, abuse, accidents, or sudden loss. While these experiences may be in the past, their impact can remain—making it difficult to feel safe, connected, or in control.
              </p>
              <p>
                Our mission is to provide compassionate, trauma-informed care that supports healing, recovery, and renewed resilience.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Understanding PTSD</h2>
              <p>
                PTSD is more than just a reaction to trauma—it is a condition where the mind and body remain on high alert long after the event has passed. Symptoms can look different for each person, but may include:
              </p>
              <ul className="space-y-2">
                {symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
              <p>
                These responses are not personal failings—they are the body's way of trying to protect itself from further harm.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
              <p>
                At Barrat Behavioral Health, our care is trauma-informed, holistic, and patient-centered. We begin with a comprehensive evaluation to understand your symptoms, history, and goals for treatment. Every care plan is tailored to your unique needs and may include:
              </p>
              <ul className="space-y-4">
                {approaches.map((approach, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-brand-orange flex-shrink-0 mt-1" />
                    <span>{approach}</span>
                  </li>
                ))}
              </ul>
              <p>
                We move at your pace, ensuring you always feel safe, respected, and in control of your healing journey.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Moving Toward Healing</h2>
              <p>
                Living with PTSD can feel exhausting and isolating, but you are not alone. At Barrat Behavioral Health, we are here to help you reclaim safety, peace, and stability.
              </p>
              <p>
                With the right support, healing is possible—no matter how heavy the past feels. Every mind has the potential to bloom again, and we are here to walk with you on that journey.
              </p>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105">
                <Link to="/contact" aria-label="Contact us about PTSD care">
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