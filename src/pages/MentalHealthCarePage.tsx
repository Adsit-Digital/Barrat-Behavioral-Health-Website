import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

export function MentalHealthCarePage() {
  const offerings = [
    "Supportive therapy & Coping Strategies – tools to manage stress and build resilience",
    "Lifestyle Adjustments – guidance to support overall well-being"
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Mental Health Care - Specialties"
        description="Promoting well-being through personalized, evidence-based support at Barrat Behavioral Health. Holistic, trauma-informed mental health care."
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
            Mental Health Care
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Promoting well-being through personalized, evidence-based support.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose lg:prose-lg max-w-none prose-p:text-gray-700 prose-headings:font-display prose-headings:text-gray-900 prose-p:leading-relaxed space-y-8">
            
            <div>
              <p>
                At Barrat Behavioral Health we believe that mental health is the cornerstone of a balanced and fulfilling life. Just as physical health requires care and attention, so does emotional and psychological well-being.
              </p>
              <p>
                In today's fast-paced world, stress, anxiety, and overwhelming life challenges are increasingly common. Our mission is to provide a safe, compassionate space where individuals and families can receive the support they need to heal, grow, and thrive.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Philosophy</h2>
              <p>
                We recognize that seeking mental health care can feel overwhelming. That's why we approach every patient with compassion, dignity, and respect.
              </p>
              <p>
                There is no one-size-fits-all solution—your story, challenges, and strengths are unique. By taking the time to understand you fully, we create a personalized plan of care that feels natural, achievable, and sustainable.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">What We Offer</h2>
              <p>
                At Barrat Behavioral Health, mental health care begins with a comprehensive evaluation. During this process, we carefully listen to how life stressors are affecting your emotional well-being.
              </p>
              <p>Based on this assessment, we may recommend:</p>
              <ul className="space-y-4">
                {offerings.map((offering, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-brand-orange flex-shrink-0 mt-1" />
                    <span>{offering}</span>
                  </li>
                ))}
              </ul>
              <p>
                We emphasize a holistic and trauma-informed approach, considering not only emotional health but also the social, cultural, and personal factors that shape your experience. This ensures care that is empowering, sustainable, and effective.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Why Mental Health Matters</h2>
              <p>
                Untreated mental health concerns can impact relationships, work, physical health, and overall quality of life. By prioritizing your mental wellness, you are making an investment in your future.
              </p>
              <p>
                Whether you're navigating stress, adjusting to life transitions, or working through deeper emotional struggles, professional support can help you restore balance and strength.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">A Path Toward Healing</h2>
              <p>
                At Barrat Behavioral Health, mental health care is not about labels or quick fixes—it's about growth, resilience, and long-term wellness.
              </p>
              <p>
                We walk alongside you, offering guidance, resources, and encouragement as you move toward a healthier, more balanced life.
              </p>
              <p>
                With the right support, every individual has the ability to heal and flourish.
              </p>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105">
                <Link to="/contact" aria-label="Contact us about mental health care">
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