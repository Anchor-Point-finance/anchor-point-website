import React from 'react';
import Skeleton from '../../components/Common/Skeleton';
import './PageSkeleton.css';

const PageSkeleton: React.FC = () => {
  return (
    <div className="page-skeleton">
      {/* Navbar Skeleton */}
      <div className="page-skeleton__navbar">
        <Skeleton width="120px" height="24px" borderRadius="4px" />
        <div className="page-skeleton__nav-links">
          <Skeleton width="60px" height="16px" borderRadius="4px" />
          <Skeleton width="70px" height="16px" borderRadius="4px" />
          <Skeleton width="60px" height="16px" borderRadius="4px" />
          <Skeleton width="80px" height="16px" borderRadius="4px" />
        </div>
        <Skeleton width="140px" height="36px" borderRadius="4px" />
      </div>

      {/* Hero Skeleton */}
      <div className="page-skeleton__section">
        <Skeleton width="60%" height="64px" borderRadius="8px" />
        <Skeleton width="80%" height="24px" borderRadius="4px" />
        <div className="page-skeleton__button-group">
          <Skeleton width="140px" height="44px" borderRadius="4px" />
          <Skeleton width="140px" height="44px" borderRadius="4px" />
        </div>
      </div>

      {/* Services Skeleton */}
      <div className="page-skeleton__section">
        <Skeleton width="40%" height="48px" borderRadius="8px" />
        <Skeleton width="70%" height="20px" borderRadius="4px" />
        <div className="page-skeleton__cards">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="page-skeleton__card">
              <Skeleton width="100%" height="200px" borderRadius="8px" />
            </div>
          ))}
        </div>
      </div>

      {/* About Skeleton */}
      <div className="page-skeleton__section">
        <Skeleton width="40%" height="48px" borderRadius="8px" />
        <Skeleton width="100%" height="100px" borderRadius="8px" />
        <div className="page-skeleton__stats">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton key={i} width="100%" height="120px" borderRadius="8px" />
          ))}
        </div>
      </div>

      {/* Contact Skeleton */}
      <div className="page-skeleton__section">
        <Skeleton width="40%" height="48px" borderRadius="8px" />
        <Skeleton width="100%" height="300px" borderRadius="8px" />
      </div>
    </div>
  );
};

export default PageSkeleton;
