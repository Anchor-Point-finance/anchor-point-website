import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h1 className="hero__title" variants={itemVariants}>
            Your Trusted Partner in
            <br />
            <span className="hero__highlight">Insurance & Brokerage</span>
          </motion.h1>

          <motion.p className="hero__subtitle" variants={itemVariants}>
            Protecting what matters most with expert guidance and comprehensive
            coverage solutions tailored to your unique needs.
          </motion.p>

          <motion.div className="hero__buttons" variants={itemVariants}>
            <motion.button
              className="hero__btn hero__btn--primary"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 102, 204, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started
            </motion.button>

            <motion.button
              className="hero__btn hero__btn--secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#services');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated Illustration Area */}
        <motion.div
          className="hero__illustration"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="hero__goo"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg
              viewBox="0 0 200 200"
              className="hero__goo-svg"
              aria-label="Decorative animated shape"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="coloredBlur" />
                  <feColorMatrix
                    in="coloredBlur"
                    type="saturate"
                    values="1.2"
                  />
                </filter>
              </defs>
              <circle
                cx="100"
                cy="100"
                r="60"
                fill="url(#gradient)"
                filter="url(#goo)"
              />
              <circle
                cx="140"
                cy="80"
                r="40"
                fill="url(#gradient)"
                filter="url(#goo)"
              />
              <circle
                cx="70"
                cy="120"
                r="35"
                fill="url(#gradient)"
                filter="url(#goo)"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#0066cc" />
                  <stop offset="100%" stopColor="#1b9e9d" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero__scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="hero__scroll-dot"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
