import React from 'react';
import './VolumeVsService.css';

const VolumeVsService = ({ style }) => {
  return (
    <div className="volume-vs-service" style={style}>
      <h2 className="title">Volume vs Service Level</h2>
      
      <div className="chart">
        <div className="bar-group">
          <div className="bar volume-bar" id='A'></div>
          <div className="bar service-bar" id='B'></div>
        </div>
        <div className="bar-group">
          <div className="bar volume-bar"id='C' ></div>
          <div className="bar service-bar" id='D' ></div>
        </div>
        <div className="bar-group">
          <div className="bar volume-bar" id='E'></div>
          <div className="bar service-bar" id='F'></div>
        </div>
        <div className="bar-group">
          <div className="bar volume-bar" id='G'></div>
          <div className="bar service-bar" id='H'></div>
        </div>
        <div className="bar-group">
          <div className="bar volume-bar" id='J'></div>
          <div className="bar service-bar" id='J'></div>
        </div>
        <div className="bar-group">
          <div className="bar volume-bar" id='K'></div>
          <div className="bar service-bar" id='L'></div>
        </div>
      </div>

      <div className="legend">
        <div className="legend-item">
          <div className="legend-color volume"></div>
          <div className="legend-details">
            <span className="legend-label">Volume</span>
            <span className="legend-value">1,135</span>
          </div>
        </div>
        <div className="legend-divider"></div>
        <div className="legend-item">
          <div className="legend-color service"></div>
          <div className="legend-details">
            <span className="legend-label">Services</span>
            <span className="legend-value">635</span>
          </div>
        </div>
      </div>
    </div>
  );
};

VolumeVsService.defaultProps = {
  style: {
    flexGrow: 1,
    minWidth: '371px',
    height: '349px',
    maxWidth: '100%',
    boxSizing: 'border-box',
    padding: '20px'
  }
};

export default VolumeVsService;

