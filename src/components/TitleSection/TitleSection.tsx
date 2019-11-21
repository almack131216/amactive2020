import * as React from "react";
import parse from "html-react-parser";

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
        <div className="section-inner">
          <h2>{this.props.title}</h2>
          {mySubtitle}
          {myBody}
        </div>
      </section>
    );
  }
}

export default titleSection;
