import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/UI/Navbar";
import History from "./components/History/History";
import HistoryCarousel from "./components/History/HistoryCarousel";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <History />
      <HistoryCarousel />
    </main>
  );
}

export default App;
