import * as React from "react";
import { Component } from "react";
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
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

library.add(faCircle, faCode, faPencilAlt, faTerminal, faShapes);

class services extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const myClass = this.props.data.class ? this.props.data.class : "";
    // const mySkills = ...this.props.data.skills;
    // const mySkills = this.props.data.skills.map((skill: [], index: number) => {
    //   return <div key={index}>{skill}</div>;
    // });

    return (
      <section id={this.props.data.id} className={"title " + myClass}>
        <h2>{this.props.data.title}</h2>
        {/* <h2>{this.props.data.skills[0].icon}</h2> */}

        {this.props.data.skills.map(
          (
            skill: { title: string; icon: string; text: string },
            index: number
          ) => {
            return (
              <div className="service-item" key={index}>
                <span className="fa-stack fa-4x">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
                  <FontAwesomeIcon
                    icon={skill.icon as IconName}
                    className="fa-stack-1x text-primary"
                  />
                </span>
                <h4>
                  <strong>{skill.title}</strong>
                </h4>
                <p>{skill.text}</p>
                {/* <!--<a href="#" className="btn btn-light">Learn More</a>--> */}
              </div>
            );
          }
        )}
      </section>
    );
  }
}

export default services;
