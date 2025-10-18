import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

export function AnxietyDisordersPage() {
  const anxietyTypes = [
    "Generalized Anxiety Disorder (GAD): Persistent and excessive worry about everyday matters.",
    "Social Anxiety Disorder: Intense fear of judgment or embarrassment in social settings.",
    "Panic Disorder: Sudden, overwhelming episodes of fear or panic attacks."
  ];

  const approaches = [
    "Comprehensive Evaluations: Careful assessment to identify the type and severity of anxiety.",
    "Evidence-Based Therapies: CBT, mindfulness, and relaxation techniques tailored to your needs.",
    "Collaborative Support: Partnership with families, schools, or workplaces to provide accommodations.",
    "Professional Documentation: Reports for FMLA, disability, or school accommodations when needed."
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Anxiety Disorders - Specialties"
        description="Compassionate care for anxiety grounded in evidence-based support at Barrat Behavioral Health. Treatment for generalized anxiety, panic disorder, and social anxiety."
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
            Anxiety Disorders
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Compassionate care for anxiety, grounded in evidence-based support.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose lg:prose-lg max-w-none prose-p:text-gray-700 prose-headings:font-display prose-headings:text-gray-900 prose-p:leading-relaxed space-y-8">
            
            <div>
              <p>
                At Barrat Behavioral Health, we understand that anxiety can be overwhelming, interfering with school, work, relationships, and daily life. Anxiety is not simply "worrying too much"—it is a mental health condition that deserves compassion, understanding, and professional care.
              </p>
              <p>
                Our goal is to provide supportive, evidence-based treatment for children, teens, and adults living with anxiety disorders—helping each individual regain balance, confidence, and peace of mind.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Understanding Anxiety</h2>
              <p>Anxiety disorders can take many forms, including:</p>
              <ul className="space-y-2">
                {anxietyTypes.map((type, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
              <p>
                In addition to emotional distress, anxiety may cause restlessness, irritability, difficulty sleeping, racing thoughts, rapid heartbeat, or shortness of breath.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
              <p>
                At Barrat Behavioral Health, we use a patient-centered, holistic approach that considers the whole person—not just symptoms.
              </p>
              <p>Your care may include:</p>
              <ul className="space-y-4">
                {approaches.map((approach, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-brand-orange flex-shrink-0 mt-1" />
                    <span>{approach}</span>
                  </li>
                ))}
              </ul>
              <p>
                Our focus is not only on reducing symptoms but also on building long-term resilience, coping skills, and confidence.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">A Path to Peace</h2>
              <p>
                Living with anxiety doesn't have to mean living with constant fear. With the right support, it is possible to restore balance, reclaim confidence, and move forward with clarity and peace of mind.
              </p>
              <p>
                At Barrat Behavioral Health, we walk alongside you every step of the way—because every mind deserves the chance to bloom.
              </p>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105">
                <Link to="/contact" aria-label="Contact us about anxiety disorders care">
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