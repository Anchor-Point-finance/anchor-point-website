import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RepaymentCalculator from './RepaymentCalculator';
import RefinanceCalculator from './RefinanceCalculator';
import AmortizationCalculator from './AmortizationCalculator';
import './Calculator.css';

type CalculatorType = 'repayment' | 'refinance' | 'amortization';

interface CalculatorOption {
  id: CalculatorType;
  label: string;
  icon: string;
  description: string;
}

const Calculator: React.FC = () => {
  const [selectedCalculator, setSelectedCalculator] = useState<CalculatorType>(
    'repayment'
  );

  const calculators: CalculatorOption[] = [
    {
      id: 'repayment',
      label: 'Repayment Calculator',
      icon: '💰',
      description: 'Calculate monthly loan payments',
    },
    {
      id: 'refinance',
      label: 'Refinance Calculator',
      icon: '🔄',
      description: 'Evaluate refinancing benefits',
    },
    {
      id: 'amortization',
      label: 'Amortization Calculator',
      icon: '📊',
      description: 'View detailed payment schedule',
    },
  ];

  const renderCalculator = () => {
    switch (selectedCalculator) {
      case 'repayment':
        return <RepaymentCalculator />;
      case 'refinance':
        return <RefinanceCalculator />;
      case 'amortization':
        return <AmortizationCalculator />;
      default:
        return <RepaymentCalculator />;
    }
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
    <section id="calculator" className="calculator">
      <div className="calculator__container">
        <motion.div
          className="calculator__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="calculator__title">Financial Calculators</h2>
          <p className="calculator__subtitle">
            Use our powerful tools to calculate loan payments, evaluate refinancing options,
            and view detailed amortization schedules
          </p>
        </motion.div>

        {/* Calculator Selector Cards */}
        <motion.div
          className="calculator__cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {calculators.map((calc) => (
            <motion.button
              key={calc.id}
              className={`calculator__card ${
                selectedCalculator === calc.id ? 'calculator__card--active' : ''
              }`}
              variants={itemVariants}
              onClick={() => setSelectedCalculator(calc.id)}
              whileHover={{ y: -4 }}
              whileTap={{ y: 0 }}
              aria-pressed={selectedCalculator === calc.id}
              aria-label={`Select ${calc.label}`}
            >
              <div className="calculator__card-icon">{calc.icon}</div>
              <div className="calculator__card-title">{calc.label}</div>
            </motion.button>
          ))}
        </motion.div>

        {/* Calculator Content */}
        <div className="calculator__content">
          {/* Selector Label (Mobile) */}
          <motion.div
            className="calculator__selector"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <label htmlFor="calculator-select" className="calculator__selector-label">
              Quick Select:
            </label>
            <select
              id="calculator-select"
              value={selectedCalculator}
              onChange={(e) => setSelectedCalculator(e.target.value as CalculatorType)}
              className="calculator__selector-dropdown"
              aria-label="Select calculator type"
            >
              {calculators.map((calc) => (
                <option key={calc.id} value={calc.id}>
                  {calc.label}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Calculator Form */}
          <motion.div
            className="calculator__form"
            key={selectedCalculator}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {renderCalculator()}
          </motion.div>
        </div>

        {/* Info Section */}
        <motion.div
          style={{
            marginTop: 'var(--spacing-4xl)',
            padding: 'var(--spacing-2xl)',
            background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.05), rgba(27, 158, 157, 0.05))',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(0, 102, 204, 0.2)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 style={{ marginBottom: 'var(--spacing-lg)' }}>💡 How to Use:</h3>
          <ul style={{ lineHeight: 'var(--line-height-relaxed)', color: 'var(--color-neutral-dark)' }}>
            <li>
              <strong>Repayment Calculator:</strong> Enter your loan amount, interest rate, and term
              to see your monthly payment and total cost.
            </li>
            <li>
              <strong>Refinance Calculator:</strong> Compare your current loan terms with potential
              refinance rates to see potential savings.
            </li>
            <li>
              <strong>Amortization Calculator:</strong> View a detailed year-by-year breakdown of
              your loan payments.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Calculator;
