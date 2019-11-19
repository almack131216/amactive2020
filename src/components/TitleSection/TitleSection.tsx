import * as React from "react";
import parse from "html-react-parser";
import "./TitleSection.css";

class titleSection extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log("[TitleSection.js] constructor props: ", props);
  }

  render() {
    const myBody = this.props.body
      ? parse('<div class="body">' + this.props.body + "</div")
      : null;
    const mySubtitle = this.props.bodyStrong
      ? parse("<h3>" + this.props.bodyStrong + "</h3>")
      : null;
    const myClass = this.props.class ? this.props.class : "";
    const myId = this.props.id ? this.props.id : "";

    return (
      <section id={myId} className={"title " + myClass}>
        <h2>{this.props.title}</h2>
        {mySubtitle}
        {myBody}
      </section>
    );
  }
}

export default titleSection;
