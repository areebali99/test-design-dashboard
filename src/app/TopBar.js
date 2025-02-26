import React from 'react';
import arrow from '../../public/arrow.png'
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="left-section">
        <h1 className="dashboard-title">Dashboard</h1>
      </div>
      <div className="center-section">
        <div className="search-bar">
          <img src="/magnifier.svg" alt="search" className="search-icon" />
          <input type="text" placeholder="Search here..." className="search-input" />
        </div>
      </div>
      <div className="right-section">
        <div className="language-selector">
          <img src="/usa.svg" alt="language" className="language-icon" />
          <span className="language-text">Eng (US)</span>
          <img src="/chevron-down.svg" alt="chevron" className="chevron-icon" />
        </div>
        <div className="user-menu">
          <button className="notifications">
            <img src="/notifi.png" alt="notifications" className="notification-icon" />
          </button>
          <div className="user-profile">
            <img src="/avatar.png" alt="avatar" className="avatar" />
            <div className="user-info">
              <span className="username">Musfiq</span>
              <span className="role">Admin</span>
            </div>
            <button className="menu-button">
              <img src="/arrow.png" alt="menu" className="menu-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
