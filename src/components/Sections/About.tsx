import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

interface Stat {
  number: string;
  label: string;
}

const About: React.FC = () => {
  const stats: Stat[] = [
    { number: '25+', label: 'Years of Experience' },
    { number: '50K+', label: 'Clients Served' },
    { number: '99%', label: 'Customer Satisfaction' },
    { number: '$2B+', label: 'Claims Processed' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="about">
      <div className="about__container">
        {/* Left Content */}
        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="about__title">About Anchor Point</h2>
          <p className="about__text">
            For over 25 years, Anchor Point has been a beacon of trust and reliability
            in the insurance and brokerage industry. Our mission is simple yet powerful:
            to provide comprehensive, personalized insurance solutions that protect what
            matters most to our clients.
          </p>
          <p className="about__text">
            We understand that every client is unique. That's why our team of expert
            brokers works closely with you to understand your specific needs and craft
            tailored coverage solutions. With our extensive network of insurance partners
            and deep industry knowledge, we ensure you always get the best value and
            protection.
          </p>

          <motion.div
            className="about__values"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div className="about__value" variants={itemVariants}>
              <div className="about__value-icon">✓</div>
              <div>
                <h4 className="about__value-title">Integrity</h4>
                <p className="about__value-text">We act with honesty and transparency in all dealings</p>
              </div>
            </motion.div>

            <motion.div className="about__value" variants={itemVariants}>
              <div className="about__value-icon">✓</div>
              <div>
                <h4 className="about__value-title">Expertise</h4>
                <p className="about__value-text">Our team brings decades of combined experience</p>
              </div>
            </motion.div>

            <motion.div className="about__value" variants={itemVariants}>
              <div className="about__value-icon">✓</div>
              <div>
                <h4 className="about__value-title">Commitment</h4>
                <p className="about__value-text">We're dedicated to your long-term success and security</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Stats */}
        <motion.div
          className="about__stats"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="about__stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="about__stat"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="about__stat-number">{stat.number}</div>
                <div className="about__stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            className="about__decoration"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <svg
              viewBox="0 0 200 200"
              className="about__decoration-svg"
              aria-label="Decorative rotating shape"
            >
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1"
                opacity="0.5"
                strokeDasharray="5,5"
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
    </section>
  );
};

export default About;
