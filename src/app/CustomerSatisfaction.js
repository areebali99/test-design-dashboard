import React from 'react';
import './CustomerSatisfaction.css';

const CustomerSatisfaction = ({ style }) => {
  return (
    <div className="customer-satisfaction" style={style}>
      <h2 className="title">Customer Satisfaction</h2>
      
      <div className="chart-container">
        <div className="chart">
          <img src="./customerSatisfaction.png" alt="Customer satisfaction chart" className="chart-image" />
        </div>
        <div className="chart-overlay">
          <img src="/custSatif2.png" alt="Chart overlay" className="overlay-image" />
        </div>
      </div>

      <div className="divider"></div>
      
      <div className="stats-container">
        <div className="stat-item">
          <img src="/lastMonth.png" alt="Last month indicator" className="indicator" />
          <div className="stat-details">
            <span className="stat-label">Last Month</span>
            <span className="stat-value">$3,004</span>
          </div>
        </div>
        
        <div className="separator"></div>
        
        <div className="stat-item">
          <img src="/thisMonth.png" alt="This month indicator" className="indicator" />
          <div className="stat-details">
            <span className="stat-label">This Month</span>
            <span className="stat-value">$4,504</span>
          </div>
        </div>
      </div>
    </div>
  );
};

CustomerSatisfaction.defaultProps = {
  style: {
    minWidth: '420px',
    height: '351px',
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box'
  }
};

export default CustomerSatisfaction;

