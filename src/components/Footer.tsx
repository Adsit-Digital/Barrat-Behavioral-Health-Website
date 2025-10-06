import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2" aria-label="Barrat Behavioral Health and Primary Care Home">
              <img src="https://media.barratbhandconsulting.com/Barratbhand-consulting%20main-logo.png" alt="Barrat Behavioral Health Logo" className="h-12 w-auto" />
              <span className="font-bold text-xl text-white">Barrat Behavioral Health</span>
            </Link>
            <p className="text-sm">Supporting teens and adults to thrive at every stage.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-base text-gray-300 hover:text-white" aria-label="About">About Us</Link></li>
              <li><Link to="/services" className="text-base text-gray-300 hover:text-white" aria-label="Services">Services</Link></li>
              <li><Link to="/blog" className="text-base text-gray-300 hover:text-white" aria-label="Blog">Blog</Link></li>
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
              <a href="https://care.headway.co/providers/kadija-conteh-barrat?utm_source=website&utm_medium=direct_link" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-orange text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-orange-dark transition-colors" aria-label="Book an appointment">
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Barrat Behavioral Health and Primary Care. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-4 sm:mt-0">Built with ���️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}