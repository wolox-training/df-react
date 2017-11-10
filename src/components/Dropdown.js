import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Dropdown.css';

class Dropdown extends React.Component {
  componentWillReceiveProps = nextProps => {
    if (nextProps.show) {
      document.addEventListener('click', this.handleClick, false);
    } else {
      document.removeEventListener('click', this.handleClick, false);
    }
  };

  setContainerRef = node => {
    this.setState({ containerRef: node });
  };

  handleClick = e => {
    if (!this.props.show && this.state.containerRef.contains(e.target)) {
      return;
    }
    this.props.shouldDismiss(e);
  };

  render() {
    return (
      <ul className={`nav-bar-user-dropdown ${this.props.show ? 'show' : ''}`} ref={this.setContainerRef}>
        {this.props.options.map(option => (
          <Link
            key={`${option.id}`}
            className="nav-bar-user-dropdown-item"
            to={option.path}
            onClick={() => (option.action ? option.action(option.onSuccess, option.onError) : {})}
          >
            {option.title}
          </Link>
        ))}
      </ul>
    );
  }
}

Dropdown.propTypes = {
  show: PropTypes.bool.isRequired,
  shouldDismiss: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      action: PropTypes.func,
      onSuccess: PropTypes.func,
      onError: PropTypes.func
    })
  ).isRequired
};

export default Dropdown;
