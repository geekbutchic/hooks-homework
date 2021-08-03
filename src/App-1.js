import React, { useState } from "react";
import "./App.css";

function App() {
  //ARRAY FORMAT
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);
  }

  return (
    <div className="App border-4 border-indigo-400 rounded-md bg-auto">
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="USERNAME"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <br />
        <input
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
        />
          <div className="bg-red-500 hover:bg-red-500 rounded-md">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default App;
