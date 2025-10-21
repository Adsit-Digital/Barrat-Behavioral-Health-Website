import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex flex-col items-center gap-2" aria-label="Barrat Behavioral Health and Primary Care Home">
              <img src="https://media.barratbhandconsulting.com/Barratbhand-consulting%20main-logo.png" alt="Barrat Behavioral Health & Primary Care - Psychiatric Services Northern Virginia" className="h-12 w-auto" />
              <span className="font-bold text-xl text-white text-center">Barrat Behavioral Health & Primary Care</span>
            </Link>
            <p className="text-sm">Supporting teens and adults to thrive at every stage.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-base text-gray-300 hover:text-white" aria-label="About">About Us</Link></li>
              <li><Link to="/services" className="text-base text-gray-300 hover:text-white" aria-label="Services">Services</Link></li>
              <li><Link to="/blog" className="text-base text-gray-300 hover:text-white" aria-label="Blog">Blog</Link></li>
              <li><Link to="/contact" className="text-base text-gray-300 hover:text-white" aria-label="Contact Us">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2 text-base">
              <li>1346 Old Bridge Road, Suite 101</li>
              <li>Woodbridge, VA 22192</li>
              <li className="pt-2">Phone: 571-543-4880</li>
              <li>Fax: 877-353-0126</li>
              <li className="pt-2">info@barratbhandconsulting.com</li>
              <li className="pt-2">Hours: Mon–Fri by appointment</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Get Help</h3>
            <div className="mt-4">
              <Link to="/contact" className="inline-block bg-brand-orange text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-orange-dark transition-colors" aria-label="Book an appointment">
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="bg-gray-700/50 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-200 leading-relaxed text-center">
              We are honored to support our community's emotional and physical wellness. If you are experiencing a medical emergency, feeling suicidal, depressed, or struggling with a difficult situation, please call or text the Help Crisis Line <a href="tel:988" className="text-brand-orange hover:text-brand-orange-dark font-semibold">988</a>, call <a href="tel:911" className="text-brand-orange hover:text-brand-orange-dark font-semibold">911</a> or go to the nearest emergency room or crisis center. We are not a 24/7 emergency provider.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Barrat Behavioral Health and Primary Care. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-4 sm:mt-0">Built with ❤️ at Adsit Digital</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

