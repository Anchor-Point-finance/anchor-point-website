import React, { useState, useMemo } from 'react';

interface AmortizationScheduleItem {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

interface AmortizationCalculatorProps {
  onResultsChange?: (results: AmortizationResults) => void;
}

export interface AmortizationResults {
  monthlyPayment: number;
  totalInterest: number;
  schedule: AmortizationScheduleItem[];
}

const AmortizationCalculator: React.FC<AmortizationCalculatorProps> = ({
  onResultsChange,
}) => {
  const [principal, setPrincipal] = useState(300000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);
  const [showSchedule, setShowSchedule] = useState(false);

  const results = useMemo(() => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;

    let monthlyPayment = 0;

    if (monthlyRate === 0) {
      monthlyPayment = principal / numberOfPayments;
    } else {
      monthlyPayment =
        (principal *
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    // Generate amortization schedule
    const schedule: AmortizationScheduleItem[] = [];
    let balance = principal;
    let totalInterest = 0;

    for (let i = 1; i <= numberOfPayments; i++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      balance -= principalPayment;
      totalInterest += interestPayment;

      // Only store annual entries to keep array manageable
      if (i % 12 === 0 || i === numberOfPayments) {
        schedule.push({
          month: i,
          payment: monthlyPayment,
          principal: principalPayment,
          interest: interestPayment,
          balance: Math.max(0, balance),
        });
      }
    }

    return {
      monthlyPayment,
      totalInterest,
      schedule,
    };
  }, [principal, rate, years]);

  React.useEffect(() => {
    onResultsChange?.(results);
  }, [results, onResultsChange]);

  const handleReset = () => {
    setPrincipal(300000);
    setRate(6.5);
    setYears(30);
    setShowSchedule(false);
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
        <div className="calculator__results-title">Amortization Summary</div>
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
            <div className="calculator__result-label">Total Payments</div>
            <div className="calculator__result-value">
              ${(results.monthlyPayment * years * 12).toLocaleString('en-US', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </div>
          </div>
        </div>
      </div>

      <button
        className="calculator__button"
        onClick={() => setShowSchedule(!showSchedule)}
      >
        {showSchedule ? 'Hide' : 'Show'} Amortization Schedule
      </button>

      {showSchedule && (
        <div style={{ marginTop: 'var(--spacing-xl)' }}>
          <div
            style={{
              overflowX: 'auto',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: 'var(--font-size-sm)',
              }}
            >
              <thead>
                <tr
                  style={{
                    background: 'linear-gradient(135deg, var(--color-primary-main) 0%, var(--color-secondary-main) 100%)',
                    color: 'var(--color-neutral-white)',
                  }}
                >
                  <th style={{ padding: 'var(--spacing-md)', textAlign: 'left' }}>
                    Year
                  </th>
                  <th style={{ padding: 'var(--spacing-md)', textAlign: 'right' }}>
                    Payment
                  </th>
                  <th style={{ padding: 'var(--spacing-md)', textAlign: 'right' }}>
                    Principal
                  </th>
                  <th style={{ padding: 'var(--spacing-md)', textAlign: 'right' }}>
                    Interest
                  </th>
                  <th style={{ padding: 'var(--spacing-md)', textAlign: 'right' }}>
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.schedule.map((item, index) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: '1px solid var(--color-neutral-lighter)',
                      backgroundColor:
                        index % 2 === 0
                          ? 'var(--color-neutral-white)'
                          : 'var(--color-neutral-light)',
                    }}
                  >
                    <td style={{ padding: 'var(--spacing-md)' }}>
                      Year {Math.ceil(item.month / 12)}
                    </td>
                    <td
                      style={{
                        padding: 'var(--spacing-md)',
                        textAlign: 'right',
                      }}
                    >
                      ${item.payment.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td
                      style={{
                        padding: 'var(--spacing-md)',
                        textAlign: 'right',
                        color: 'var(--color-success)',
                      }}
                    >
                      ${item.principal.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td
                      style={{
                        padding: 'var(--spacing-md)',
                        textAlign: 'right',
                        color: 'var(--color-error)',
                      }}
                    >
                      ${item.interest.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td
                      style={{
                        padding: 'var(--spacing-md)',
                        textAlign: 'right',
                        fontWeight: 'var(--font-weight-semibold)',
                      }}
                    >
                      ${item.balance.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <button className="calculator__button" onClick={handleReset}>
        Reset Calculator
      </button>
    </div>
  );
};

export default AmortizationCalculator;
