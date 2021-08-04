//OBJECT VERSION
import React, { useState } from "react";

import "./App.css";

function CustomHooksObjectsFormat(initialState) {
  const [value, setValue] = useState(initialState);

  function onChange(e) {
    setValue(e.target.value);
  }

  return { value, onChange };
}

function App() {
  const firstName = CustomHooksObjectsFormat("");
  console.log(firstName);

  return (
    <div className="App border-4 border-indigo-400 rounded-md bg-auto">
      <form>
        <input type="text" placeholder="USERNAME" autoFocus />
        <br />
        <input type="email" placeholder="EMAIL" />
        <br />
        <input type="password" placeholder="PASSWORD" />
        <div className="bg-red-500 hover:bg-red-500 rounded-md">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default App;
