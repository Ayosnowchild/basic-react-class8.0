import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "./App";
export default function State() {
  let { count, setCount } = React.useContext(ThemeContext);
  const [name, setName] = useState("Ayo");
  function handleClick() {
    setName("Joe");
  }
  function addToCount() {
    setCount(count + 1);
  }
  function subFromCount() {
    setCount(count - 1);
  }
  return (
    <div className="center">
      <div className="flex">
        <p className="box" onClick={subFromCount}>
          -
        </p>
        <p>{count}</p>
        <p className="box" onClick={addToCount}>
          +
        </p>
      </div>
      <p>{name}</p> <div onClick={handleClick}>Click me</div>
      <Link to="/con">
        {" "}
        <button>Got to Condition page</button>
      </Link>
    </div>
  );
}
