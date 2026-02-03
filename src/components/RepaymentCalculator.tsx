import React, { useState, useMemo } from 'react';

interface RepaymentCalculatorProps {
  onResultsChange?: (results: RepaymentResults) => void;
}

export interface RepaymentResults {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
}

const RepaymentCalculator: React.FC<RepaymentCalculatorProps> = ({ onResultsChange }) => {
  const [principal, setPrincipal] = useState(300000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const results = useMemo(() => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;

    if (monthlyRate === 0) {
      const monthlyPayment = principal / numberOfPayments;
      return {
        monthlyPayment,
        totalPayment: monthlyPayment * numberOfPayments,
        totalInterest: 0,
      };
    }

    const monthlyPayment =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    return {
      monthlyPayment,
      totalPayment,
      totalInterest,
    };
  }, [principal, rate, years]);

  React.useEffect(() => {
    onResultsChange?.(results);
  }, [results, onResultsChange]);

  const handleReset = () => {
    setPrincipal(300000);
    setRate(6.5);
    setYears(30);
  };

  return (
    <div>
      <div className="calculator__form-group">
        <label className="calculator__label">
          Loan Amount
          <span className="calculator__label-hint"> (Principal)</span>
        </label>
        <div className="calculator__input-wrapper">
          <div className="calculator__input-group">
            <span className="calculator__currency">$</span>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(Math.max(0, Number(e.target.value)))}
              min="0"
              step="10000"
              className="calculator__input"
              aria-label="Loan amount"
            />
          </div>
        </div>
        <div className="calculator__slider-wrapper">
          <input
            type="range"
            min="10000"
            max="1000000"
            step="10000"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="calculator__slider"
            aria-label="Loan amount slider"
          />
        </div>
      </div>

      <div className="calculator__form-group">
        <label className="calculator__label">
          Annual Interest Rate
          <span className="calculator__label-hint"> (APR)</span>
        </label>
        <div className="calculator__input-wrapper">
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Math.max(0, Number(e.target.value)))}
            min="0"
            max="20"
            step="0.1"
            className="calculator__input"
            aria-label="Interest rate percentage"
          />
          <span className="calculator__unit">%</span>
        </div>
        <div className="calculator__slider-wrapper">
          <input
            type="range"
            min="0"
            max="20"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="calculator__slider"
            aria-label="Interest rate slider"
          />
        </div>
      </div>

      <div className="calculator__form-group">
        <label className="calculator__label">
          Loan Term
          <span className="calculator__label-hint"> (Years)</span>
        </label>
        <div className="calculator__input-wrapper">
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Math.max(1, Number(e.target.value)))}
            min="1"
            max="50"
            step="1"
            className="calculator__input"
            aria-label="Loan term in years"
          />
          <span className="calculator__unit">years</span>
        </div>
        <div className="calculator__slider-wrapper">
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="calculator__slider"
            aria-label="Loan term slider"
          />
        </div>
      </div>

      <div className="calculator__results">
        <div className="calculator__results-title">Your Results</div>
        <div className="calculator__results-grid">
          <div className="calculator__result-item">
            <div className="calculator__result-label">Monthly Payment</div>
            <div className="calculator__result-value">
              ${results.monthlyPayment.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>
          <div className="calculator__result-item">
            <div className="calculator__result-label">Total Interest</div>
            <div className="calculator__result-value">
              ${results.totalInterest.toLocaleString('en-US', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </div>
          </div>
          <div className="calculator__result-item">
            <div className="calculator__result-label">Total Amount Paid</div>
            <div className="calculator__result-value">
              ${results.totalPayment.toLocaleString('en-US', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </div>
          </div>
        </div>
      </div>

      <button className="calculator__button" onClick={handleReset}>
        Reset Calculator
      </button>
    </div>
  );
};

export default RepaymentCalculator;
