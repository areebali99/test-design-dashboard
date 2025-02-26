"use client"
import React from 'react';
import './TargetVsReality.css';

const TargetVsReality = ({ style }) => {
  const chartData = [
    { month: 'Jan', reality: 65, target: 75 },
    { month: 'Feb', reality: 45, target: 55 },
    { month: 'Mar', reality: 85, target: 95 },
    { month: 'Apr', reality: 55, target: 65 },
    { month: 'May', reality: 75, target: 85 },
    { month: 'June', reality: 60, target: 70 },
    { month: 'July', reality: 70, target: 80 }
  ];

  return (
    <div className="sales-card">
    <h2 className="card-title">Target vs Reality</h2>
    
    <div className="bar-chart">
      {chartData.map((data, index) => (
        <div key={index} className="bar-group">
          <div className="bars">
            <div 
              className="bar reality" 
              style={{ height: `${data.reality}%` }}
            />
            <div 
              className="bar target" 
              style={{ height: `${data.target}%` }}
            />
          </div>
          <span className="month-label">{data.month}</span>
        </div>
      ))}
    </div>

    <div className="sales-details">
      <div className="sales-row">
        <div className="sales-info">
          <img src="/realitySales.png" alt="Reality" className="avatar" />
          <div className="sales-text">
            <h3>Reality Sales</h3>
            <p>Global</p>
          </div>
        </div>
        <span className="sales-value reality">8.823</span>
      </div>

      <div className="sales-row">
        <div className="sales-info">
          <img src="/targetSales.png" alt="Target" className="avatar" />
          <div className="sales-text">
            <h3>Target Sales</h3>
            <p>Commercial</p>
          </div>
        </div>
        <span className="sales-value target">12.122</span>
      </div>
    </div>
  </div>
  );
};

TargetVsReality.defaultProps = {
  style: {
    minWidth: '371px',
    height: '351px',
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
  }
};

export default TargetVsReality;
