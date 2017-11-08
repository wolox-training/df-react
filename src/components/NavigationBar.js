import React from 'react';
import './NavigationBar.css';

import wbooksLogo from '../assets/wbooks_logo.svg';
import notificationsSvg from '../assets/notifications.svg';
import addBookSvg from '../assets/add_book.svg';

import Dropdown from './Dropdown';

const NAVBAR_USER_OPTIONS = [
  {
    title: 'Perfil',
    path: '/'
  },
  {
    title: 'Cerrar sesión',
    path: '/'
  }
];

class NavigationBar extends React.Component {
  state = { showUserOptions: false };

  changeUserDropdownState = () => {
    this.setState({ showUserOptions: !this.state.showUserOptions });
  };

  render() {
    return (
      <div className="navigation-bar">
        <div className="nav-bar-logo-container">
          <img src={wbooksLogo} alt="WBooks" className="navigation-logo" />
        </div>
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
            />
            <Dropdown show={this.state.showUserOptions} options={NAVBAR_USER_OPTIONS} />
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
