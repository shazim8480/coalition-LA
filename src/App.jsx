import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/UI/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
