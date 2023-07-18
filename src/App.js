import React, { useState, createContext } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
export let ThemeContext = createContext(null);
function App() {
  const [count, setCount] = useState(10);

  return (
    <div className="App">
      <ThemeContext.Provider value={{ count, setCount }}>
        <ScrollRestoration />
        <Outlet />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
