import React from "react";
import useInput from "../hooks/use-input";
import InputItem from "./InputItem";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@") && value.includes(".");

const BasicForm = () => {
  const name = useInput(isNotEmpty);
  const lastName = useInput(isNotEmpty);
  const email = useInput(isNotEmpty && isEmail);

  let formIsValid = false;

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (name.isValid && lastName.isValid && email.isValid) formIsValid = true;
    if (!formIsValid) return;

    name.reset();
    lastName.reset();
    email.reset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <InputItem
          inputConfig={{ type: "text", id: "name" }}
          label="First Name"
          inputProps={name}
        />
        <InputItem
          inputConfig={{ type: "text", id: "last-name" }}
          label="Last Name"
          inputProps={lastName}
        />
      </div>
      <InputItem
        inputConfig={{ type: "email", id: "email" }}
        label="E-Mail Address"
        inputProps={email}
      />
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
