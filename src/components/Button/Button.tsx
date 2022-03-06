import React from "react";
import "./Button.css";

interface PropsType {
  variant: string;
  children: any;
}

function Button(props: PropsType) {
  const { variant = "primary", children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
