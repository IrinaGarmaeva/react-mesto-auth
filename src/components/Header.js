import React from "react";
import { useLocation, Link } from "react-router-dom";
import logoImage from "../images/logo.svg";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <img src={logoImage} alt="логотип" className="header__logo" />
      <ul className="header__nav">
        {location.pathname !== "/sign-in" && (
          <li>
            <Link to="/sign-in" className="header__link">
              Регистрация
            </Link>
          </li>
        )}
        {location.pathname !== "/sign-up" && (
          <li>
            <Link to="/sign-up" className="header__link">
              Войти
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
