import * as React from "react";
import "./App.css";
import "./assets/css/main.css";
// import "./assets/css/stylish-portfolio.css";
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
import SiteData from "./assets/api/data.json";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log("[App.js] constructor");

    this.state = {
      data: SiteData
    };
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
    //"http://www.amactive.net/amactive2020/data.json"
  }

  render() {
    console.log("[App.js] render... ");

    return (
      <div className="App">
        <Navigation />
        <Header data={this.state.data.header} />
        <TitleSection data={this.state.data.about} />
        <Services data={this.state.data.services} />
        <ImgBanner title='"My best design is my next"' />
        <Portfolio data={this.state.data.portfolio} />
        <TitleSection data={this.state.data.clients} />
        <Clients />
        <Contact />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
