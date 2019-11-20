import * as React from "react";
import "./assets/css/Base.css";
import "./assets/css/Colors.css";
import "./assets/css/Typography.css";
import Navigation from "./components/Navigation/Navigation";
import MainImage from "./components/MainImage/MainImage";
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
        <MainImage data={this.state.data.header} />
        <TitleSection
          id="about"
          title={this.state.data.about.title}
          body={this.state.data.about.body}
        />
        <TitleSection
          title={this.state.data.services.title}
          class="bg-primary"
        />
        <Services data={this.state.data.services} />
        <ImgBanner
          id={this.state.data.imgBanner.id}
          title={this.state.data.imgBanner.title}
          subtitle={this.state.data.imgBanner.subtitle}
          background={this.state.data.imgBanner.background}
        />
        <TitleSection title={this.state.data.portfolio.title} />
        <Portfolio data={this.state.data.portfolio} />
        <TitleSection
          title={this.state.data.clients.title}
          body={this.state.data.clients.body}
          class="bg-secondary"
        />
        <Clients data={this.state.data.clients} />
        <Contact />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
