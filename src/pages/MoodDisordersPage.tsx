import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

export function MoodDisordersPage() {
  const symptoms = [
    "Persistent sadness or emptiness",
    "Loss of interest or pleasure in activities",
    "Irritability or heightened emotional sensitivity",
    "Periods of unusually elevated energy or mood swings"
  ];

  const approaches = [
    "Coping Strategies & Lifestyle Adjustments: Tools to promote emotional regulation and resilience.",
    "Counseling & Supportive Sessions: Space to process challenges and develop healthier perspectives.",
    "Professional Documentation: Letters or reports for accommodations at school or work needs.",
    "Medication Management: When appropriate, careful monitoring and collaboration to support stability."
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Mood Disorders - Specialties"
        description="Comprehensive care to stabilize emotions and restore balance at Barrat Behavioral Health. Holistic, trauma-informed support for mood disorders."
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
            Mood Disorders
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Comprehensive care to stabilize emotions and restore balance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose lg:prose-lg max-w-none prose-p:text-gray-700 prose-headings:font-display prose-headings:text-gray-900 prose-p:leading-relaxed space-y-8">
            
            <div>
              <p>
                At Barrat Behavioral Health, we understand that mood plays a powerful role in shaping how we think, feel, and function. When mood becomes difficult to regulate, it can affect relationships, work, school, and overall quality of life.
              </p>
              <p>
                Our mission is to provide compassionate, professional care for individuals living with mood disorders—helping them find stability, strength, and hope.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Understanding Mood Disorders</h2>
              <p>
                Mood disorders are conditions that affect a person's emotional state over extended periods of time. While everyone experiences ups and downs, mood disorders involve changes that are more intense, longer lasting, and often disruptive to daily life.
              </p>
              <p>These may include:</p>
              <ul className="space-y-2">
                {symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
              <p>
                Living with these patterns can feel overwhelming—but with the right support, healing and balance are possible.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
              <p>
                At Barrat Behavioral Health, we take a holistic, trauma-informed, and patient-centered approach to supporting individuals with mood disorders.
              </p>
              <p>
                Your care begins with a comprehensive psychiatric evaluation, where we take the time to understand your experiences and how your mood has impacted your life. From there, we design a tailored plan that may include:
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
                Treatment is not just about symptom relief—it's about helping you feel more in control, building resilience, and restoring a sense of purpose and hope.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">A Path to Healing</h2>
              <p>
                Living with a mood disorder can feel isolating—but you are not alone. At Barrat Behavioral Health, we are committed to walking alongside you every step of the way.
              </p>
              <p>
                Through thoughtful evaluation, compassionate care, and practical strategies, we help you move toward greater stability and a brighter outlook on life.
              </p>
              <p>
                With the right support, healing is possible—and every mind has the potential to bloom.
              </p>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105">
                <Link to="/contact" aria-label="Contact us about mood disorders care">
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