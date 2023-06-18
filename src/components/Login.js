import React from "react";

function Login() {
  return (
    <div className="login auth">
      <h2 className="auth__title">Вход</h2>
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
    </div>
  );
}

export default Login;
