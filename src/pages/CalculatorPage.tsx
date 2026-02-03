import React from 'react';
import { motion } from 'framer-motion';
import Calculator from '../components/Calculator';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CalculatorPage.css';

const CalculatorPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      
      {/* Page Hero */}
      <motion.section
        className="calculator-page__hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="calculator-page__hero-container">
          <motion.h1
            className="calculator-page__hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Financial Calculators
          </motion.h1>
          <motion.p
            className="calculator-page__hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Plan your financial future with our comprehensive suite of tools
          </motion.p>
        </div>
      </motion.section>

      {/* Main Calculator */}
      <Calculator />

      {/* Info Section */}
      <motion.section
        className="calculator-page__info"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="calculator-page__info-container">
          <div className="calculator-page__info-grid">
            <motion.div
              className="calculator-page__info-card"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="calculator-page__info-icon">🎯</div>
              <h3>Accurate Calculations</h3>
              <p>Our calculators use industry-standard formulas to provide accurate financial projections based on your specific situation.</p>
            </motion.div>

            <motion.div
              className="calculator-page__info-card"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="calculator-page__info-icon">⚡</div>
              <h3>Real-Time Results</h3>
              <p>See instant updates as you adjust your inputs. Perfect for exploring different scenarios and comparing options.</p>
            </motion.div>

            <motion.div
              className="calculator-page__info-card"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="calculator-page__info-icon">🔒</div>
              <h3>100% Private</h3>
              <p>Your calculations are performed entirely in your browser. We never store or share any of your personal financial data.</p>
            </motion.div>

            <motion.div
              className="calculator-page__info-card"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="calculator-page__info-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Access our calculators on any device. Fully responsive design works seamlessly on desktop, tablet, and mobile phones.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="calculator-page__faq"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="calculator-page__faq-container">
          <h2 className="calculator-page__faq-title">Frequently Asked Questions</h2>
          
          <div className="calculator-page__faq-grid">
            <motion.div
              className="calculator-page__faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4>What's the difference between the calculators?</h4>
              <p>
                <strong>Repayment Calculator:</strong> Shows your monthly payment and total cost for a new loan.<br/>
                <strong>Refinance Calculator:</strong> Compares your current loan with refinancing options to show potential savings.<br/>
                <strong>Amortization Calculator:</strong> Provides a detailed year-by-year breakdown of how your payments are allocated.
              </p>
            </motion.div>

            <motion.div
              className="calculator-page__faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4>Are these calculations accurate?</h4>
              <p>
                Our calculators use standard industry formulas and are designed to provide accurate estimates. However, actual payments may vary slightly based on loan type, escrow, insurance, and other factors. Always verify with your lender for exact amounts.
              </p>
            </motion.div>

            <motion.div
              className="calculator-page__faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>Is my data stored?</h4>
              <p>
                No. All calculations happen in your browser. We don't collect, store, or transmit any of your personal or financial information. Your privacy is completely protected.
              </p>
            </motion.div>

            <motion.div
              className="calculator-page__faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>Can I get help with my specific situation?</h4>
              <p>
                Absolutely! Our team of experts is ready to discuss your financial goals. Use these calculators to explore options, then contact us for personalized guidance tailored to your needs.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default CalculatorPage;
