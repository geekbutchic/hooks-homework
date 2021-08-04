//ARRAY VERSION
import React from "react";
import CustomHooksArray from './hooks/inputHooks-1'
import "./App.css";

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
