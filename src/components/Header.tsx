import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/50 backdrop-blur-sm' : ''
  }`;

  const linkClass = "text-white hover:text-indigo-200 transition-colors";

  return (
      <header className={headerClass}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-0.1">
              <img
                  src="src/resc/Logo/NISP%20Logo.png"
                  alt="NISP Logo"
                  className="h-16 w-auto object-contain"
              />
              <span className="text-2xl font-bold text-white">NISP SPIT</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className={linkClass}>Home</Link>
              <Link to="/events" className={linkClass}>Events</Link>
              <Link to="/reports" className={linkClass}>Reports</Link>
              <Link to="/contact" className={linkClass}>Contact</Link>
            </nav>

            <button
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
              <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="md:hidden bg-black/50 backdrop-blur-sm"
              >
                <nav className="flex flex-col space-y-4 p-4">
                  <Link to="/" className={linkClass} onClick={() => setIsMenuOpen(false)}>Home</Link>
                  <Link to="/events" className={linkClass} onClick={() => setIsMenuOpen(false)}>Events</Link>
                  <Link to="/reports" className={linkClass} onClick={() => setIsMenuOpen(false)}>Reports</Link>
                  <Link to="/contact" className={linkClass} onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </nav>
              </motion.div>
          )}
        </AnimatePresence>
      </header>
  );
}