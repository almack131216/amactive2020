import * as React from "react";
import { Component } from "react";

class titleSection extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <aside id="clients" className={"section-wrap " + this.props.class}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 text-center">
              <h2>{this.props.title}</h2>
              <hr className="small" />
              <h3>{this.props.subtitle}</h3>
              <p>{this.props.body}</p>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default titleSection;
