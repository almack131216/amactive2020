import * as React from "react";
import parse from "html-react-parser";

class titleSection extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log("[TitleSection.js] constructor props: ", props);
  }

  render() {
    const myBody = this.props.data.body
      ? parse("<div>" + this.props.data.body + "</div")
      : null;
    const mySubtitle = this.props.data.subtitle
      ? parse("<h3>" + this.props.data.subtitle + "</h3>")
      : null;

    return (
      <aside
        id={this.props.data.id}
        className={
          "section-wrap " + this.props.data.class ? this.props.data.class : ""
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 text-center">
              <h2>{this.props.data.title}</h2>
              <hr className="small" />
              {mySubtitle}
              {myBody}
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default titleSection;
