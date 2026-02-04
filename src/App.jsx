import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
