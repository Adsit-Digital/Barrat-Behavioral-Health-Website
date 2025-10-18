import { SEO } from "@/components/SEO";
import { useEffect } from "react";
import { CheckCircle, Users, Heart, FileText } from "lucide-react";

export function ReferralsPage() {
  useEffect(() => {
    // Load the external form script
    const script = document.createElement('script');
    script.src = 'https://api.ad-crm.com/js/form_embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const forProfessionals = [
    "Seamless referral process with quick response times",
    "Collaborative care approach that respects existing therapeutic relationships",
    "Comprehensive psychiatric evaluations and medication management",
    "Specialized expertise in ADHD, PTSD, anxiety, mood disorders, and trauma care",
    "Both telehealth and in-person appointment options",
    "Regular communication and updates on patient progress (with patient consent)",
  ];

  const forIndividuals = [
    "Help a loved one access quality mental health care",
    "Support a friend or family member in their wellness journey",
    "Easy referral process with compassionate intake",
    "Confidential and respectful handling of all referrals",
    "Services for adolescents and adults",
    "Evidence-based, patient-centered care",
  ];

  return (
    <div>
      <SEO
        title="Professional Referrals - Barrat Behavioral Health & Primary Care"
        description="Refer patients or loved ones to Barrat Behavioral Health & Primary Care. We make the referral process seamless for healthcare providers and individuals seeking quality mental health care in Virginia."
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
        <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Professional Referrals
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              We make referrals easy. Whether you're a healthcare provider or someone who cares about a loved one's well-being, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Two-Column Information Section */}
      <section className="bg-light-gray py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For Healthcare Professionals */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-8 w-8 text-brand-blue" />
                <h3 className="text-2xl font-display font-bold text-gray-900">
                  For Healthcare Professionals
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Partner with us to provide your patients with exceptional psychiatric and mental health care. We value collaborative relationships and work seamlessly with referring providers.
              </p>
              <ul className="space-y-4">
                {forProfessionals.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Individuals */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-8 w-8 text-brand-orange" />
                <h3 className="text-2xl font-display font-bold text-gray-900">
                  For Individuals & Families
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Referring a friend or family member for mental health care is an act of compassion. We make it easy for you to help someone you care about take the next step toward wellness.
              </p>
              <ul className="space-y-4">
                {forIndividuals.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
              How the Referral Process Works
            </h2>
            <p className="text-lg text-gray-600">
              We've streamlined our process to ensure quick and efficient care coordination.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Submit Referral</h3>
              <p className="text-gray-600">
                Complete the referral form below or call us at 571-543-4880
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange/10 text-brand-orange mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. We Reach Out</h3>
              <p className="text-gray-600">
                Our team contacts the individual to schedule an initial consultation
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Begin Care</h3>
              <p className="text-gray-600">
                Comprehensive evaluation and personalized treatment plan development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Form Section */}
      <section className="bg-light-gray py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                Submit a Referral
              </h2>
              <p className="text-gray-600">
                Fill out the form below to refer a patient or loved one. We'll respond promptly and handle all information with the utmost confidentiality.
              </p>
            </div>
            
            {/* Embedded Contact Form */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <iframe
                src="https://api.ad-crm.com/widget/form/BSRdar6DqcHCNr9wmTlL"
                style={{ width: '100%', height: '506px', border: 'none', borderRadius: '3px' }}
                id="inline-referrals-form"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="barrat-behavioral-health-and-consulting referrals form"
                data-height="506"
                data-layout-iframe-id="inline-referrals-form"
                data-form-id="BSRdar6DqcHCNr9wmTlL"
                title="barrat-behavioral-health-and-consulting referrals form"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
              Questions About Referrals?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is here to support you. Reach out with any questions about the referral process or our services.
            </p>
          </div>
          
          <div className="bg-light-gray rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">571-543-4880</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">info@barratbhandconsulting.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Fax</h3>
                <p className="text-gray-600">877-353-0126</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600">Monday – Friday by appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

