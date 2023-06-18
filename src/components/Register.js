import React from "react";
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="register auth">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form">
        <fieldset className="auth__fieldset">
        <input
          name="email"
          type="email"
          className="auth__input"
          placeholder="Email"
          required
        ></input>
        <input
          name="password"
          type="password"
          className="auth__input"
          placeholder="Пароль"
          required
        ></input>
        </fieldset>
        <button className="auth__button">Войти</button>
      </form>
      <p className="auth__login"><Link to="/sign-in" className="auth__login">Уже зарегистрированы? Войти</Link></p>
    </div>
  );
}

export default Register;
