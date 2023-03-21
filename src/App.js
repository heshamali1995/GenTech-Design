import { useState, useEffect } from "react";
import "./sass/style.css";
import { FaArrowUp } from "react-icons/fa";
// Components
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [toggle, setToggle] = useState(false);
  // Toggle Navigate Button
  const scrollIntoView = () => window.scrollY >= 657 ? setToggle(true) : setToggle(false);
  // Navigate To Top
  const navigateToTop = () => window.scrollTo(0, 0);
  useEffect(() => {
    window.onscroll = scrollIntoView
  }, []);
  return (
    <>
      <div
        className="navigate"
        style={{ display: toggle ? "block" : "none" }}
        onClick={navigateToTop}>
        <FaArrowUp />
      </div>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Clients />
      <Footer />
    </>
  )
}

export default App;