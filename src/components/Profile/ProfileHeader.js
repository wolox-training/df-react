import React from 'react';

import avatarWbooksPng from '../../assets/avatar-wbooks.png';

import './ProfileHeader.css';

export const ProfileHeader = () => (
  <div className="profile-header">
    <img className="profile-avatar" src={avatarWbooksPng} alt="Avatar" />
    <div className="profile-user-container">
      <div className="profile-user-info">
        <span className="profile-user-name">Marie Fields</span>
        <span className="profile-user-email">lorem.ipsum@wolox.com.ar</span>
      </div>
      <div className="profile-header-social">
        <span className="profile-social-text">
          <strong>4 </strong>
          leídos
        </span>
        <span className="profile-social-text">
          <strong>10 </strong>
          comentarios
        </span>
      </div>
    </div>
  </div>
);
