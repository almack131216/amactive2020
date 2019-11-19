import * as React from "react";
import "./MainImage.css";

class mainImage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <header id="top" className="header">
        <div className="text-vertical-center">
          <div className="main-img">
            <a href="#about">
              <img
                src={this.props.data.img.src}
                alt={this.props.data.img.alt}
              />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default mainImage;
