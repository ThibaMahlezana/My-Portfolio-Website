import React from "react";
import "../styles.css";
import HomePic from "../Images/Thiba.png";

function Home() {
  return (
    <section className="home-section section">
      <div className="effect-wrap">
        <div className="effect effect-1"></div>
        <div className="effect effect-2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="effect effect-3"></div>
        <div className="effect effect-4"></div>
        <div className="effect effect-5">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="container">
        <div className="row full-screen align-items-center">
          <div className="home-text">
            <p>Hello</p>
            <h2>I am Thiba</h2>
            <h1>Software Developer</h1>
            <a className="btn-1 outer-shadow hover-in-shadow">More About Me</a>
          </div>
          <div className="home-img">
            <div className="img-box inner-shadow">
              <img className="outer-shadow" src={HomePic} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
