import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: '🏠',
      title: 'Property Insurance',
      description:
        'Comprehensive coverage for your home and personal belongings with flexible plans.',
    },
    {
      icon: '🚗',
      title: 'Auto Insurance',
      description:
        'Protect yourself on the road with our reliable and affordable auto coverage options.',
    },
    {
      icon: '❤️',
      title: 'Health Insurance',
      description:
        'Ensuring your wellbeing with comprehensive health plans tailored to your needs.',
    },
    {
      icon: '🏢',
      title: 'Business Insurance',
      description:
        'Safeguard your business with our professional liability and coverage solutions.',
    },
    {
      icon: '✈️',
      title: 'Travel Insurance',
      description:
        'Peace of mind for your journeys with comprehensive travel protection plans.',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Life Insurance',
      description:
        'Secure your family\'s future with our flexible and affordable life insurance options.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="services">
      <div className="services__container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="services__title">Our Services</h2>
          <p className="services__subtitle">
            Comprehensive insurance solutions designed to protect what matters most to you
          </p>
        </motion.div>

        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="services__card"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(0, 102, 204, 0.15)',
              }}
            >
              <div className="services__icon">{service.icon}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-description">{service.description}</p>
              <motion.button
                className="services__card-link"
                whileHover={{ x: 4 }}
                whileTap={{ x: 0 }}
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
