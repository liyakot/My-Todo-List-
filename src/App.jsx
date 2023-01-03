import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import DisplayTodos from "./components/DisplayTodos/DisplayTodos";

function App() {
  return (
    <div className="app">
      <Header />
      <DisplayTodos />
    </div>
  );
}

export default App;
