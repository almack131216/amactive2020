import * as React from "react";
import "./Services.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import {
  faCircle,
  faCode,
  faPencilAlt,
  faTerminal,
  faShapes
} from "@fortawesome/free-solid-svg-icons";
// import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

library.add(faCircle, faCode, faPencilAlt, faTerminal, faShapes);

class services extends React.Component<any, any> {
  render() {
    const myClass = this.props.data.class ? this.props.data.class : "";
    // const mySkills = ...this.props.data.items;
    const mySkills = this.props.data.items.map(
      (item: { title: string; icon: string; text: string }, index: number) => {
        return (
          <div className="item" key={index}>
            <span className="fa-stack fa-4x">
              <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
              <FontAwesomeIcon
                icon={item.icon as IconName}
                className="fa-stack-1x text-primary"
              />
            </span>
            <h4>
              <strong>{item.title}</strong>
            </h4>
            <p>{item.text}</p>
            {/* <!--<a href="#" className="btn btn-light">Learn More</a>--> */}
          </div>
        );
      }
    );

    return (
      <section id={this.props.data.id} className={"content " + myClass}>
        <div className="css-grid services">{mySkills}</div>
      </section>
    );
  }
}

export default services;
