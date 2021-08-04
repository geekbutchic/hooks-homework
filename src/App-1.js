//ARRAY VERSION
import React, { useState } from "react";
import "./App.css";

function CustomHooksArray(initialState) {
  const [value, setValue] = useState(initialState);

  function onChange (e) {
    setValue(e.target.value);
    console.log(e.target.value);
  }
  function clearInput () {
    setValue("");
  }
  function greetUser () {
    alert("Hi, " + value)
  }
  function showValue () {
      console.log(value);
  }
  return [value, onChange, clearInput, greetUser, showValue];
}

function App() {
  const [userName, userNameOnChange, clearUsernameInput, greetUserFirstName, showNameValue ] = CustomHooksArray("");
  const [email, setEmailOnChange, clearEmailInput, ,showEmailValue] = CustomHooksArray("");
  const [password, setPasswordOnChange, clearPasswordInput, ,showPasswordValue] = CustomHooksArray("");

  function handleOnSubmit(e) {
    e.preventDefault();
    showNameValue()
    showEmailValue()
    showPasswordValue()
    greetUserFirstName()
    clearUsernameInput();
    clearEmailInput();
    clearPasswordInput();
  }

  return (
    <div className="App border-4 border-indigo-400 rounded-md bg-auto">
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="USERNAME"
          value={userName}
          onChange={(e) => userNameOnChange(e)}
          autoFocus
        />
        <br />
        <input
          type="email"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setEmailOnChange(e)}
        />
        <br />
        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPasswordOnChange(e)}
        />
        <div className="bg-red-500 hover:bg-red-500 rounded-md">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default App;
