import { SEO } from "@/components/SEO";
import { useEffect } from "react";

export function ContactPage() {
  useEffect(() => {
    // Load the external form script
    const script = document.createElement('script');
    script.src = 'https://api.ad-crm.com/js/form_embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://api.ad-crm.com/js/form_embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);
  return (
    <div>
      <SEO
        title="Contact Us - Barrat Behavioral Health and Primary Care"
        description="Get in touch with Barrat Behavioral Health and Primary Care. Contact us for appointments, questions, or to learn more about our mental health services in Woodbridge, VA."
      />
      
      {/* Hero Section */}
      <section className="bg-light-gray">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Ready to start your mental health journey? We're here to help. Get in touch with us to schedule an appointment or ask any questions about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            
            {/* Embedded Contact Form */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <iframe
                src="https://api.ad-crm.com/widget/form/BSRdar6DqcHCNr9wmTlL"
                style={{ width: '100%', height: '506px', border: 'none', borderRadius: '3px' }}
                id="inline-BSRdar6DqcHCNr9wmTlL"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="barrat-behavioral-health-and-consulting contact us form"
                data-height="506"
                data-layout-iframe-id="inline-BSRdar6DqcHCNr9wmTlL"
                data-form-id="BSRdar6DqcHCNr9wmTlL"
                title="barrat-behavioral-health-and-consulting contact us form"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-light-gray">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-gray-600">
                We're conveniently located in Woodbridge, Virginia, serving the greater Northern Virginia area.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Office Information */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Information</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600">1346 Old Bridge Road, Suite 101<br />Woodbridge, VA 22192</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">571-543-4880</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Fax</h4>
                    <p className="text-gray-600">877-353-0126</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">info@barratbhandconsulting.com</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Hours</h4>
                    <p className="text-gray-600">Monday – Friday by appointment</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500">Map integration can be added here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
