import React from "react";
import { useLocation, Link } from "react-router-dom";
import logoImage from "../images/logo.svg";

function Header({ email, signOut }) {
  const location = useLocation();

  return (
    <header className="header">
      <img src={logoImage} alt="логотип" className="header__logo" />
      <ul className="header__nav">
        {location.pathname === "/" && (
          <>
            <p className="header__email">{email}</p>
            <li>
              <button onClick={signOut} className="header__signout-button">
                Выйти
              </button>
            </li>
          </>
        )}
        {location.pathname === "/sign-in" && (
          <li className="header__li">
            <Link to="/sign-up" className="header__link">
              Регистрация
            </Link>
          </li>
        )}
        {location.pathname === "/sign-up" && (
          <li>
            <Link to="/sign-in" className="header__link">
              Войти
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
