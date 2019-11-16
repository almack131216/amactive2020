import * as React from "react";
import { Component } from "react";
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

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log("[App.js] constructor");
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <About />
        <TitleSection
          title="About Me"
          body="I'm a UI-UX designer-developer with more than 10 years experience. My broad experience will be useful to any employer, so get in touch if you have an empty chair, and a bad-ass-fast desktop machine to work from."
        />
        <Services class="bg-primary" />
        <ImgBanner title="Section Title" />
        <Portfolio />
        <TitleSection
          class="bg-secondary"
          title="Clients"
          subtitle="blah blah"
        />
        <Clients />
        <Contact />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
