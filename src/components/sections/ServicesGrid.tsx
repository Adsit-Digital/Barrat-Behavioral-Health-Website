import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const services = [
  {
    title: "ADHD Care",
    description: "Compassionate care for every step of your healing journey. We understand ADHD as a neurodevelopmental condition that impacts how individuals manage attention, energy, and impulses.",
    imageUrl: "https://media.barratbhandconsulting.com/ADHD%20Care.png",
  },
  {
    title: "PTSD Care",
    description: "We provide compassionate, trauma-informed care that supports healing, recovery, and renewed resilience for those affected by PTSD.",
    imageUrl: "https://media.barratbhandconsulting.com/PTSD%20Care.png",
  },
  {
    title: "Trauma Care",
    description: "Comprehensive, compassionate care for healing and renewal from trauma. Every plan is customized to your pace and honors your boundaries.",
    imageUrl: "https://media.barratbhandconsulting.com/Trauma%20Care.png",
  },
  {
    title: "Mental Health Care",
    description: "Promoting well-being through personalized, evidence-based support. We focus on holistic, trauma-informed approaches that empower and sustain recovery.",
    imageUrl: "https://media.barratbhandconsulting.com/Mental%20Health%20Care.png",
  },
  {
    title: "Mood Disorders",
    description: "Comprehensive care to stabilize emotions and restore balance. We take a holistic, trauma-informed, and patient-centered approach to support individuals with mood disorders.",
    imageUrl: "https://media.barratbhandconsulting.com/Mood%20disorders%20care.png",
  },
  {
    title: "Anxiety Disorders",
    description: "Compassionate care for anxiety grounded in evidence-based support. Our goal is to help children, teens, and adults regain balance, confidence, and peace of mind.",
    imageUrl: "https://media.barratbhandconsulting.com/Anxiety%20Disorders.png",
  },
  {
    title: "Sleep Concerns & Psychosomatic Symptoms",
    description: "Comprehensive care for rest, balance, and overall well-being. We help patients identify and address the root causes of sleep difficulties and stress-related symptoms.",
    imageUrl: "https://media.barratbhandconsulting.com/Sleep%20concerns%20and%20psychosomatic%20symptoms.png",
  },
  {
    title: "Immigrant & Refugee Psychological Support",
    description: "Trauma-informed psychological support for individuals and families navigating immigration. We provide professional, compassionate evaluations to support your journey.",
    imageUrl: "https://media.barratbhandconsulting.com/Immigrant%20%26%20refugee%20psychological%20support.png",
  },
  {
    title: "Medical Weight Loss Management",
    description: "A compassionate and comprehensive approach to medical weight loss management.",
    imageUrl: "https://media.barratbhandconsulting.com/Medical%20weight%20loss%20management.png",
  },
];
const FlipCard = ({ service }: { service: typeof services[0] }) => (
  <div className="group h-80 [perspective:1000px]">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
      {/* Front of Card */}
      <div className="absolute inset-0 [backface-visibility:hidden]">
        <img className="h-full w-full rounded-xl object-cover" src={service.imageUrl} alt={`Image representing ${service.title}`} />
        <div className="absolute inset-0 bg-black/50 rounded-xl flex items-end p-6">
          <h3 className="text-white text-2xl font-bold font-display">{service.title}</h3>
        </div>
      </div>
      {/* Back of Card */}
      <div className="absolute inset-0 h-full w-full rounded-xl bg-light-gray p-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold font-display text-gray-800">{service.title}</h3>
          <p className="mt-2 text-gray-600">{service.description}</p>
        </div>
        <Link to="/services" className="text-brand-orange font-semibold hover:text-brand-orange-dark flex items-center justify-center self-end w-full" aria-label={`Learn more about ${service.title}`}>
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  </div>
);
export function ServicesGrid() {
  return (
    <section className="bg-light-gray">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Patient-Centered Mental Health Care</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <FlipCard key={service.title} service={service} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105">
            <Link to="/services" aria-label="View all services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}