import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

export function MeetOurTeamPage() {
  return (
    <div className="bg-white">
      <SEO
        title="Meet Our Team - Barrat Behavioral Health & Primary"
        description="Meet the compassionate professionals at Barrat Behavioral Health & Primary. Our dedicated team is committed to providing exceptional mental health care and support."
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
            Meet Our Team
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Get to know the compassionate professionals who are dedicated to supporting your mental wellness journey.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Dedicated Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of experienced mental health professionals is committed to providing compassionate, 
              evidence-based care that empowers you to achieve your wellness goals.
            </p>
          </div>
          
          {/* Team Member 1 - Amanda - Bio Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-24">
            {/* Bio - Left Side */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
                  Amanda Barrat
                </h3>
                <p className="text-lg font-semibold text-brand-orange mb-4">
                  FNP-C, PMHNP-BC
                </p>
                <p className="text-base text-gray-600 italic mb-4">
                  Dual Board-Certified Family Nurse Practitioner & Psychiatric-Mental Health Nurse Practitioner
                </p>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Hi there, I'm Amanda! I'm a dual board-certified Family Nurse Practitioner (FNP-C) and Psychiatric-Mental Health Nurse Practitioner (PMHNP-BC) with over five years of experience providing compassionate, evidence-based care to adults 18 and older.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  I'm passionate about supporting individuals in achieving balance and wellness, both mentally and physically. My approach integrates medical and psychiatric care to treat the whole person, not just the symptoms. Throughout my career, I've had the privilege of caring for active-duty service members, veterans, and underserved populations, experiences that have deepened my commitment to improving access to high-quality, equitable healthcare.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  I specialize in treating a wide range of mental health conditions, including ADHD, anxiety, depression, mood disorders, and PTSD. Using a combination of medication management and psychotherapy, I work with each patient to develop a treatment plan tailored to their unique needs, goals, and lifestyle.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  My approach to care is welcoming, empathetic, and grounded in respect for the courage it takes to seek help, especially in a world where mental health is still too often stigmatized. I believe healing happens through collaboration. By providing education, guidance, and ongoing support, I empower my patients to take an active role in their care and make informed decisions about their health.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Ultimately, my goal is to promote lasting wellness and meaningful change by addressing the whole person—mind, body, and environment. I strive to create a safe, supportive space where every individual feels heard, valued, and encouraged on their journey toward healing.
                </p>
                
                <div className="bg-light-gray rounded-lg p-6 mt-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    What to Expect in Your First Session
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Your first session is all about you—your story, your needs, and your goals. You can expect a warm, welcoming, and judgment-free environment where you can speak openly about what brings you in. I take time to listen and understand your unique experiences so we can begin building a trusting, collaborative relationship.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Together, we'll explore what's been challenging, identify your goals for care, and discuss treatment options tailored to your comfort level and lifestyle. My goal is for you to leave your first session feeling understood, supported, and confident that you're taking a positive step toward healing and long-term wellness.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Headshot - Right Side */}
            <div className="order-first md:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/media/1514FD7B-A23A-4AFD-8D7B-0ACBED99B0FF.png" 
                  alt="Amanda Barrat, FNP-C, PMHNP-BC"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Team Member 2 - Nathaniel - Image Left, Bio Right */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* Headshot - Left Side */}
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/media/88615597-937E-4BEA-AA7C-D7B31167B4B0.png" 
                  alt="Nathaniel Conteh-Barrat, COO"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Bio - Right Side */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
                  Nathaniel Conteh-Barrat
                </h3>
                <p className="text-lg font-semibold text-brand-orange mb-4">
                  Chief Operating Officer
                </p>
                <p className="text-base text-gray-600 italic mb-4">
                  Healthcare Operations Leader & Health Informatics Specialist
                </p>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Nathaniel Conteh-Barrat is a dedicated and forward-thinking healthcare operations leader with a strong foundation in technology and health informatics. As Chief Operating Officer of Barrat Behavioral Health and Primary Care, he oversees the clinic's daily operations, financial systems, and strategic initiatives to ensure the delivery of compassionate, efficient, and high-quality care to every patient.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  With a Higher Diploma in Computer Systems and Networks from London South Bank University and ongoing studies toward a Bachelor of Science in Health Informatics at George Mason University, Nathaniel bridges the worlds of technology and healthcare. His expertise enables the integration of data-driven systems that enhance clinical workflows, optimize administrative processes, and improve overall patient outcomes.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Nathaniel's experience spans the full spectrum of healthcare operations—coordinating multidisciplinary teams, optimizing patient scheduling, ensuring regulatory compliance, and supporting billing and electronic health record systems. His technical background in network administration and data management brings a distinctive edge to his leadership, combining operational excellence with innovation.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Beyond his work at the clinic, Nathaniel volunteers with the Greater Prince William Medical Reserve Corps, supporting public health initiatives such as vaccination drives, community education, and emergency preparedness programs. His commitment to service reflects his belief that equitable, accessible care begins with proactive community engagement.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Dedicated to advancing health equity globally, Nathaniel also serves as the Chief Operating Officer of the Manak Community Health Organization (MaCHO), a nonprofit he co-founded to expand healthcare access in underserved communities in Sierra Leone. Through free community clinics, medical missions, and public health outreach, he helps bridge disparities and improve quality of life for vulnerable populations.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  When he's not leading healthcare initiatives or pursuing his studies, Nathaniel enjoys traveling, exploring new cultures, and spending time with his family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-light-gray">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is here to support you every step of the way. Contact us today to schedule 
              a consultation and begin your path to mental wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105">
                <Link to="/contact" aria-label="Book a consultation">
                  Book a Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold rounded-lg px-8 py-4 text-base transition-all duration-300">
                <Link to="/services" aria-label="View our services">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
