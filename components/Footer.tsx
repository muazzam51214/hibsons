import Link from 'next/link';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Hibsons
              </span>
              <span className="ml-2 text-xs font-medium bg-indigo-900 text-indigo-200 px-2 py-1 rounded-full">
                Digital Staffing
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming how marketing agencies scale with premium virtual talent.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/social-media-va" className="text-gray-400 hover:text-white transition-colors">
                  Social Media VAs
                </Link>
              </li>
              <li>
                <Link href="/services/ppc-va" className="text-gray-400 hover:text-white transition-colors">
                  PPC Management VAs
                </Link>
              </li>
              <li>
                <Link href="/services/content-va" className="text-gray-400 hover:text-white transition-colors">
                  Content Creation VAs
                </Link>
              </li>
              <li>
                <Link href="/services/seo-va" className="text-gray-400 hover:text-white transition-colors">
                  SEO Specialist VAs
                </Link>
              </li>
              <li>
                <Link href="/services/all-services" className="text-gray-400 hover:text-white transition-colors">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="w-5 h-5 text-indigo-400 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Business Ave, Suite 500<br />San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <FiMail className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                <a href="mailto:hello@hibsons.com" className="text-gray-400 hover:text-white transition-colors">
                  hello@hibsons.com
                </a>
              </li>
              <li className="flex items-center">
                <FiPhone className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Hibsons Digital Staffing. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;