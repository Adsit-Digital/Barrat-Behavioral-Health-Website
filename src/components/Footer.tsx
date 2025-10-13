import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/OptimizedImage";
export function Footer() {
  return (
    <footer className="footer-wave bg-white text-dark-text">
      <div className="container max-w-container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2" aria-label="Barrat Behavioral Health and Primary Care Home">
              <OptimizedImage 
                src="https://media.inboundwizard.com/Barratbhand-consulting%20main-logo.png" 
                alt="Barrat Behavioral Health Logo" 
                className="h-12 w-auto" 
                priority={false}
                width={150}
                height={48}
              />
            </Link>
            <p className="text-sm text-neutral-gray font-body">Supporting teens and adults to thrive at every stage.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-dark-text tracking-wider uppercase font-heading">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-base text-neutral-gray hover:text-primary-blue transition-colors duration-300 font-body" aria-label="About">About Us</Link></li>
              <li><Link to="/services" className="text-base text-neutral-gray hover:text-primary-blue transition-colors duration-300 font-body" aria-label="Services">Services</Link></li>
              <li><Link to="/blog" className="text-base text-neutral-gray hover:text-primary-blue transition-colors duration-300 font-body" aria-label="Blog">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-dark-text tracking-wider uppercase font-heading">Contact</h3>
            <ul className="mt-4 space-y-2 text-base font-body text-neutral-gray">
              <li>1346 Old Bridge Road, Suite 101</li>
              <li>Woodbridge, VA 22192</li>
              <li className="pt-2">Phone: 571-543-4880</li>
              <li>Fax: 877-353-0126</li>
              <li className="pt-2">info@barratbhandconsulting.com</li>
              <li className="pt-2">Hours: Mon–Fri by appointment</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-dark-text tracking-wider uppercase font-heading">Get Help</h3>
            <div className="mt-4">
              <Link to="/contact" className="inline-block bg-primary-blue text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-blue/90 transition-all duration-300 hover:scale-105 font-heading" aria-label="Book an appointment">
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-gray/30 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-base text-neutral-gray font-body">&copy; {new Date().getFullYear()} Barrat Behavioral Health and Primary Care. All rights reserved.</p>
          <p className="text-sm text-neutral-gray/70 mt-4 sm:mt-0 font-body">Built with Adsit Digital</p>
        </div>
      </div>
    </footer>
  );
}