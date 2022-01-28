import React from "react";

const InputItem = (props) => {
  return (
    <div className={props.inputProps.inputClasses}>
      <label htmlFor={props.inputConfig.id}>{props.label}</label>
      <input
        type={props.inputConfig.type}
        id={props.inputConfig.id}
        value={props.inputProps.value}
        onChange={props.inputProps.onChange}
        onBlur={props.inputProps.onBlur}
      />
      {props.inputProps.hasError && (
        <p className="error-text">
          please input valid {props.inputConfig.id}
        </p>
      )}
    </div>
  );
};

export default InputItem;
