import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
  anchor?: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll to section after navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && location.pathname === '/') {
      const anchorId = hash.replace('#', '');
      const element = document.getElementById(anchorId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const navLinks: NavLink[] = [
    { label: 'Home', href: '/', isExternal: false, anchor: 'home' },
    { label: 'Services', href: '/', isExternal: false, anchor: 'services' },
    { label: 'About', href: '/', isExternal: false, anchor: 'about' },
    { label: 'Contact', href: '/', isExternal: false, anchor: 'contact' },
    { label: 'Calculators', href: '/calculators', isExternal: true },
  ];

  const handleNavClick = (link: NavLink) => {
    setIsOpen(false);

    if (link.isExternal) {
      return; // Router link will handle this
    }

    const isOnMainPage = location.pathname === '/';

    if (isOnMainPage && link.anchor) {
      // Smooth scroll on main page
      const element = document.getElementById(link.anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrollY > 50 ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar__container">
        {/* Logo */}
        <motion.div
          className="navbar__logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="navbar__logo-icon">⚓</span>
          <span className="navbar__logo-text">Anchor Point</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="navbar__desktop-menu">
          {navLinks.map((link, index) => (
            link.isExternal ? (
              <motion.a
                key={link.href}
                href={link.href}
                className="navbar__link"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.label}
              </motion.a>
            ) : (
              <Link
                key={link.href}
                to={link.anchor ? `/#${link.anchor}` : link.href}
                onClick={() => handleNavClick(link)}
                className="navbar__link"
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.label}
                </motion.span>
              </Link>
            )
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/#contact"
          onClick={() => {
            const contactLink = navLinks.find(l => l.label === 'Contact');
            if (contactLink) {
              handleNavClick(contactLink);
            }
          }}
          className="navbar__cta"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Appointment
          </motion.span>
        </Link>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="navbar__mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          <span className={`hamburger ${isOpen ? 'hamburger--active' : ''}`}>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
          </span>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              link.isExternal ? (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="navbar__mobile-link"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ) : (
                <Link
                  key={link.href}
                  to={link.anchor ? `/#${link.anchor}` : link.href}
                  onClick={() => handleNavClick(link)}
                  className="navbar__mobile-link"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              )
            ))}
            <Link
              to="/#contact"
              onClick={() => {
                const contactLink = navLinks.find(l => l.label === 'Contact');
                if (contactLink) {
                  handleNavClick(contactLink);
                }
              }}
              className="navbar__mobile-cta"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                Book Appointment
              </motion.span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
