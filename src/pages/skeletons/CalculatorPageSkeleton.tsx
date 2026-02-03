import React from 'react';
import Skeleton from '../../components/Common/Skeleton';
import './CalculatorPageSkeleton.css';

const CalculatorPageSkeleton: React.FC = () => {
  return (
    <div className="calculator-page-skeleton">
      {/* Navbar Skeleton */}
      <div className="calculator-page-skeleton__navbar">
        <Skeleton width="120px" height="24px" borderRadius="4px" />
        <div className="calculator-page-skeleton__nav-links">
          <Skeleton width="60px" height="16px" borderRadius="4px" />
          <Skeleton width="70px" height="16px" borderRadius="4px" />
          <Skeleton width="60px" height="16px" borderRadius="4px" />
          <Skeleton width="80px" height="16px" borderRadius="4px" />
          <Skeleton width="90px" height="16px" borderRadius="4px" />
        </div>
        <Skeleton width="140px" height="36px" borderRadius="4px" />
      </div>

      {/* Hero Skeleton */}
      <div className="calculator-page-skeleton__hero">
        <Skeleton width="50%" height="56px" borderRadius="8px" />
        <Skeleton width="70%" height="24px" borderRadius="4px" />
      </div>

      {/* Calculator Section Skeleton */}
      <div className="calculator-page-skeleton__section">
        <div className="calculator-page-skeleton__cards">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} width="100%" height="140px" borderRadius="8px" />
          ))}
        </div>

        {/* Calculator Form Skeleton */}
        <div className="calculator-page-skeleton__form">
          <Skeleton width="100%" height="60px" borderRadius="8px" />
          <Skeleton width="100%" height="60px" borderRadius="8px" />
          <Skeleton width="100%" height="60px" borderRadius="8px" />
          <Skeleton width="100%" height="44px" borderRadius="4px" />
        </div>

        {/* Results Skeleton */}
        <div className="calculator-page-skeleton__results">
          <Skeleton width="40%" height="24px" borderRadius="4px" />
          <div className="calculator-page-skeleton__result-items">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} width="100%" height="80px" borderRadius="8px" />
            ))}
          </div>
        </div>
      </div>

      {/* Info Section Skeleton */}
      <div className="calculator-page-skeleton__info-section">
        <div className="calculator-page-skeleton__info-cards">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="calculator-page-skeleton__info-card">
              <Skeleton width="80px" height="80px" borderRadius="8px" />
              <Skeleton width="100%" height="24px" borderRadius="4px" />
              <Skeleton width="100%" height="60px" borderRadius="4px" />
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section Skeleton */}
      <div className="calculator-page-skeleton__faq-section">
        <Skeleton width="30%" height="40px" borderRadius="8px" />
        <div className="calculator-page-skeleton__faq-items">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} width="100%" height="60px" borderRadius="8px" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalculatorPageSkeleton;
