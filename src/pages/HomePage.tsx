import { HeroSection } from "@/components/sections/HeroSection";
import { ApproachSection, FounderSection } from "@/components/sections/ContentSections";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { InsuranceCarousel } from "@/components/sections/InsuranceCarousel";
import { BlogHighlights } from "@/components/sections/BlogHighlights";
import { SEO } from "@/components/SEO";
export function HomePage() {
  return (
    <div>
      <SEO
        title="Compassionate Mental Health Care in Woodbridge, VA"
        description="Welcome to Barrat Behavioral Health and Primary Care. We offer expert, patient-centered mental health services for teens and adults in Virginia. Specializing in ADHD, PTSD, anxiety, and trauma care. Start your healing journey today."
      />
      <HeroSection />
      <ApproachSection />
      <FounderSection />
      <ServicesGrid />
      <WhyChooseUsSection />
      <ServiceAreaSection />
      <InsuranceCarousel />
      <BlogHighlights />
    </div>
  );
}