import React from 'react';
import './SalesMapping.styles.css';

const SalesMapping = ({ style }) => {
  return (
    <div className="sales-mapping" style={style}>
      <div className="container">
        <h2 className="title">Sales Mapping by Country</h2>
      </div>
      <div className="map-container">
        <img 
          src="/world.png" 
          alt="World sales map"
          className="world-map"
        />
      </div>
    </div>
  );
};

SalesMapping.defaultProps = {
  style: {
    minWidth: '421px',
    height: '351px',
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box'
  }
};

export default SalesMapping;

