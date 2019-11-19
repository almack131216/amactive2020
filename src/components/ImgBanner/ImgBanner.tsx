import * as React from "react";
import "./ImgBanner.css";

class imgBanner extends React.Component<any, any> {
  render() {
    return (
      <aside className="callout">
        <div className="text-vertical-center">
          <h1>
            <em>{this.props.title}</em>
          </h1>
          <h2>Sergio Pininfarina</h2>
        </div>
      </aside>
    );
  }
}

export default imgBanner;
