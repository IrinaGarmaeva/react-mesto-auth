import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import {useFormAndValidation} from '../hooks/useFormAndValidation';


function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const {values, errors, isValid, handleChange, resetForm} = useFormAndValidation();

  // const[name, setName] = useState('');
  // const[link, setLink] = useState('');

  // React.useEffect(() => {
  //   setName('')
  //   setLink('')
  // }, [isOpen])

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      values: values,
      resetForm: resetForm,
    })
  }

  return (
    <PopupWithForm
          popupName={"add-place"}
          title={"Новое место"}
          buttonText={isLoading ? "Сохранение..." : "Создать"}
          formId={""}
          formName={"place-form"}
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          resetForm={resetForm}
          children={
            <fieldset className="popup__fieldset">
              <label className="popup__field">
                <input
                  value={values.name || ''}
                  name="name"
                  type="text"
                  className="popup__input popup__input_el_place-name"
                  placeholder="Название"
                  minLength="2"
                  maxLength="30"
                  required
                  onChange={handleChange}
                />
                <span className="popup__input-error card-name-error">{() => console.log(errors.name)}</span>
              </label>
              <label className="popup__field">
                <input
                  value={values.link || ''}
                  name="link"
                  type="url"
                  className="popup__input popup__input_el_place-link"
                  placeholder="Ссылка на картинку"
                  required
                  onChange={handleChange}
                />
                <span className="popup__input-error card-link-error">{errors.link}</span>
              </label>
            </fieldset>
          }
        />
  )
}

export default AddPlacePopup
