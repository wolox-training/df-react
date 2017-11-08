import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Dropdown.css';

function Dropdown(props) {
  return (
    <ul className={`nav-bar-user-dropdown ${props.show ? 'show' : ''}`}>
      {props.options.map(options => (
        <Link key={`${options.title}`} className="nav-bar-user-dropdown-item" to={options.path}>
          {options.title}
        </Link>
      ))}
    </ul>
  );
}

Dropdown.propTypes = {
  show: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string
    })
  ).isRequired
};

export default Dropdown;
