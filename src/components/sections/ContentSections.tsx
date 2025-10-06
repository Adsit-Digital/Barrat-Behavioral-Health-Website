import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export function ApproachSection() {
  return (
    <section className="bg-light-gray">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Our Approach</h2>
          <p className="mt-4 text-lg text-gray-600">
            We believe in a partnership-based, whole-person approach to care. Your journey to mental wellness is unique, and we're here to provide compassionate, personalized support every step of the way. We integrate evidence-based practices to create a treatment plan that aligns with your goals and values.
          </p>
          <div className="mt-8">
            <Button asChild variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold rounded-lg px-8 py-4 text-base transition-colors border-2">
              <Link to="/about" aria-label="Learn more about our approach">
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
    <section className="bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Led by Expertise and Compassion</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our practice is led by Kadija Conteh-Barrat, a dedicated and board-certified Psychiatric-Mental Health Nurse Practitioner. With a deep commitment to her clients' well-being, Kadija's mission is to destigmatize mental health and empower individuals to lead fulfilling lives.
          </p>
          <div className="mt-8">
            <Button asChild variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold rounded-lg px-8 py-4 text-base transition-colors border-2">
              <Link to="/about" aria-label="Meet Kadija">
                Meet Kadija
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}