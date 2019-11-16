import * as React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCode,
  faPencilAlt,
  faTerminal
} from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

class services extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <section id="services" className={"section-wrap " + this.props.class}>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-10 col-lg-offset-1">
              <h2>Skills</h2>
              <hr className="small" />
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-6 col-xxxs-12">
                  <div className="service-item">
                    <span className="fa-stack fa-4x">
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="fa-stack-2x"
                      />
                      <FontAwesomeIcon
                        icon={faCode}
                        className="fa-stack-1x text-primary"
                      />
                    </span>
                    <h4>
                      <strong>Development</strong>
                    </h4>
                    <p>
                      React, Angular, jQuery, Vanilla JS, AureliaJS, Bootstrap,
                      PHP, MySQL, Wordpress
                    </p>
                    {/* <!--<a href="#" className="btn btn-light">Learn More</a>--> */}
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 col-xxxs-12 break-on-two">
                  <div className="service-item">
                    <span className="fa-stack fa-4x">
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="fa-stack-2x"
                      />
                      <FontAwesomeIcon
                        icon={faHtml5}
                        className="fa-stack-1x text-primary"
                      />
                    </span>
                    <h4>
                      <strong>HTML5 & CSS3</strong>
                    </h4>
                    <p>Standards compliant HTML with SASS CSS3</p>
                    {/* <!--<a href="#" className="btn btn-light">Learn More</a>--> */}
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 col-xxxs-12">
                  <div className="service-item">
                    <span className="fa-stack fa-4x">
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="fa-stack-2x"
                      />
                      <FontAwesomeIcon
                        icon={faPencilAlt}
                        className="fa-stack-1x text-primary"
                      />
                    </span>
                    <h4>
                      <strong>Design</strong>
                    </h4>
                    <p>
                      Axure, Adobe Fireworks, Photoshop & Illustrator, Flash
                    </p>
                    {/* <!--<a href="#" className="btn btn-light">Learn More</a>--> */}
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 col-xxxs-12">
                  <div className="service-item">
                    <span className="fa-stack fa-4x">
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="fa-stack-2x"
                      />
                      <FontAwesomeIcon
                        icon={faTerminal}
                        className="fa-stack-1x text-primary"
                      />
                    </span>
                    <h4>
                      <strong>Environment</strong>
                    </h4>
                    <p>
                      VS Code, NPM, Grunt, Gulp, GIT, Bitbucket, JIRA, TFS
                      (Windows)
                    </p>
                    {/* <!--<a href="#" className="btn btn-light">Learn More</a>--> */}
                  </div>
                </div>
              </div>
              {/* <!-- /.row (nested) --> */}
            </div>
            {/* <!-- /.col-lg-10 --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
    );
  }
}

export default services;
