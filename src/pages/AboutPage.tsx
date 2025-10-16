import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Link } from "react-router-dom";
export function AboutPage() {
  const whatSetsUsApart = [
    "Strengths-Based, Neurodivergent-Affirming Approach – We honor your unique perspective and build on your strengths. Specialized support for individuals living with ADHD, Depression, Anxiety, trauma, PTSD, mood disorders, and Weight Management.",
    "Comprehensive, Personalized Services – Care plans are thoughtfully tailored to your specific needs and goals.",
    "Holistic Support Across the Lifespan – From adolescence through adulthood, we support your total well-being.",
    "Accessible and Convenient Care – Offering both in-person and virtual visits designed to fit your life.",
  ];
  return (
    <div className="bg-white">
      <SEO
        title="About Our Practice & Founder"
        description="Meet Kadija Conteh-Barrat, PMHNP-BC, and discover the mission behind Barrat Behavioral Health & Primary. Learn about our compassionate, strengths-based approach to mental wellness."
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
          <source src="https://media.inboundwizard.com/supporting%20pages%20background.webm" type="video/webm" />
        </video>
        
        {/* Content */}
        <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
            About Barrat Behavioral Health & Primary Care
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Your partner in navigating the path to mental wellness with expertise, compassion, and personalized care.
          </p>
        </div>
      </section>
      {/* Founder Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                Kadija Conteh-Barrat, DNP, FNP-BC, PMHNP-BC
              </h2>
              <div className="mt-4 space-y-4 text-gray-600">
                <p>
                  Kadija Conteh-Barrat, DNP, APRN, FNP-BC, PMHNP-BC, is a doctorally prepared, dual board-certified Family Nurse Practitioner and Psychiatric Mental Health Nurse Practitioner. With over a decade of experience in advanced clinical practice. She integrates behavioral health and primary care to deliver holistic, evidence-based treatment across the lifespan.
                </p>
                <p>
                  Kadija is the founder and CEO of Barrat Behavioral Health and Primary Care, where she provides comprehensive psychiatric evaluations, medication management, and integrative care tailored to each patient's needs. She also serves as Adjunct Faculty at Yale University School of Nursing, where she mentors the next generation of healthcare leaders.
                </p>
                <p>
                  Her career spans diverse clinical settings, including primary care, women's Health, community-based psychiatric care, crisis, addiction, and geriatric mental health.
                </p>
                <p>
                  Kadija Conteh-Barrat is a recognized leader in nursing and mental health. She has received numerous honors, including the Outstanding Public Health Nurse Award from George Mason University and designation as an Emerging Healthcare Leader by United Health Group. She is also a recipient of the Inova Health System Edelman Institute for Nursing Excellence Scholarship and an AHEC scholar.
                </p>
                <p>
                  Dedicated to advancing health equity and access, Kadija Conteh-Barrat is the President of the Manak Community Health Organization (MaCHO), a nonprofit she co-founded to expand healthcare access in underserved communities in Sierra Leone. Through a free community clinic, medical missions, and outreach, she works to bridge health disparities and improve quality of life for vulnerable populations.
                </p>
                <p>
                  She is an active member of leading professional organizations, including the American Association of Nurse Practitioners, the American Psychiatric Nurses Association, American Nurses Association, and the Sigma Theta Tau Honor Society of Nursing.
                </p>
                <p>
                  Passionate about patient-centered care, innovation, and community service, Kadija continues to drive change at the intersection of mental health and primary care—empowering individuals, families, and communities to achieve lasting wellness.
                </p>
                <p className="italic border-l-4 border-brand-orange pl-4 mt-6">
                  "My journey to becoming a mental healthcare provider began with a deep passion for understanding the human experience and a commitment to caring for the whole person—mind, body, and spirit. As a nurse, I saw firsthand how mental health impacts every aspect of a person's well-being, often in ways that go unseen or untreated. That insight drove me to pursue dual board certification as a Family Nurse Practitioner and a Psychiatric Mental Health Nurse Practitioner. Over the past decade, I've had the privilege of walking alongside individuals and families during some of their most vulnerable moments. Each experience has reinforced my belief in compassionate, holistic care and the power of connection, healing, and resilience. This work is not just my profession—it's my calling." - Kadija Conteh-Barrat
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105">
                  <Link to="/contact" aria-label="Book a session with Kadija">
                    Book a Session
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="bg-light-gray py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Why Choose Us</h2>
          </div>
          <div className="prose lg:prose-lg max-w-none prose-p:text-gray-700 prose-headings:font-display prose-headings:text-gray-900 prose-p:leading-relaxed space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl">Trusted Care, Lasting Positive Change</h3>
              <p>At Barrat Behavioral Health & Primary, we are committed to delivering compassionate, evidence-based care that empowers individuals to create meaningful, lasting change in their lives.</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl">What Sets Us Apart</h3>
              <ul className="space-y-4">
                {whatSetsUsApart.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-brand-orange flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Logo Carousel */}
            <div className="-mx-4 sm:-mx-6 lg:-mx-8">
              <LogoCarousel />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl">Choosing Us for Mental Wellness</h3>
              <p>Partnering with us means embracing a journey where clinical expertise meets heartfelt support. With compassion at the center of everything we do, we'll walk alongside you through each step of your healing process—offering guidance, encouragement, and tools that promote sustainable wellness and meaningful, positive change.</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl">What to expect In your first session with me:</h3>
              <p>In your first session with me, you can expect a warm, welcoming environment where we focus on building a strong foundation of trust. We'll take time to explore your medical and mental health history, discuss what’s bringing you in, and begin identifying meaningful goals for your care. This session is a two-way conversation—while I’ll guide us with thoughtful questions, you are encouraged to share at your own pace and in your own words.</p>
              <p>My therapeutic approach is personalized and grounded in evidence-based practices. I integrate Cognitive Behavioral Therapy (CBT) to help reframe unhelpful thought patterns, Motivational Interviewing to encourage positive behavior change, and Trauma-Informed Care to ensure safety and empowerment throughout the healing process. Depending on your needs, I may also incorporate mindfulness strategies, solution-focused techniques, and supportive counseling to guide you toward lasting wellness.</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl">Between sessions:</h3>
              <p>My commitment to your care doesn’t end when our appointment does. While I cannot provide ongoing therapy or full consultations outside of scheduled sessions, I remain available for important updates, urgent concerns, or questions about your treatment plan.</p>
              <p>For non-urgent matters, you can contact me through the patient portal, by email, or by leaving a voicemail. I aim to respond within 1–2 business days.</p>
              <p>For urgent issues that cannot wait until our next appointment, I may offer a brief check-in or arrange an earlier session, depending on the situation.</p>
              <p>For emergencies, please call 911, go to the nearest emergency department, or call/text the Suicide & Crisis Lifeline at 988.</p>
              <p>This balance helps maintain clear boundaries while ensuring you have the support and guidance you need between visits.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Mission and Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Our Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-8 w-8 text-brand-orange flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Vision</h3>
                <p className="text-gray-600 mt-2">A community where Adolescents and adults have the tools, support, and confidence to thrive at every stage of their journey.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-8 w-8 text-brand-orange flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Mission</h3>
                <p className="text-gray-600 mt-2">We are dedicated to supporting Adolescents and adults in achieving wellness, growth, and resilience, helping them thrive at every stage of life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}