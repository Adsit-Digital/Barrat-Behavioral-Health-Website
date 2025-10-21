import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export function ApproachSection() {
  return (
    <section className="bg-white/40 backdrop-blur-sm py-20">
      <div className="container max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-text">Our Approach At Barrat Behavioral Health & Primary Care</h2>
          <p className="mt-4 text-lg text-gray-800 font-body">
            We believe in a partnership-based, whole-person approach to care. Your journey to mental wellness is unique, and we're here to provide compassionate, personalized support every step of the way. We integrate evidence-based practices to create a treatment plan that aligns with your goals and values.
          </p>
          <div className="mt-8">
            <Button asChild variant="outline" className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold rounded-md px-8 py-4 text-base transition-all duration-300">
              <Link to="/services" aria-label="Learn more about our approach">
                Learn More About Our Approach
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
export function FounderSection() {
  return (
    <section className="bg-white py-20">
      <div className="container max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-text">Led by Expertise and Compassion</h2>
            <p className="mt-4 text-lg text-neutral-gray font-body">
              Our practice is led by Kadija Conteh-Barrat, a dedicated and board-certified Psychiatric-Mental Health Nurse Practitioner. With a deep commitment to her clients' well-being, Kadija's mission is to destigmatize mental health and empower individuals to lead fulfilling lives.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline" className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold rounded-md px-8 py-4 text-base transition-all duration-300">
                <Link to="/about" aria-label="Meet Kadija">
                  Meet Kadija
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://media.barratbhandconsulting.com/Kadija%20Conteh-Barrat%20(1).png"
              alt="Dr. Kadija Conteh-Barrat DNP FNP-BC PMHNP-BC - Board Certified Psychiatric Nurse Practitioner Woodbridge VA"
              className="rounded-full shadow-xl w-full h-auto object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
}