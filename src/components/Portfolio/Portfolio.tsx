import * as React from "react";

const portfolio = () => {
  return (
    <section id="portfolio" className="section-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 text-center">
            <h2>Portfolio</h2>
            <hr className="small" />

            <div className="row">
              <div className="col-xxs-12-down col-xs-6">
                <ul className="demo-2 effect">
                  <li className="li-text">
                    <h2 className="zero">EnergieDirect.nl</h2>
                    <p className="zero">[Angular FE + SASS CSS | 2018]</p>
                  </li>
                  <li>
                    <a
                      href="https://www.energiedirect.nl/"
                      target="_blank"
                      title="Open this website in new window"
                    >
                      <img
                        className="top img-responsive"
                        src="img/portfolio/energie-direct-nl.jpg"
                        alt="Energie Direct"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xxs-12-down col-xs-6">
                <ul className="demo-2 effect">
                  <li className="li-text">
                    <h2 className="zero">ClassicAndSportscar.ltd.uk</h2>
                    <p className="zero">[Wordpress, bespoke theme | Dec 19]</p>
                  </li>
                  <li>
                    <a
                      href="https://classicandsportscar.ltd.uk/_wp190503/"
                      target="_blank"
                      title="Open this website in new window"
                    >
                      <img
                        className="top img-responsive"
                        src="img/portfolio/classic-and-sportscar.jpg"
                        alt="Classic and Sportscar Centre"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xxs-12-down col-xs-6">
                <ul className="demo-2 effect">
                  <li className="li-text">
                    <h2 className="zero">MaltonCoachworks.co.uk</h2>
                    <p className="zero">
                      [Angular FE + Bespoke PHP MySql CMS | 2017]
                    </p>
                  </li>
                  <li>
                    <a
                      href="http://www.maltoncoachworks.co.uk"
                      target="_blank"
                      title="Open this website in new window"
                    >
                      <img
                        className="top img-responsive"
                        src="img/portfolio/malton-coachworks.jpg"
                        alt="Malton Coachworks"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xxs-12-down col-xs-6">
                <ul className="demo-2 effect">
                  <li className="li-text">
                    <h2 className="zero">BestFoodPrague.com</h2>
                    <p className="zero">[Bespoke PHP MySql CMS | 2016]</p>
                  </li>
                  <li>
                    <a
                      href="http://www.bestfoodprague.com"
                      target="_blank"
                      title="Open this website in new window"
                    >
                      <img
                        className="top img-responsive"
                        src="img/portfolio/best-food-prague.jpg"
                        alt="Best Food Prague"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="col-xxs-12-down col-xs-6"
                id="imgGallery_zettabox"
              >
                <ul className="demo-2 effect">
                  <li className="li-text">
                    <h2 className="zero">Zettabox.com</h2>
                    <p className="zero">
                      [Lead designer & FE developer | 2015]
                    </p>
                  </li>
                  <li>
                    <a
                      className="gallery-trigger"
                      href="img/portfolio/zettabox/homepage.jpg"
                      target="_blank"
                      title="Zettabox Homepage"
                      data-gallery="#zb"
                    >
                      <img
                        className="top img-responsive"
                        src="img/portfolio/logo-zettabox.jpg"
                        alt="Zettabox"
                      />
                    </a>
                    <a
                      className="display-none"
                      href="img/portfolio/zettabox/pricing-page.jpg"
                      title="Zettabox"
                      data-gallery="#zb"
                    ></a>
                    <a
                      className="display-none"
                      href="img/portfolio/zettabox/file-manager.jpg"
                      title="Zettabox"
                      data-gallery="#zb"
                    ></a>
                    <a
                      className="display-none"
                      href="img/portfolio/zettabox/file-manager_selected.jpg"
                      title="Zettabox"
                      data-gallery="#zb"
                    ></a>
                    <a
                      className="display-none"
                      href="img/portfolio/zettabox/print/A4-or-A5_general.jpg"
                      title="Zettabox"
                      data-gallery="#zb"
                    ></a>
                    <a
                      className="display-none"
                      href="img/portfolio/zettabox/print/business-cards.jpg"
                      title="Zettabox"
                      data-gallery="#zb"
                    ></a>
                    <a
                      className="display-none"
                      href="img/portfolio/zettabox/print/popup-banners.jpg"
                      title="Zettabox"
                      data-gallery="#zb"
                    ></a>
                    <a
                      className="display-none"
                      href="img/portfolio/zettabox/print/t-shirts.jpg"
                      title="Zettabox"
                      data-gallery="#zb"
                    ></a>
                    <a
                      className="display-none"
                      href="img/portfolio/zettabox/print/recruiting.jpg"
                      title="Zettabox"
                      data-gallery="#zb"
                    ></a>
                  </li>
                </ul>
              </div>
              <div className="col-xxs-12-down col-xs-6" id="imgGallery_ps">
                <ul className="demo-2 effect">
                  <li className="li-text">
                    <h2 className="zero">PSautoart.com</h2>
                    <p className="zero">[Bespoke PHP MySql CMS | 2010]</p>
                  </li>
                  <li>
                    <a
                      className="gallery-trigger"
                      href="img/portfolio/ps-autoart/PS_autoart_00_homepage-0.jpg"
                      title="PS Autoart"
                      data-gallery="#ps"
                    >
                      <img
                        className="top img-responsive"
                        src="img/portfolio/logo-paul-stephens-badge.jpg"
                        alt="Zettabox"
                      />
                    </a>
                    <a
                      className="display-none"
                      href="img/portfolio/ps-autoart/PS_autoart_00_homepage-1.jpg"
                      title="PS Autoart"
                      data-gallery="#ps"
                    ></a>
                    <a
                      className="display-none"
                      href="img/portfolio/ps-autoart/PS_autoart_00_homepage-2.jpg"
                      title="PS Autoart"
                      data-gallery="#ps"
                    ></a>
                    <a
                      className="display-none"
                      href="img/portfolio/ps-autoart/PS_autoart_01_car-0.jpg"
                      title="PS Autoart"
                      data-gallery="#ps"
                    ></a>
                    <a
                      className="display-none"
                      href="img/portfolio/ps-autoart/PS_autoart_01_car-1.jpg"
                      title="PS Autoart"
                      data-gallery="#ps"
                    ></a>
                    <a
                      className="display-none"
                      href="img/portfolio/ps-autoart/PS_autoart_01_car-2.jpg"
                      title="PS Autoart"
                      data-gallery="#ps"
                    ></a>
                    <a
                      className="display-none"
                      href="img/portfolio/ps-autoart/PS_autoart_01_car-3.jpg"
                      title="PS Autoart"
                      data-gallery="#ps"
                    ></a>
                    <a
                      className="display-none"
                      href="img/portfolio/ps-autoart/PS_autoart_01_car-4.jpg"
                      title="PS Autoart"
                      data-gallery="#ps"
                    ></a>
                    <a
                      className="display-none"
                      href="img/portfolio/ps-autoart/PS_autoart_02_press-0.jpg"
                      title="PS Autoart"
                      data-gallery="#ps"
                    ></a>
                    <a
                      className="display-none"
                      href="img/portfolio/ps-autoart/PS_autoart_02_press-1.jpg"
                      title="PS Autoart"
                      data-gallery="#ps"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- /.row (nested) --> */}
            {/* <!--<a href="#" className="btn btn-dark">View More Items</a>--> */}
          </div>
          {/* <!-- /.col-lg-10 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};

export default portfolio;
