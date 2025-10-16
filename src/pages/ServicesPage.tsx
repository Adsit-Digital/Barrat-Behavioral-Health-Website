import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
const services = [
  {
    id: "item-1",
    title: "ADHD Care",
    content: "Compassionate care for every step of your healing journey. We understand ADHD as a neurodevelopmental condition that impacts how individuals manage attention, energy, and impulses. Our approach involves a comprehensive evaluation, personalized treatment plans which may include medication management and therapy, and strategies to help you thrive.",
    span: "lg:col-span-2",
    imageUrl: "https://media.inboundwizard.com/ADHD%20Care.png",
  },
  {
    id: "item-2",
    title: "PTSD Care",
    content: "We provide compassionate, trauma-informed care that supports healing, recovery, and renewed resilience for those affected by Post-Traumatic Stress Disorder. Our evidence-based therapies are designed to help you process traumatic events in a safe and supportive environment, reducing symptoms and improving your quality of life.",
    span: "lg:col-span-1",
    imageUrl: "https://media.inboundwizard.com/PTSD%20Care.png",
  },
  {
    id: "item-3",
    title: "Trauma Care",
    content: "Comprehensive, compassionate care for healing and renewal from trauma. Every plan is customized to your pace and honors your boundaries. We utilize a range of therapeutic modalities to address the complex effects of trauma, helping you build coping skills and find a path toward healing.",
    span: "lg:col-span-1",
    imageUrl: "https://media.inboundwizard.com/Trauma%20Care.png",
  },
  {
    id: "item-4",
    title: "Mental Health Care",
    content: "Promoting well-being through personalized, evidence-based support. We focus on holistic, trauma-informed approaches that empower and sustain recovery. Our general mental health services address a wide range of concerns, providing a foundation for emotional wellness and personal growth.",
    span: "lg:col-span-2",
    imageUrl: "https://media.inboundwizard.com/Mental%20Health%20Care.png",
  },
  {
    id: "item-5",
    title: "Mood Disorders",
    content: "Comprehensive care to stabilize emotions and restore balance. We take a holistic, trauma-informed, and patient-centered approach to support individuals with mood disorders such as depression and bipolar disorder. Treatment is tailored to your specific needs, combining therapy, medication management, and lifestyle support.",
    span: "lg:col-span-3",
    imageUrl: "https://media.inboundwizard.com/Mood%20disorders%20care.png",
  },
  {
    id: "item-6",
    title: "Anxiety Disorders",
    content: "Compassionate care for anxiety grounded in evidence-based support. Our goal is to help children, teens, and adults regain balance, confidence, and peace of mind. We treat various anxiety disorders, including generalized anxiety, panic disorder, and social anxiety, using proven therapeutic techniques.",
    span: "lg:col-span-1",
    imageUrl: "https://media.inboundwizard.com/Anxiety%20Disorders.png",
  },
  {
    id: "item-7",
    title: "Sleep Concerns & Psychosomatic Symptoms",
    content: "Comprehensive care for rest, balance, and overall well-being. We help patients identify and address the root causes of sleep difficulties and stress-related physical symptoms. Our integrated approach considers the deep connection between mind and body to promote holistic healing.",
    span: "lg:col-span-2",
    imageUrl: "https://media.inboundwizard.com/Sleep%20concerns%20and%20psychosomatic%20symptoms.png",
  },
  {
    id: "item-8",
    title: "Immigrant & Refugee Psychological Support",
    content: "Trauma-informed psychological support for individuals and families navigating immigration. We provide professional, compassionate evaluations and therapy to support your journey, addressing the unique stressors and challenges faced by immigrant and refugee populations.",
    span: "lg:col-span-2",
    imageUrl: "https://media.inboundwizard.com/Immigrant%20%26%20refugee%20psychological%20support.png",
  },
  {
    id: "item-9",
    title: "Medical Weight Loss Management",
    content: "A compassionate and comprehensive approach to medical weight loss management. We understand the connection between mental health and weight, offering support that addresses both psychological and physiological factors to help you achieve and maintain a healthy lifestyle.",
    span: "lg:col-span-1",
    imageUrl: "https://media.inboundwizard.com/Medical%20weight%20loss%20management.png",
  },
];
export function ServicesPage() {
  return (
    <div className="bg-white">
      <SEO
        title="Mental Health Services in Woodbridge, VA"
        description="Explore comprehensive mental health services at Barrat Behavioral Health & Primary. We offer specialized care for ADHD, PTSD, trauma, anxiety, mood disorders, and more for teens and adults."
      />
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
            Our Services
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Comprehensive, compassionate, and personalized mental healthcare designed to support you at every stage of your journey.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Patient-Centered Mental Health Care</h2>
          </div>
          <div className="space-y-16">
            <div className="prose lg:prose-lg max-w-none prose-p:text-gray-700 prose-headings:font-display prose-headings:text-gray-900 prose-p:leading-relaxed">
              <h3>Initial Evaluation</h3>
              <p>At Barrat Behavioral Health & Primary Care, we believe the first step toward healing and growth begins with truly understanding your unique needs. Our psychiatric evaluation is a comprehensive, compassionate, and patient-centered process designed to uncover the underlying factors that may be impacting your mental health and overall well-being.</p>
              <h4 className="text-xl font-semibold text-gray-800">What to Expect</h4>
              <p>During your initial evaluation, our experienced psychiatric provider will take the time to listen to your story and learn about your medical, emotional, and social history. This is not just a checklist of symptoms—it is a collaborative conversation where you are encouraged to share your experiences, challenges, and goals in a safe and supportive environment.</p>
              <h4 className="text-xl font-semibold text-gray-800">Why It Matters</h4>
              <p>The psychiatric evaluation sets the foundation for your care journey. Whether you are experiencing anxiety, depression, ADHD, trauma, or other concerns, this thorough assessment helps us better understand your needs and design an individualized plan.</p>
              <h4 className="text-xl font-semibold text-gray-800">Next Steps</h4>
              <p>Following your evaluation, you will receive clear, personalized recommendations, which may include therapy, medication management, or supportive resources and referrals.</p>
            </div>
            <div className="prose lg:prose-lg max-w-none prose-p:text-gray-700 prose-headings:font-display prose-headings:text-gray-900 prose-p:leading-relaxed">
              <h3>Medication Management Services</h3>
              <p>We understand that every individual’s journey with mental health is unique. Our Medication Management service provides safe, thoughtful, and compassionate care—empowering you to feel balanced, supported, and in control of your wellness.</p>
            </div>
            <div className="prose lg:prose-lg max-w-none prose-p:text-gray-700 prose-headings:font-display prose-headings:text-gray-900 prose-p:leading-relaxed">
              <h3>Supportive Therapy</h3>
              <p>Our psychotherapy and counseling services provide a supportive, nonjudgmental space for individuals and families to process challenges, discover strengths, and move toward a healthier, more fulfilling life.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className={service.span}>
                <Card className="h-full bg-white border-none shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl font-semibold font-display text-gray-800">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-4 text-gray-600 text-base flex-grow">
                      <p>{service.content}</p>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900">Ready to Take the Next Step?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Your path to healing and growth starts here.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105">
                <Link to="/contact" aria-label="Book an appointment">
                  Book an Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}