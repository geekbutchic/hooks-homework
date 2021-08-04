import { useState } from "react";

function CustomHooksArray(initialState) {
  const [value, setValue] = useState(initialState);

  function onChange(e) {
    setValue(e.target.value);
    console.log(e.target.value);
  }
  function clearInput() {
    setValue("");
  }
  function greetUser() {
    alert("Hi, " + value);
  }
  function showValue() {
    console.log(value);
  }
  return [value, onChange, clearInput, greetUser, showValue];
}

export default CustomHooksArray;