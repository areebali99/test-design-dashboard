import React from 'react';
import './TodaysSales.css';

const TodaysSales = () => {
  return (
    <div className="today-sales">
      <div className="header">
        <div className="title-group">
          <h2>Today's Sales</h2>
          <p>Sales Summary</p>
        </div>
        <button className="export-btn">
          <img src="/export.png" alt="Export" />
          <span>Export</span>
        </button>
      </div>
      <div className="metrics-container">
        <div className="metric-card pink">
          <img src="/todaySales.png" alt="Total Sales" className="metric-icon" />
          <h3>$1k</h3>
          <p className="metric-title">Total Sales</p>
          <span className="metric-change">+8% from yesterday</span>
        </div>
        <div className="metric-card yellow">
          <img src="/totalOrders.png" alt="Total Order" className="metric-icon" />
          <h3>300</h3>
          <p className="metric-title">Total Order</p>
          <span className="metric-change">+5% from yesterday</span>
        </div>
        <div className="metric-card green">
          <img src="/productSold.png" alt="Product Sold" className="metric-icon" />
          <h3>5</h3>
          <p className="metric-title">Product Sold</p>
          <span className="metric-change">+1.2% from yesterday</span>
        </div>
        <div className="metric-card purple">
          <img src="/newCust.png" alt="New Customers" className="metric-icon" />
          <h3>8</h3>
          <p className="metric-title">New Customers</p>
          <span className="metric-change">0.5% from yesterday</span>
        </div>
      </div>
    </div>
  );
};

export default TodaysSales;
