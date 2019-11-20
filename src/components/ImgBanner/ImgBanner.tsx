import * as React from "react";
import "./ImgBanner.css";

class imgBanner extends React.Component<any, any> {
  render() {
    return (
      <aside id={this.props.id} className="callout">
        <div className="text-vertical-center">
          <h1>
            <em>{this.props.title}</em>
          </h1>
          <h3>{this.props.subtitle}</h3>
        </div>
      </aside>
    );
  }
}

export default imgBanner;
