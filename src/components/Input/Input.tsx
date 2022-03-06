import React from "react";
import "./Input.css";
interface PropsType {
  size: "small" | "medium" | "large";
  placeholder: string;
}

function Input(props: PropsType) {
  const size = props.size;
  const placeholder = props.placeholder;
  return (
    <input type="text" className={`${size}`} placeholder={placeholder}></input>
  );
}

export default Input;
