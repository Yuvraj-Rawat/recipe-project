import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="uk-navbar-container uk-letter-spacing-small">
        <div className="uk-container">
          <div className="uk-position-z-index" data-uk-navbar>
            <div className="uk-navbar-left">
              <Link className="uk-navbar-item uk-logo" to="/">
                Kocina
              </Link>
              <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
                <li className="uk-active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/recipeTags">Recipe</Link>
                </li>
                <li>
                  <Link to="/search">Search</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-right">
              <div>
                <Link className="uk-navbar-toggle" data-uk-search-icon to="#" />
                <div
                  className="uk-drop uk-background-default"
                  data-uk-drop="mode: click; pos: left-center; offset: 0"
                >
                  <form className="uk-search uk-search-navbar uk-width-1-1">
                    <input
                      className="uk-search-input uk-text-demi-bold"
                      type="search"
                      placeholder="Search..."
                      autofocus
                    />
                  </form>
                </div>
              </div>
              <ul className="uk-navbar-nav uk-visible@m">
                <li>
                  <Link to="/sign_in">Sign In</Link>
                </li>
              </ul>
              <div className="uk-navbar-item">
                <div>
                  <Link className="uk-button uk-button-primary" to="/sign_up">
                    Sign Up
                  </Link>
                </div>
              </div>
              <Link
                className="uk-navbar-toggle uk-hidden@m"
                to="#offcanvas"
                data-uk-toggle
              >
                <span data-uk-navbar-toggle-icon />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
