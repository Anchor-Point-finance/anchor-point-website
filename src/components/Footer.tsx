import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections: FooterSection[] = [
    {
      title: 'Products',
      links: [
        { label: 'Property Insurance', href: '#' },
        { label: 'Auto Insurance', href: '#' },
        { label: 'Health Insurance', href: '#' },
        { label: 'Life Insurance', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Careers', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'FAQs', href: '#' },
        { label: 'Insurance Guides', href: '#' },
        { label: 'Claims', href: '#' },
        { label: 'Support', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Accessibility', href: '#' },
        { label: 'Sitemap', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: 'f', label: 'Facebook' },
    { icon: 'in', label: 'LinkedIn' },
    { icon: 't', label: 'Twitter' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__container">
          {/* Brand Section */}
          <motion.div
            className="footer__section footer__brand"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="footer__logo">
              <span className="footer__logo-icon">⚓</span>
              <span className="footer__logo-text">Anchor Point</span>
            </div>
            <p className="footer__description">
              Your trusted partner in insurance and brokerage. Protecting what matters most.
            </p>
            <div className="footer__social">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="footer__social-link"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <motion.div
            className="footer__links-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {footerSections.map((section, sectionIdx) => (
              <motion.div
                key={sectionIdx}
                className="footer__section"
                variants={itemVariants}
              >
                <h4 className="footer__section-title">{section.title}</h4>
                <ul className="footer__links">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <motion.a
                        href={link.href}
                        className="footer__link"
                        whileHover={{ x: 4 }}
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="footer__bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="footer__container">
          <p className="footer__copyright">
            © {currentYear} Anchor Point Insurance & Brokerage. All rights reserved.
          </p>
          <div className="footer__badges">
            <span className="footer__badge">🛡️ Licensed & Insured</span>
            <span className="footer__badge">✓ WCAG AA Compliant</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
