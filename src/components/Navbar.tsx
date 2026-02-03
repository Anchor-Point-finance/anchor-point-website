import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { label: 'Home', href: '#home', isExternal: false },
    { label: 'Services', href: '#services', isExternal: false },
    { label: 'About', href: '#about', isExternal: false },
    { label: 'Contact', href: '#contact', isExternal: false },
    { label: 'Calculators', href: '/calculators', isExternal: true },
  ];

  const handleNavClick = (href: string, isExternal?: boolean) => {
    if (isExternal) {
      // Router will handle this via Link
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
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
              <motion.button
                key={link.href}
                className="navbar__link"
                onClick={() => handleNavClick(link.href, link.isExternal)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.label}
              </motion.button>
            )
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="navbar__cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#contact');
          }}
        >
         Book Appointment
        </motion.a>

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
                <motion.button
                  key={link.href}
                  className="navbar__mobile-link"
                  onClick={() => handleNavClick(link.href, link.isExternal)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.button>
              )
            ))}
            <motion.a
              href="#contact"
              className="navbar__mobile-cta"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
            >
              Book Appointment
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
