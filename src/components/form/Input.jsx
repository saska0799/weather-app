import React from "react";
import { forwardRef } from "react";

const Input = forwardRef(({ type, placeholder }, ref) => {
  return <input className="search-input" type={type} ref={ref} placeholder={placeholder} />;
});

export default Input;
