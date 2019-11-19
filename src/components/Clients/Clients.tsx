import * as React from "react";
import ImgLoading from "../../assets/loading.gif";
import "./Clients.css";

class clients extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    // this.props.data.items[0].imr.src
    const myClass = this.props.data.class ? this.props.data.class : "";
    const myClients = this.props.data.items.map(
      (
        item: {
          title: string;
          img: { src: string | undefined; alt: string | undefined };
          text: string;
          url: string;
        },
        index: number
      ) => {
        const itemClass = "item__item item__item--" + (index + 1);

        const itemImg = item.img.src ? (
          <img
            className="item__img top img-responsive"
            src={item.img.src}
            alt={item.img.alt}
          />
        ) : (
          <img src={ImgLoading} />
        );

        return (
          <div className={itemClass} key={index}>
            {itemImg}
          </div>
        );
      }
    );

    return (
      <section id={this.props.data.id} className={myClass}>
        <div className="section-inner">
          <div className="css-grid clients">{myClients}</div>
        </div>
      </section>
    );
  }
}

export default clients;
