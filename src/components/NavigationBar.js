import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className="nav-button nav-avatar-button">
          <button className="nav-avatar-dropdown-button" alt="Settings" />
          <ul className="nav-bar-user-dropdown">
            <Link className="nav-bar-user-dropdown-item" to="/">
              Perfil
            </Link>
            <Link className="nav-bar-user-dropdown-item" to="/">
              Cerrar sesión
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
