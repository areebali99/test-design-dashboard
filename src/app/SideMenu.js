import React from 'react';
import './SideMenu.css';

const SideMenu = () => {
  const menuItems = [
    { icon: '/Graph1.png', text: 'Dashboard', active: true },
    { icon: '/Group.png', text: 'Leaderboard' },
    { icon: '/shopping-cart.png', text: 'Order' },
    { icon: '/mdi-shop.png', text: 'Products' },
    { icon: '/line-chart.png', text: 'Sales Report' },
    { icon: '/mdi-mess.png', text: 'Messages' },
    { icon: '/mdi-cog.png', text: 'Settings' },
    { icon: '/sign-out.png', text: 'Sign Out' }
  ];

  return (
    <div className="side-menu">
      <div className="logo">
        <img src="/LogoSideBar.png" alt="SysPay Logo" />
      </div>
      <nav className="menu-items">
        {menuItems.map((item, index) => (
          <div key={index} className={`menu-item ${item.active ? 'active' : ''}`}>
            <img src={item.icon} alt={item.text} className="menu-icon" />
            <span className="menu-text">{item.text}</span>
          </div>
        ))}
      </nav>
      <div className="pro-card">
        <img src="Logo.png" alt="Globe" className="globe-icon" />
        <div className="pro-text">Get access to all features</div>
        <button className="get-pro-btn">Get Pro</button>
      </div>
    </div>
  );
};

export default SideMenu;
