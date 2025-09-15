import React, { useState } from "react";
import App from "../App";

function LoginForm(){
    const[username, setUsername] = useState("")
    const[password, setPassoword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("login", {username, password});
    };
    
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Inserisci username"
            required
          />
        </label>
      </div>

      <div>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Inserisci password"
            required
          />
        </label>
      </div>

      <button type="submit">Accedi</button>
    </form>
  );
};

export default App
