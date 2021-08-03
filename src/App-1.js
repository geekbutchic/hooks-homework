import React, { useState } from "react";
import "./App.css";

function CustomHooksArray(initialState) {
  const [value, setValue] = useState(initialState);

  function onChange(e) {
    setValue(e.target.value);
    console.log(e.target.value);
  }
  return [value, onChange];
}

function App() {
  const [userName, userNameOnChange] = CustomHooksArray("");

  return (
    <div className="App border-4 border-indigo-400 rounded-md bg-auto">
      <form>
        <input
          type="text"
          placeholder="USERNAME"
          value={userName}
          onChange={(e) => userNameOnChange(e)}
          autoFocus
        />
        <br />
        {/* <input
          type="email"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}
        <div className="bg-red-500 hover:bg-red-500 rounded-md">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default App;
