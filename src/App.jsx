import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/UI/Navbar";
import History from "./components/History/History";
import HistoryCarousel from "./components/History/HistoryCarousel";
import Climb from "./components/Climb/Climb";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <History />
      <HistoryCarousel />
      <Climb />
      <Footer />
    </main>
  );
}

export default App;
