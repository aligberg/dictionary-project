import React, { useState } from "react";
import "./Toggle.css";

export default function Toggle() {
  const [mode, setMode] = useState("dark");
  function toLight(event) {
    event.preventDefault()
    setMode("light");
  }
  function toDark(event) {
    event.preventDefault();
    setMode("dark");
  }
  if (mode === "dark") {
    document.body.classList.add("lightMode");
    return (
      <div className="toggle">
        <button onClick={toLight}>🌚</button>
      </div>
    );
  } else if (mode === "light") {
    document.body.classList.remove("lightMode");
    return (
      <div className="toggle">
        <button onClick={toDark}>☀️</button>
      </div>
    );
  } else {
    return null;
  }
}