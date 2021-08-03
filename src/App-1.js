import React, { useState } from "react";
import "./App.css";

function App() {
  //ARRAY FORMAT
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  return (
    <div className="App border-4 border-indigo-400 rounded-md">
      <form>
        <input
        type="text"
        placeholder="USERNAME" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoFocus
        />
        <br />
        <input
        type="text"
        placeholder="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}   
        />
        <br />
        <input 
        type="email"
        placeholder="PASSWORD"
        value={password}
        onChange={(e) => setPassword(e.target.value)}  
        />
      </form>
    </div>
  );
}

export default App;