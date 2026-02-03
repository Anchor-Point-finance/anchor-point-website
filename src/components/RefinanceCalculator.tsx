import React, { useState, useMemo } from 'react';

interface RefinanceCalculatorProps {
  onResultsChange?: (results: RefinanceResults) => void;
}

export interface RefinanceResults {
  newMonthlyPayment: number;
  currentMonthlyPayment: number;
  monthlySavings: number;
  totalSavings: number;
  breakEvenMonths: number;
}

const RefinanceCalculator: React.FC<RefinanceCalculatorProps> = ({ onResultsChange }) => {
  const [currentBalance, setCurrentBalance] = useState(300000);
  const [currentRate, setCurrentRate] = useState(6.5);
  const [remainingYears, setRemainingYears] = useState(25);
  const [newRate, setNewRate] = useState(5.5);
  const [refinancingCost, setRefinancingCost] = useState(5000);

  const results = useMemo(() => {
    const calculateMonthlyPayment = (principal: number, rate: number, years: number) => {
      const monthlyRate = rate / 100 / 12;
      const numberOfPayments = years * 12;

      if (monthlyRate === 0) {
        return principal / numberOfPayments;
      }

      return (
        (principal *
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      );
    };

    const currentMonthlyPayment = calculateMonthlyPayment(
      currentBalance,
      currentRate,
      remainingYears
    );
    const newMonthlyPayment = calculateMonthlyPayment(
      currentBalance,
      newRate,
      remainingYears
    );

    const monthlySavings = currentMonthlyPayment - newMonthlyPayment;
    const totalSavings = monthlySavings * remainingYears * 12 - refinancingCost;
    const breakEvenMonths =
      monthlySavings > 0
        ? Math.ceil(refinancingCost / monthlySavings)
        : remainingYears * 12;

    return {
      currentMonthlyPayment,
      newMonthlyPayment,
      monthlySavings,
      totalSavings,
      breakEvenMonths: Math.min(breakEvenMonths, remainingYears * 12),
    };
  }, [currentBalance, currentRate, remainingYears, newRate, refinancingCost]);

  React.useEffect(() => {
    onResultsChange?.(results);
  }, [results, onResultsChange]);

  const handleReset = () => {
    setCurrentBalance(300000);
    setCurrentRate(6.5);
    setRemainingYears(25);
    setNewRate(5.5);
    setRefinancingCost(5000);
  };

  const isBeneficial = results.totalSavings > 0;

  return (
    <div>
      <div className="calculator__form-group">
        <label className="calculator__label">
          Current Loan Balance
          <span className="calculator__label-hint"> (Remaining)</span>
        </label>
        <div className="calculator__input-wrapper">
          <div className="calculator__input-group">
            <span className="calculator__currency">$</span>
            <input
              type="number"
              value={currentBalance}
              onChange={(e) => setCurrentBalance(Math.max(0, Number(e.target.value)))}
              min="0"
              step="10000"
              className="calculator__input"
              aria-label="Current loan balance"
            />
          </div>
        </div>
      </div>

      <div className="calculator__form-group">
        <label className="calculator__label">
          Current Interest Rate
          <span className="calculator__label-hint"> (APR)</span>
        </label>
        <div className="calculator__input-wrapper">
          <input
            type="number"
            value={currentRate}
            onChange={(e) => setCurrentRate(Math.max(0, Number(e.target.value)))}
            min="0"
            max="20"
            step="0.1"
            className="calculator__input"
            aria-label="Current interest rate"
          />
          <span className="calculator__unit">%</span>
        </div>
      </div>

      <div className="calculator__form-group">
        <label className="calculator__label">
          Remaining Loan Term
          <span className="calculator__label-hint"> (Years)</span>
        </label>
        <div className="calculator__input-wrapper">
          <input
            type="number"
            value={remainingYears}
            onChange={(e) => setRemainingYears(Math.max(1, Number(e.target.value)))}
            min="1"
            max="50"
            step="1"
            className="calculator__input"
            aria-label="Remaining loan term"
          />
          <span className="calculator__unit">years</span>
        </div>
      </div>

      <div className="calculator__form-group">
        <label className="calculator__label">
          New Interest Rate
          <span className="calculator__label-hint"> (After Refinance)</span>
        </label>
        <div className="calculator__input-wrapper">
          <input
            type="number"
            value={newRate}
            onChange={(e) => setNewRate(Math.max(0, Number(e.target.value)))}
            min="0"
            max="20"
            step="0.1"
            className="calculator__input"
            aria-label="New interest rate"
          />
          <span className="calculator__unit">%</span>
        </div>
      </div>

      <div className="calculator__form-group">
        <label className="calculator__label">
          Refinancing Costs
          <span className="calculator__label-hint"> (Closing costs)</span>
        </label>
        <div className="calculator__input-wrapper">
          <div className="calculator__input-group">
            <span className="calculator__currency">$</span>
            <input
              type="number"
              value={refinancingCost}
              onChange={(e) => setRefinancingCost(Math.max(0, Number(e.target.value)))}
              min="0"
              step="500"
              className="calculator__input"
              aria-label="Refinancing costs"
            />
          </div>
        </div>
      </div>

      <div className="calculator__results">
        <div className="calculator__results-title">
          Refinancing{' '}
          {isBeneficial ? (
            <span style={{ color: 'var(--color-success)' }}>✓ Recommended</span>
          ) : (
            <span style={{ color: 'var(--color-warning)' }}>✗ Not Beneficial</span>
          )}
        </div>
        <div className="calculator__results-grid">
          <div className="calculator__result-item">
            <div className="calculator__result-label">Current Monthly</div>
            <div className="calculator__result-value">
              ${results.currentMonthlyPayment.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>
          <div className="calculator__result-item">
            <div className="calculator__result-label">New Monthly</div>
            <div className="calculator__result-value">
              ${results.newMonthlyPayment.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>
          <div className="calculator__result-item">
            <div className="calculator__result-label">Monthly Savings</div>
            <div
              className="calculator__result-value"
              style={{
                color:
                  results.monthlySavings >= 0
                    ? 'var(--color-success)'
                    : 'var(--color-error)',
              }}
            >
              ${results.monthlySavings.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </div>
          <div className="calculator__result-item">
            <div className="calculator__result-label">Total Savings</div>
            <div
              className="calculator__result-value"
              style={{
                color:
                  results.totalSavings >= 0
                    ? 'var(--color-success)'
                    : 'var(--color-error)',
              }}
            >
              ${results.totalSavings.toLocaleString('en-US', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </div>
          </div>
          <div className="calculator__result-item">
            <div className="calculator__result-label">Break-Even</div>
            <div className="calculator__result-value">
              {results.breakEvenMonths} months
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

export default RefinanceCalculator;
