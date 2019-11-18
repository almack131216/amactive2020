import * as React from "react";
import "./Portfolio.css";
import ImgGallery from "./ReactGestureGallery";

class portfolio extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    // this.props.data.items[0].imr.src
    const custBtnHtml = <img src={this.props.data.items[0].img.src} />;
    const myClass = this.props.data.class ? this.props.data.class : "";
    const myPortfolio = this.props.data.items.map(
      (
        item: {
          title: string;
          img: { src: string | undefined; alt: string | undefined };
          text: string;
          url: string;
          slides: [{ src: string; alt: string }];
        },
        index: number
      ) => {
        const itemClass = "gallery__item gallery__item--" + (index + 1);
        const itemImgElement = (
          <img
            className="gallery__img top img-responsive"
            src={item.img.src}
            alt={item.img.alt}
          />
        );

        const itemImg = item.url ? (
          itemImgElement
        ) : (
          <ImgGallery
            images={item.slides}
            click={true}
            custBtn={itemImgElement}
          />
        );

        return (
          <div className={itemClass} key={index}>
            {itemImg}
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

        {/* <ImgGallery
          images={this.props.data.items}
          click={true}
          custBtn={custBtnHtml}
        /> */}

        <div className="gallery portfolio">{myPortfolio}</div>
      </section>
    );
  }
}

export default portfolio;
