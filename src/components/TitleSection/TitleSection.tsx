import * as React from "react";
import parse from "html-react-parser";
import "./TitleSection.css";

class titleSection extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log("[TitleSection.js] constructor props: ", props);
  }

  render() {
    const myBody = this.props.data.body
      ? parse('<div class="body">' + this.props.data.body + "</div")
      : null;
    const mySubtitle = this.props.data.subtitle
      ? parse("<h3>" + this.props.data.subtitle + "</h3>")
      : null;
    const myClass = this.props.data.class ? this.props.data.class : "";

    return (
      <section id={this.props.data.id} className={"title " + myClass}>
        <h2>{this.props.data.title}</h2>
        {mySubtitle}
        {myBody}
      </section>
    );
  }
}

export default titleSection;
