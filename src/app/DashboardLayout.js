import React from 'react';
import TopBar from './TopBar';
import SideMenu from './SideMenu';
import TodaysSales from './TodaysSales';
import VisitorInsights from './VisitorInsights';
import TotalRevenue from './TotalRevenue';
import CustomerSatisfaction from './CustomerSatisfaction';
import TargetVsReality from './TargetVsReality';
import TopProducts from './TopProducts';
import SalesMapping from './SalesMapping';
import VolumeVsService from './VolumeVsService';
import './DashboardLayout.css';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <SideMenu />
      <div className="main-content">
        <TopBar />
        <div className="content-grid">
          <div className="grid-item grid-span-8">
            <TodaysSales />
          </div>
          <div className="grid-item grid-span-4">
            <VisitorInsights />
          </div>
          <div className="grid-item grid-span-6">
            <TotalRevenue />
          </div>
          <div className="grid-item grid-span-3">
            <CustomerSatisfaction />
          </div>
          <div className="grid-item grid-span-3">
            <TargetVsReality />
          </div>
          <div className="grid-item grid-span-6">
            <TopProducts />
          </div>
          <div className="grid-item grid-span-3">
            <SalesMapping />
          </div>
          <div className="grid-item grid-span-3">
            <VolumeVsService />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
