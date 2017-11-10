import React from 'react';
import { Link } from 'react-router-dom';

import wbooksLogo from '../assets/wbooks_logo.svg';
import notificationsSvg from '../assets/notifications.svg';
import addBookSvg from '../assets/add_book.svg';
import AuthService from '../services/AuthService';

import Dropdown from './Dropdown';
import './NavigationBar.css';

const logout = (onSuccess, onError) => {
  // The below request doesn't work, but I don't have the real url to logout
  AuthService.logout()
    .then(response => {
      if (onSuccess) {
        onSuccess(response);
      }
    })
    .catch(error => {
      if (onError) {
        onError(error);
      }
    });
};

const NAVBAR_USER_OPTIONS = [
  {
    id: 1,
    title: 'Perfil',
    path: '/',
    action: undefined,
    onSuccess: undefined,
    onError: undefined
  },
  {
    id: 2,
    title: 'Cerrar sesión',
    path: '/login',
    action: logout,
    onSuccess: undefined,
    onError: undefined
  }
];

class NavigationBar extends React.Component {
  state = { showUserOptions: false };

  setDropdownButtonRef = node => {
    this.setState({ dropdownButtonRef: node });
  };

  changeUserDropdownState = () => {
    this.setState({ showUserOptions: !this.state.showUserOptions });
  };

  dismissDropdown = e => {
    if (this.state.dropdownButtonRef.contains(e.target)) {
      return;
    }
    this.setState({ showUserOptions: false });
  };

  render() {
    return (
      <div className="navigation-bar">
        <Link className="nav-bar-logo-container" to="/">
          <img src={wbooksLogo} alt="WBooks" className="navigation-logo" />
        </Link>
        <div className="nav-bar-buttons-container">
          <button
            src={notificationsSvg}
            alt="Notifications"
            className="nav-button nav-notifications-button"
          />
          <button src={addBookSvg} alt="Add Book" className="nav-button nav-add-book-button" />
          <div className="nav-button nav-avatar-button">
            <button
              className="nav-avatar-dropdown-button"
              alt="Settings"
              onClick={this.changeUserDropdownState}
              ref={this.setDropdownButtonRef}
            />
            <Dropdown
              show={this.state.showUserOptions}
              options={NAVBAR_USER_OPTIONS}
              shouldDismiss={this.dismissDropdown}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
