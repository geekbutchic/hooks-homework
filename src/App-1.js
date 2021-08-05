//OBJECT VERSION
import React, { useState } from "react";
import "./App.css";

function CustomHooksObjectsFormat(initialState) {
  const [value, setValue] = useState(initialState);

  function onChange(e) {
    setValue(e.target.value);
  }
  function clearInput() {
    setValue("");
  }

  return { value, onChange, clearInput };
}

function App() {
  const {//RENAME FOR SAKES OF NAMING COLLISION 
    value: userName,
    onChange: userNameOnChange,
    clearInput: clearUserNameInput,
  } = CustomHooksObjectsFormat("");

  const {
    value: email,
    onChange: emailOnChange,
    clearInput: clearEmailInput,
  } = CustomHooksObjectsFormat("");

  const {
    value: password,
    onChange: passwordOnChange,
    clearInput: clearPasswordInput,
  } = CustomHooksObjectsFormat("");

  function handleOnSubmit (e) {
    e.preventDefault();
    clearUserNameInput();
    clearEmailInput();
    clearPasswordInput();

    console.log("USER NAME: ", userName);
    console.log("EMAIL: ", email);
    console.log("PASSWORD: ", password);
  }

  return (
    <div className="App border-4 border-indigo-400 rounded-md bg-auto">
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="USERNAME"
          value={userName}
          onChange={userNameOnChange}
          autoFocus
        />
        <br />
        <input
          type="email"
          placeholder="EMAIL"
          value={email}
          onChange={emailOnChange}
        />
        <br />
        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={passwordOnChange}
        />
        <div className="bg-red-500 hover:bg-red-500 rounded-md">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default App;
