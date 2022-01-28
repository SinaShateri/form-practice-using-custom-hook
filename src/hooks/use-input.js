import { useState } from "react";

const useInput = (inputValidation) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = inputValidation(enteredInput);
  const inputHasError = !inputIsValid && inputIsTouched;
  const inputClasses = inputHasError ? "form-control invalid" : "form-control";

  const inputChangeHandler = (e) => {
    setEnteredInput(e.target.value);
  };
  const inputBlurHandler = () => {
    setInputIsTouched(true);
  };
  const reset = () => {
    setEnteredInput("");
    setInputIsTouched(false);
  };

  return {
    reset,
    inputClasses,
    value: enteredInput,
    isValid: inputIsValid,
    hasError: inputHasError,
    onBlur: inputBlurHandler,
    onChange: inputChangeHandler,
  };
};

export default useInput;
