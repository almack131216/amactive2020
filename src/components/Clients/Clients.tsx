import * as React from "react";
import ImgLoading from "../../assets/img/loading.gif";
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
        const itemClass = "clients__item clients__item--" + (index + 1);

        const itemImg = item.img.src ? (
          <img
            className="clients__img top img-responsive"
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
      <section id={this.props.data.id} className={"title " + myClass}>
        {/* <h2>{this.props.data.title}</h2> */}
        <div className="clients">{myClients}</div>
      </section>
    );
  }
}

export default clients;
