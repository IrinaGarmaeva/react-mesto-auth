import React from "react";
import successImage from "../images/successRegistration.png";
import failImage from "../images/failRegistration.png";

function InfoTooltip({ isLoggedIn, onClose }) {
  return (
    <div className="popup popup_opened" onClick={onClose}>
      <div className="popup__register-container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img
          src={isLoggedIn ? successImage : failImage}
          className="popup__register-image"
        />
        <h2 className="popup__text">
          {isLoggedIn
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."
            }
        </h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
