import React from 'react';

import avatarWbooksPng from '../../assets/avatar-wbooks.png';

import './DashboardHeader.css';

export const DashboardHeader = () => (
  <div className="dashboard-header">
    <img className="dashboard-avatar" src={avatarWbooksPng} alt="Avatar" />
    <div className="dashboard-user-container">
      <div className="dashboard-user-info">
        <span className="dashboard-user-name">Marie Fields</span>
        <span className="dashboard-user-email">lorem.ipsum@wolox.com.ar</span>
      </div>
      <div className="dashboard-header-social">
        <span className="dashboard-social-text">
          <strong>4 </strong>
          leídos
        </span>
        <span className="dashboard-social-text">
          <strong>10 </strong>
          comentarios
        </span>
      </div>
    </div>
  </div>
);
