import * as React from "react";
import "./Portfolio.css";
import { Example } from "./ReactGestureGallery";

class portfolio extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    // this.props.data.items[0].imr.src
    const myClass = this.props.data.class ? this.props.data.class : "";
    const myPortfolio = this.props.data.items.map(
      (
        item: {
          title: string;
          img: { src: string | undefined; alt: string | undefined };
          text: string;
          url: string;
        },
        index: number
      ) => {
        const itemClass = "gallery__item gallery__item--" + (index + 1);

        return (
          <div className={itemClass} key={index}>
            <img
              className="gallery__img top img-responsive"
              src={item.img.src}
              alt={item.img.alt}
            />
            {/* <ul className="img-text-behind effect">
              <li className="li-text">
                <h2 className="zero">{item.title}</h2>
                <p className="zero">[{item.text}]</p>
              </li>
              <li className="li-img">
                <a
                  href={item.url}
                  target="_blank"
                  title="Open this website in new window"
                >
                  <img
                    className="top img-responsive"
                    src={item.img.src}
                    alt={item.img.alt}
                  />
                </a>
              </li>
            </ul> */}
          </div>
        );
      }
    );

    return (
      <section id={this.props.data.id} className={"title " + myClass}>
        <h2>{this.props.data.title}</h2>

        {<Example />}

        <div className="gallery portfolio">{myPortfolio}</div>
      </section>
    );
  }
}

export default portfolio;
