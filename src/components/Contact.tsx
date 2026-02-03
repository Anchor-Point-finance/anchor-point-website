import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });

    // Reset the success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

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
    <section id="contact" className="contact">
      <div className="contact__container">
        {/* Header */}
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="contact__title">Get Your Quote Today</h2>
          <p className="contact__subtitle">
            Connect with our experts to find the perfect insurance solution for your needs
          </p>
        </motion.div>

        <div className="contact__content">
          {/* Contact Info */}
          <motion.div
            className="contact__info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div className="contact__info-item" variants={itemVariants}>
              <div className="contact__info-icon">📍</div>
              <div>
                <h4 className="contact__info-title">Address</h4>
                <p className="contact__info-text">123 Insurance Street, Financial District, NY 10001</p>
              </div>
            </motion.div>

            <motion.div className="contact__info-item" variants={itemVariants}>
              <div className="contact__info-icon">📞</div>
              <div>
                <h4 className="contact__info-title">Phone</h4>
                <p className="contact__info-text">1-800-ANCHOR-1 (1-800-226-2671)</p>
              </div>
            </motion.div>

            <motion.div className="contact__info-item" variants={itemVariants}>
              <div className="contact__info-icon">✉️</div>
              <div>
                <h4 className="contact__info-title">Email</h4>
                <p className="contact__info-text">info@anchorpoint.com</p>
              </div>
            </motion.div>

            <motion.div className="contact__info-item" variants={itemVariants}>
              <div className="contact__info-icon">🕐</div>
              <div>
                <h4 className="contact__info-title">Hours</h4>
                <p className="contact__info-text">Mon-Fri: 9AM-6PM | Sat: 10AM-4PM | Sun: Closed</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__label">
                Full Name <span className="contact__required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="John Doe"
                className="contact__input"
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="email" className="contact__label">
                Email Address <span className="contact__required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="john@example.com"
                className="contact__input"
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="phone" className="contact__label">
                Phone Number <span className="contact__required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="(555) 123-4567"
                className="contact__input"
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="service" className="contact__label">
                Service of Interest <span className="contact__required">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                aria-required="true"
                className="contact__input"
              >
                <option value="">Select a service...</option>
                <option value="property">Property Insurance</option>
                <option value="auto">Auto Insurance</option>
                <option value="health">Health Insurance</option>
                <option value="business">Business Insurance</option>
                <option value="travel">Travel Insurance</option>
                <option value="life">Life Insurance</option>
              </select>
            </div>

            <div className="contact__form-group">
              <label htmlFor="message" className="contact__label">
                Message <span className="contact__required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                placeholder="Tell us about your insurance needs..."
                rows={5}
                className="contact__input contact__textarea"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="contact__button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={submitted}
            >
              {submitted ? 'Message Sent! ✓' : 'Get Your Quote'}
            </motion.button>

            {submitted && (
              <motion.p
                className="contact__success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
              >
                Thank you! We'll be in touch shortly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
