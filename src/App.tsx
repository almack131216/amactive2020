import React from "react";
import "./App.css";
import "./assets/css/main.css";
import "./assets/css/stylish-portfolio.css";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import ImgBanner from "./components/ImgBanner/ImgBanner";
import Portfolio from "./components/Portfolio/Portfolio";
import TitleSection from "./components/TitleSection/TitleSection";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Services />
      <ImgBanner />
      <Portfolio />
      <TitleSection />
      <Clients />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
