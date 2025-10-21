import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  {
    title: "ADHD Care",
    description: "Compassionate care for every step of your healing journey. We understand ADHD as a neurodevelopmental condition that impacts how individuals manage attention, energy, and impulses.",
    imageUrl: "https://media.barratbhandconsulting.com/ADHD%20Care.png",
    imageAlt: "ADHD Treatment Woodbridge VA - Neurodivergent-Affirming Care for Children Teens and Adults",
    route: "/adhd-care",
  },
  {
    title: "PTSD Care",
    description: "We provide compassionate, trauma-informed care that supports healing, recovery, and renewed resilience for those affected by PTSD.",
    imageUrl: "https://media.barratbhandconsulting.com/PTSD%20Care.png",
    imageAlt: "PTSD Therapy Northern Virginia - Trauma-Informed Mental Health Treatment and Recovery Support",
    route: "/ptsd-care",
  },
  {
    title: "Trauma Care",
    description: "Comprehensive, compassionate care for healing and renewal from trauma. Every plan is customized to your pace and honors your boundaries.",
    imageUrl: "https://media.barratbhandconsulting.com/Trauma%20Care.png",
    imageAlt: "Trauma Therapy Woodbridge VA - Compassionate Healing and Recovery Mental Health Services",
    route: "/trauma-care",
  },
  {
    title: "Mental Health Care",
    description: "Promoting well-being through personalized, evidence-based support. We focus on holistic, trauma-informed approaches that empower and sustain recovery.",
    imageUrl: "https://media.barratbhandconsulting.com/mental%20health%20%26%20therapy%20(1).png",
    imageAlt: "Mental Health Counseling Northern Virginia - Holistic Psychiatric Care and Therapy Services",
    route: "/mental-health-care",
  },
  {
    title: "Mood Disorders",
    description: "Comprehensive care to stabilize emotions and restore balance. We take a holistic, trauma-informed, and patient-centered approach to support individuals with mood disorders.",
    imageUrl: "https://media.barratbhandconsulting.com/Mood%20disorders%20care.png",
    imageAlt: "Depression and Bipolar Disorder Treatment Woodbridge VA - Mood Disorder Psychiatric Services",
    route: "/mood-disorders",
  },
  {
    title: "Anxiety Disorders",
    description: "Compassionate care for anxiety grounded in evidence-based support. Our goal is to help children, teens, and adults regain balance, confidence, and peace of mind.",
    imageUrl: "https://media.barratbhandconsulting.com/Anxiety%20Disorders.png",
    imageAlt: "Anxiety Treatment Prince William County - GAD Panic Disorder Social Anxiety Therapy Services",
    route: "/anxiety-disorders",
  },
  {
    title: "Sleep Concerns & Psychosomatic Symptoms",
    description: "Comprehensive care for rest, balance, and overall well-being. We help patients identify and address the root causes of sleep difficulties and stress-related symptoms.",
    imageUrl: "https://media.barratbhandconsulting.com/Sleep%20concerns%20and%20psychosomatic%20symptoms.png",
    imageAlt: "Sleep Disorder Treatment Woodbridge VA - Insomnia and Stress-Related Physical Symptoms Therapy",
    route: "/sleep-concerns",
  },
  {
    title: "Immigrant & Refugee Psychological Support",
    description: "Trauma-informed psychological support for individuals and families navigating immigration. We provide professional, compassionate evaluations to support your journey.",
    imageUrl: "https://media.barratbhandconsulting.com/Immigrant%20%26%20refugee%20psychological%20support%20(1).png",
    imageAlt: "Immigration Psychological Evaluation Northern Virginia - VAWA Asylum U-Visa Hardship Waiver Support",
    route: "/immigrant-refugee-support",
  },
  {
    title: "Medical Weight Loss Management",
    description: "A compassionate and comprehensive approach to medical weight loss management.",
    imageUrl: "https://media.barratbhandconsulting.com/Medical%20weight%20loss%20management.png",
    imageAlt: "Medical Weight Loss Program Woodbridge VA - Integrated Physical and Mental Health Approach",
    route: "/medical-weight-loss",
  },
];

const FlipCard = ({ service }: { service: typeof services[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isMobile = useIsMobile();

  // On mobile, show a different layout instead of flip animation
  if (isMobile) {
    return (
      <div className="h-auto min-h-[320px]">
        <div className="relative h-full w-full rounded-oval bg-white shadow-md overflow-hidden flex flex-col">
          {/* Image Section */}
          <div className="h-48 relative overflow-hidden">
            <img 
              className="h-full w-full object-cover" 
              src={service.imageUrl} 
              alt={service.imageAlt} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          {/* Content Section */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold font-heading text-dark-text mb-3">{service.title}</h3>
            <p className="text-sm text-neutral-gray font-body mb-4 flex-grow line-clamp-3">{service.description}</p>
            <Link 
              to={service.route} 
              className="inline-flex items-center justify-center text-brand-blue font-semibold hover:text-brand-blue/80 transition-colors duration-300 py-2 px-4 border border-brand-blue rounded-md hover:bg-brand-blue/5 min-h-[44px]"
              aria-label={`Learn more about ${service.title}`}
            >
              Learn About {service.title} Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Desktop: flip card on hover or click
  return (
    <div 
      className="group h-80 [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${service.title}`}
    >
      <div className={`relative h-full w-full card-oval transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''} group-hover:[transform:rotateY(180deg)]`}>
        {/* Front of Card */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <img className="h-full w-full rounded-oval object-cover" src={service.imageUrl} alt={service.imageAlt} />
          <div className="absolute inset-0 bg-black/50 rounded-oval flex items-end p-6">
            <h3 className="text-white text-2xl font-bold font-heading">{service.title}</h3>
          </div>
        </div>
        {/* Back of Card */}
        <div className="absolute inset-0 h-full w-full rounded-oval bg-light-gray p-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold font-heading text-dark-text">{service.title}</h3>
            <p className="mt-2 text-neutral-gray font-body">{service.description}</p>
          </div>
          <Link 
            to={service.route} 
            className="text-brand-blue font-semibold hover:text-brand-blue/80 flex items-center justify-center self-end w-full transition-colors duration-300 py-2 min-h-[44px]"
            aria-label={`Learn more about ${service.title}`}
            onClick={(e) => e.stopPropagation()}
          >
            Learn About {service.title} Treatment <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export function ServicesGrid() {
  return (
    <section className="bg-light-gray py-20">
      <div className="container max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-text">Patient-Centered Mental Health Care</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <FlipCard key={service.title} service={service} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold rounded-md px-8 py-4 text-base transition-all duration-300 hover:scale-105">
            <Link to="/services" aria-label="View all services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}