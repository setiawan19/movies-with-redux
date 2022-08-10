import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              Movie Gallery
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-5x" id="imdb-logo" />
            </li>
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-react fa-5x" id="react-logo" />
            </li>
          </ul>
        </div>
      </nav>
      <nav>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <Link className="navbar text-lg brand-text" to="/">
              Seach Movie
            </Link>
          </li>
          <li className="nav-item">
            <Link className="navbar text-lg brand-text" to="/fav">
              favourite movies
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Navbar;
