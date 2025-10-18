import { SEO } from "@/components/SEO";
import { useEffect } from "react";

export function TestimonialsPage() {
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

  return (
    <div>
      <SEO
        title="Testimonials - Barrat Behavioral Health & Primary"
        description="Share your experience with Barrat Behavioral Health & Primary. Your feedback helps others find their way to real mental health relief in Woodbridge, VA."
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
        <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Share Your Experience
            </h1>
            <p className="text-lg text-gray-600">
              Your experience matters deeply to us, and we believe that by sharing your thoughts, you can help countless others navigate mental health and find their way to real relief.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
                Leave Us a Review
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  From Barrat Behavioral Health and Primary (BBHC) we want to express our gratitude that you have chosen BBHC as your partner in health. Your experience matters deeply to us, and we believe that by sharing your thoughts, you can help countless others navigate mental health and find their way to real relief.
                </p>
                <p>
                  Could you leave us a quick review? You can write a review at this link here or click the button below.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                  <p className="text-sm text-blue-800 font-medium">
                    <strong>Note:</strong> Your full name and email address will not be published
                  </p>
                </div>
                <p>
                  We really appreciate your feedback! If you have any questions, feel free to respond to this email directly. We are always happy to help!
                </p>
              </div>
            </div>
            
            {/* Review Form */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Share Your Experience
                </h3>
                <p className="text-gray-600">
                  Fill out the form below to leave your review and help others on their mental health journey.
                </p>
              </div>
              
              <iframe
                src="https://api.ad-crm.com/widget/form/BSRdar6DqcHCNr9wmTlL"
                style={{ width: '100%', height: '506px', border: 'none', borderRadius: '3px' }}
                id="inline-testimonials-form"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="barrat-behavioral-health-and-consulting testimonials form"
                data-height="506"
                data-layout-iframe-id="inline-testimonials-form"
                data-form-id="BSRdar6DqcHCNr9wmTlL"
                title="barrat-behavioral-health-and-consulting testimonials form"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-light-gray">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
              Thank You for Your Trust
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Your feedback helps us continue to provide exceptional mental health care and helps others in our community find the support they need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-brand-orange text-white rounded-lg hover:bg-brand-orange-dark transition-colors font-medium"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-6 py-3 border border-brand-orange text-brand-orange rounded-lg hover:bg-brand-orange hover:text-white transition-colors font-medium"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
