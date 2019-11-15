import * as React from "react";
import HeaderImg from "../../assets/img/maga-cap.jpg";

const header = () => {
  return (
    <header id="top" className="header">
      <div className="text-vertical-center">
        <div className="main-img">
          <a href="#about">
            <img src={HeaderImg} alt="amactive 2020" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default header;
