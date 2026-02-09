import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
