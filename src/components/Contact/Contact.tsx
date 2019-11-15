import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const contact = () => {
  return (
    <footer id="contact" className="bg-fourth">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 text-center">
            <h2>Contact</h2>
            <hr className="small" />
            <h4>
              <strong>Alex Mackenzie</strong>
            </h4>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:alex@amactive.net">alex@amactive.net</a>
              </li>
            </ul>
            <br />
            {/* <!--<ul className="list-inline">
                    <li>
                        <a href="#"><i className="fa fa-facebook fa-fw fa-3x"></i></a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-twitter fa-fw fa-3x"></i></a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-dribbble fa-fw fa-3x"></i></a>
                    </li>
                </ul>--> */}
            <hr className="small" />
            <p className="text-muted">Copyright &copy; amactive 2019</p>
          </div>
        </div>
      </div>
      <a id="to-top" href="#top" className="btn btn-dark btn-lg">
        <i className="fa fa-chevron-up fa-fw fa-1x"></i>
      </a>
    </footer>
  );
};

export default contact;
