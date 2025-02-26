import React from 'react';
import './TotalRevenue.css';

const TotalRevenue = ({ style = {} }) => {
  // Default data for the chart
  const defaultData = [
    { day: 'Monday', online: 12, offline: 13 },
    { day: 'Tuesday', online: 15, offline: 12 },
    { day: 'Wednesday', online: 22, offline: 8 },
    { day: 'Thursday', online: 14, offline: 10 },
    { day: 'Friday', online: 12, offline: 12 },
    { day: 'Saturday', online: 15, offline: 13 },
    { day: 'Sunday', online: 18, offline: 12 }
  ];

  return (
    <div className="total-revenue" style={{ ...style }}>
      <div className="revenue-header">
        <h2>Total Revenue</h2>
      </div>
      
      <div className="chart-container">
        <div className="y-axis">
          {[25, 20, 15, 10, 5, 0].map((value, index) => (
            <div key={index} className="y-axis-label">
              <span>{value}k</span>
              <div className="grid-line"></div>
            </div>
          ))}
        </div>

        <div className="bars-container">
          {defaultData.map((item, index) => (
            <div key={index} className="bar-group">
              <div className="bars">
                <div 
                  className="bar online" 
                  style={{ height: `${(item.online/25) * 134}px` }}
                  title={`Online: ${item.online}k`}
                ></div>
                <div 
                  className="bar offline" 
                  style={{ height: `${(item.offline/25) * 134}px` }}
                  title={`Offline: ${item.offline}k`}
                ></div>
              </div>
              <div className="x-axis-label">{item.day}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="legend">
        <div className="legend-item">
          <div className="legend-color online"></div>
          <span>Online Sales</span>
        </div>
        <div className="legend-item">
          <div className="legend-color offline"></div>
          <span>Offline Sales</span>
        </div>
      </div>
    </div>
  );
};

// Default props
TotalRevenue.defaultProps = {
  style: {
    flexGrow: 1,
    minWidth: '645px',
    height: 'auto'
  }
};

export default TotalRevenue;
