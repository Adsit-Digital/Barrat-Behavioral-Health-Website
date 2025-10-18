import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

export function ADHDCarePage() {
  const challenges = [
    "Trouble concentrating or completing tasks",
    "Restlessness or difficulty sitting still",
    "Forgetfulness and disorganization",
    "Acting quickly without considering consequences",
    "Feeling easily overwhelmed or frustrated"
  ];

  const approaches = [
    "Coping Strategies & Skills – Practical tools to improve focus, organization, and emotional regulation.",
    "Professional Documentation – Letters or reports for schools, colleges, or workplaces to request needed accommodations.",
    "Medication Management – When appropriate, careful monitoring and support to ensure safe, effective treatment."
  ];

  return (
    <div className="bg-white">
      <SEO
        title="ADHD Care - Specialties"
        description="Compassionate, neurodivergent-affirming ADHD care at Barrat Behavioral Health. Comprehensive evaluation and personalized treatment for children, teens, and adults."
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
            ADHD Care
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
                At Barrat Behavioral Health, we understand that Attention-Deficit/Hyperactivity Disorder (ADHD) is more than just difficulty focusing. ADHD is a neurodevelopmental condition that impacts how individuals manage attention, energy, and impulses.
              </p>
              <p>
                While ADHD can bring challenges at school, work, or home, it can also come with unique strengths—such as creativity, innovation, and high energy. Our mission is to provide neurodivergent-affirming, compassionate care that helps children, teens, and adults with ADHD thrive in their everyday lives.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Understanding ADHD</h2>
              <p>
                ADHD looks different for everyone. Some people experience primarily inattention (difficulty focusing or staying organized), while others may experience hyperactivity and impulsivity. Many live with a combination of both.
              </p>
              <p>Common challenges may include:</p>
              <ul className="space-y-2">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
              <p>
                It is important to remember: ADHD is not a lack of intelligence or ability—it is simply a different way of processing and engaging with the world.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
              <p>
                At Barrat Behavioral Health, we take a holistic, patient-centered approach to ADHD care. We begin with a comprehensive psychiatric evaluation that considers medical, social, and personal factors affecting daily life.
              </p>
              <p>Based on this assessment, we design an individualized plan that may include:</p>
              <ul className="space-y-4">
                {approaches.map((approach, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-brand-orange flex-shrink-0 mt-1" />
                    <span>{approach}</span>
                  </li>
                ))}
              </ul>
              <p>
                Our goal is to help each individual leverage their strengths while addressing challenges in a supportive and non-judgmental way.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Helping Every Individual</h2>
              <p>
                ADHD can feel overwhelming—but with the right support, it can also be a pathway to growth and success. At Barrat Behavioral Health, we provide the tools, encouragement, and care needed to navigate challenges while building confidence and resilience.
              </p>
              <p>
                We believe that with understanding and guidance, every individual with ADHD has the ability to flourish—because every mind deserves the chance to thrive.
              </p>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105">
                <Link to="/contact" aria-label="Contact us about ADHD care">
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