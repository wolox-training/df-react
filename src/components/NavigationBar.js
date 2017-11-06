import React from 'react';

import './NavigationBar.css';

import wbooksLogo from '../assets/wbooks_logo.svg';
import notificationsSvg from '../assets/notifications.svg';
import addBookSvg from '../assets/add_book.svg';

function NavigationBar() {
  return (
    <div className="navigation-bar">
      <div className="nav-bar-logo-container">
        <img src={wbooksLogo} alt="WBooks" className="navigation-logo" />
      </div>
      <div className="nav-bar-buttons-container">
        <button src={notificationsSvg} alt="Notifications" className="nav-button nav-notifications-button" />
        <button src={addBookSvg} alt="Add Book" className="nav-button nav-add-book-button" />
        <button src={notificationsSvg} alt="Settings" className="nav-button nav-avatar-button" />
      </div>
    </div>
  );
}

export default NavigationBar;
