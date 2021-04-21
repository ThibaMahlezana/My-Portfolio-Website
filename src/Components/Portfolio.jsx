import React from "react";
import PortfolioImage1 from "../Images/Thiba.png";

function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-filter">
            <span className="filter-item active" data-target="all">
              all
            </span>
            <span className="filter-item" data-target="web">
              web
            </span>
            <span className="filter-item" data-target="photoshop">
              photoshop
            </span>
            <span className="filter-item" data-target="mobile app">
              mobile app
            </span>
            <span className="filter-item" data-target="e-commerce">
              e commerce
            </span>
          </div>
        </div>

        <div className="row portfolio-items">
          <div className="portfolio-item">
            <div className="portfolio-item-inner outer-shadow">
              <div className="portfolio-item-img">
                <img src={PortfolioImage1} />
              </div>
              <span className="view-project">view project</span>
              <p className="portfolio-item-title">personal portfolio</p>
              <div className="portfolio-item-details">
                <div className="row">
                  <div className="description">
                    <h3>Project Brief:</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex
                    </p>
                  </div>
                  <div className="info">
                    <h3>Project info</h3>
                    <ul>
                      <li>
                        Date - <span>2020</span>
                      </li>
                      <li>
                        Client - <span>xyz</span>
                      </li>
                      <li>
                        Tools - <span>html, css, javascript</span>
                      </li>
                      <li>
                        Web - <span>active link</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-item">
            <div className="portfolio-item-inner outer-shadow">
              <div className="portfolio-item-img">
                <img src={PortfolioImage1} />
              </div>
              <span className="view-project">view project</span>
              <p className="portfolio-item-title">personal portfolio</p>
              <div className="portfolio-item-details">
                <div className="row">
                  <div className="description">
                    <h3>Project Brief:</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex
                    </p>
                  </div>
                  <div className="info">
                    <h3>Project info</h3>
                    <ul>
                      <li>
                        Date - <span>2020</span>
                      </li>
                      <li>
                        Client - <span>xyz</span>
                      </li>
                      <li>
                        Tools - <span>html, css, javascript</span>
                      </li>
                      <li>
                        Web - <span>active link</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-item">
            <div className="portfolio-item-inner outer-shadow">
              <div className="portfolio-item-img">
                <img src={PortfolioImage1} />
              </div>
              <span className="view-project">view project</span>
              <p className="portfolio-item-title">personal portfolio</p>
              <div className="portfolio-item-details">
                <div className="row">
                  <div className="description">
                    <h3>Project Brief:</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex
                    </p>
                  </div>
                  <div className="info">
                    <h3>Project info</h3>
                    <ul>
                      <li>
                        Date - <span>2020</span>
                      </li>
                      <li>
                        Client - <span>xyz</span>
                      </li>
                      <li>
                        Tools - <span>html, css, javascript</span>
                      </li>
                      <li>
                        Web - <span>active link</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
