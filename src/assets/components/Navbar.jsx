import React from 'react';
import { FaSearch, FaSun, FaMoon } from 'react-icons/fa';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Soundwave</h1>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for music..."
          className="search-input"
        />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      <div className="navbar-dark-mode">
        <button className="dark-mode-button" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;