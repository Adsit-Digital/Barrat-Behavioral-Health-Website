import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

export function TraumaCarePage() {
  const effects = [
    "Persistent feelings of fear, sadness, or guilt",
    "Emotional numbness or difficulty connecting with others",
    "Avoidance of places, people, or reminders of the event",
    "Difficulty concentrating or staying focused",
    "Sleep problems or recurring distressing memories",
    "Feeling easily overwhelmed by daily stress"
  ];

  const approaches = [
    "Supportive Counseling & Coping Strategies: Tools to reduce distress and build resilience.",
    "Practical Stress Management Skills: Guidance to navigate triggers and daily challenges.",
    "Professional Documentation: Reports for accommodations, legal, or personal purposes.",
    "Medication Management: When appropriate, careful support to ease symptoms such as anxiety or sleep difficulties."
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Trauma Care - Specialties"
        description="Comprehensive, trauma-informed care for healing and renewal at Barrat Behavioral Health. Compassionate support for your healing journey."
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
            Trauma Care
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Comprehensive, compassionate care for healing and renewal.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose lg:prose-lg max-w-none prose-p:text-gray-700 prose-headings:font-display prose-headings:text-gray-900 prose-p:leading-relaxed space-y-8">
            
            <div>
              <p>
                At Barrat Behavioral Health, we understand that trauma is not just something that happened in the past—it can continue to shape how you think, feel, and live every day. Whether from loss, abuse, violence, or other overwhelming events, trauma can leave deep emotional and physical impacts.
              </p>
              <p>
                Our mission is to provide trauma-informed, compassionate care that helps you find healing, strength, and renewal.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Understanding Trauma</h2>
              <p>
                Trauma is the mind and body's natural response to overwhelming stress. While each person's experience is unique, trauma can leave lasting effects that interfere with daily life, relationships, and overall well-being.
              </p>
              <p>Common effects of trauma may include:</p>
              <ul className="space-y-2">
                {effects.map((effect, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
              <p>
                These responses are not signs of weakness—they are your mind and body's way of coping with overwhelming experiences.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
              <p>
                At Barrat Behavioral Health we take a trauma-informed and holistic approach to care. This means we focus on creating safety, building trust, and empowering you at every step of your healing journey.
              </p>
              <p>
                Your care begins with a comprehensive evaluation, where we listen to your story and understand how trauma has shaped your life. Based on your needs, we may recommend:
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
                Every plan is customized to your pace and always honors your boundaries.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">A Path Toward Healing</h2>
              <p>
                Healing from trauma is not about forgetting the past—it's about reclaiming your peace, safety, and strength. At Barrat Behavioral Health, we walk beside you on this journey, offering professional care and steady support.
              </p>
              <p>
                No matter how heavy life feels right now, there is always hope for growth, renewal, and healing. With the right support, every person has the ability to bloom again.
              </p>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105">
                <Link to="/contact" aria-label="Contact us about trauma care">
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