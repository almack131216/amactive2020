import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import TitleSection from "../TitleSection/TitleSection";

const contact = () => {
  return (
    <footer id="contact" className="bg-fourth">
      <TitleSection title="Contact" class="bg-fourth" />
      <h4>Alex Mackenzie</h4>
      <FontAwesomeIcon icon={faEnvelope} />
      <a className="pad-icon-left" href="mailto:alex@amactive.net">
        alex@amactive.net
      </a>
      <hr className="dotted" />
      <p className="copyright">Copyright &copy; amactive 2020</p>
      {/* <a id="to-top" href="#top" className="btn btn-dark btn-lg">
        <i className="fa fa-chevron-up fa-fw fa-1x"></i>
      </a> */}
    </footer>
  );
};

export default contact;
