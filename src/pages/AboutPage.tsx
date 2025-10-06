import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
export function AboutPage() {
  const values = [
    {
      title: "Compassion",
      description: "We provide care with empathy, understanding, and kindness, creating a safe and non-judgmental space for healing.",
    },
    {
      title: "Integrity",
      description: "We adhere to the highest ethical standards, ensuring confidentiality, transparency, and trust in our therapeutic relationships.",
    },
    {
      title: "Empowerment",
      description: "We empower our clients by focusing on their strengths, fostering resilience, and providing them with the tools to navigate life's challenges.",
    },
    {
      title: "Collaboration",
      description: "We believe in a partnership-based approach, working together with clients to create personalized treatment plans that honor their unique journey.",
    },
  ];
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
        description="Meet Kadija Conteh-Barrat, PMHNP-BC, and discover the mission behind Barrat Behavioral Health and Primary Care. Learn about our compassionate, strengths-based approach to mental wellness."
      />
      {/* Hero Section */}
      <section className="bg-light-gray">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
            About Barrat Behavioral Health and Primary Care
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Your partner in navigating the path to mental wellness with expertise, compassion, and personalized care.
          </p>
        </div>
      </section>
      {/* Founder Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                Meet Kadija Conteh-Barrat
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Kadija is a board-certified Psychiatric-Mental Health Nurse Practitioner (PMHNP-BC) with a profound dedication to supporting individuals on their journey to mental wellness. Her practice is built on a foundation of empathy, evidence-based care, and a deep-seated belief in the resilience of the human spirit.
              </p>
              <p className="mt-4 text-gray-600">
                With extensive experience across various psychiatric settings, Kadija specializes in treating a wide range of conditions, including anxiety, depression, ADHD, and mood disorders. She is passionate about creating a collaborative and trusting therapeutic relationship, empowering her clients to take an active role in their treatment and achieve their personal goals.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105">
                  <a href="https://care.headway.co/providers/kadija-conteh-barrat?utm_source=website&utm_medium=direct_link" target="_blank" rel="noopener noreferrer" aria-label="Book a session with Kadija">
                    Book a Session
                  </a>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://media.barratbhandconsulting.com/Kadija%20Conteh-Barrat.png"
                alt="Kadija Conteh-Barrat"
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="bg-light-gray py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Why Choose Us</h2>
          </div>
          <div className="prose lg:prose-lg max-w-none prose-p:text-gray-700 prose-headings:font-display prose-headings:text-gray-900 prose-p:leading-relaxed space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl">Trusted Care, Lasting Positive Change</h3>
              <p>At Barrat Behavioral Health and Primary Care, we are committed to delivering compassionate, evidence-based care that empowers individuals to create meaningful, lasting change in their lives.</p>
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
            <div>
              <h3 className="text-2xl md:text-3xl">Choosing Us for Mental Wellness</h3>
              <p>Partnering with us means embracing a journey where clinical expertise meets heartfelt support. With compassion at the center of everything we do, we’ll walk alongside you through each step of your healing process—offering guidance, encouragement, and tools that promote sustainable wellness and meaningful, positive change.</p>
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
      {/* Mission and Values Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Our Mission & Values</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our mission is to provide accessible, high-quality mental healthcare that destigmatizes mental health challenges and empowers individuals to lead fulfilling lives. We are guided by our core values in every interaction.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 mt-1">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}