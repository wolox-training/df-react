import React from 'react';
import PropTypes from 'prop-types';

import './BookFilter.css';
import trianglePng from '../../assets/triangle.png';

const FILTERS = ['Title', 'Author'];

class BookFilter extends React.Component {
  state = { dropdownOpen: false };

  showDropdown = () => this.setState({ dropdownOpen: !this.state.dropdownOpen });

  render() {
    return (
      <div className="book-filter-container">
        <div
          className="dropdown-container"
          role="button"
          onClick={this.showDropdown}
          onKeyPress={this.showDropdown}
          tabIndex={0}
        >
          <span className="dropdown-placeholder book-input">
            {this.props.filterType || 'Seleccionar filtro'}
          </span>
          <img src={trianglePng} alt="Dropdown arrow" />
        </div>
        <div className={`dropdown-content ${this.state.dropdownOpen ? 'show' : ''}`}>
          {FILTERS.map(filter => (
            <option
              key={`filter_${filter}`}
              value={filter}
              onClick={e => this.props.updateFilterType(e.target.value)}
            >
              {filter}
            </option>
          ))}
        </div>
        <div>
          <input
            className="title-input book-input"
            placeholder="Buscar..."
            onInput={e => this.props.updateFilterValue(e.target.value)}
            value={this.props.filterValue}
          />
          <button className="search-button" onClick={this.props.searchBooks} />
        </div>
      </div>
    );
  }
}

BookFilter.propTypes = {
  updateFilterType: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  updateFilterValue: PropTypes.func.isRequired,
  searchBooks: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
  filterValue: PropTypes.string.isRequired
};

export default BookFilter;
