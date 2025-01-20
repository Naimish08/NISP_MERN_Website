import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">NISP SPIT</h3>
            <p className="text-sm">
              Promoting innovation and entrepreneurship at Sardar Patel Institute of Technology
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block hover:text-white transition-colors">Home</Link>
              <Link to="/events" className="block hover:text-white transition-colors">Events</Link>
              <Link to="/reports" className="block hover:text-white transition-colors">Reports</Link>
              <Link to="/contact" className="block hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>Bhavan's Campus, Munshi Nagar</p>
              <p>Andheri (West), Mumbai 400 058</p>
              <p>Email: nisp@spit.ac.in</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} NISP SPIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}