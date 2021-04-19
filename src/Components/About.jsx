import React from "react";
import HomePic from "../Images/Thiba.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section className="about-section section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>About me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box inner-shadow">
              <img className="outer-shadow" src={HomePic} />
            </div>
            <div className="social-links">
              <a className="outer-shadow hover-in-shadow">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="outer-shadow hover-in-shadow">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="outer-shadow hover-in-shadow">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="outer-shadow hover-in-shadow">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="about-info">
            <p>
              <span>
                Hi! My name is Thiba Mahlezana. I am a Software Developer
              </span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a className="btn-1 outer-shadow hover-in-shadow">Download CV</a>
            <a className="btn-1 outer-shadow hover-in-shadow">Hire Me</a>
          </div>
        </div>
        /** tabs **/
        <div className="row">
          <div className="about-tabs">
            <span
              className="tab-item outer-shadow active"
              data-target=".skills"
            >
              skills
            </span>
            <span className="tab-item" data-target=".experience">
              experience
            </span>
            <span className="tab-item" data-target=".education">
              education
            </span>
          </div>
        </div>
        /** skills tab **/
        <div className="row">
          <div className="skills tab-content">
            <div className="row">
              <div className="skill-item">
                <p>JavaScript</p>
                <div className="progress inner-shadow">
                  <div className="progress-bar">
                    <span>50%</span>
                  </div>
                </div>
              </div>

              <div className="skill-item">
                <p>Python</p>
                <div
                  className="progress-bar"
                  style={{ backgroundColor: "lightblue" }}
                >
                  <span>50%</span>
                </div>
              </div>

              <div className="skill-item">
                <p>Python</p>
                <div className="progress-bar">
                  <span>50%</span>
                </div>
              </div>

              <div className="skill-item">
                <p>Python</p>
                <div className="progress-bar">
                  <span>50%</span>
                </div>
              </div>

              <div className="skill-item">
                <p>Python</p>
                <div className="progress-bar">
                  <span>50%</span>
                </div>
              </div>

              <div className="skill-item">
                <p>Python</p>
                <div className="progress-bar">
                  <span>50%</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="experience tab-content">
                <div className="row">
                  <div className="timeline">
                    <div className="row">
                      <div className="timeline-item">
                        <div className="timeline-item-inner outer-shadow">
                          <div className="icon">
                            <FontAwesomeIcon icon={faBriefcase} />
                          </div>
                          <span>Sep, 2018 - Present</span>
                          <h3>full stack developer</h3>
                          <h4>Company name</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo
                          </p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-item-inner outer-shadow">
                          <div className="icon">
                            <FontAwesomeIcon icon={faBriefcase} />
                          </div>
                          <span>Sep, 2018 - Present</span>
                          <h3>full stack developer</h3>
                          <h4>Company name</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo
                          </p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-item-inner outer-shadow">
                          <div className="icon">
                            <FontAwesomeIcon icon={faBriefcase} />
                          </div>
                          <span>Sep, 2018 - Present</span>
                          <h3>full stack developer</h3>
                          <h4>Company name</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="education tab-content">
            <div className="row">
              <div className="experience tab-content">
                <div className="row">
                  <div className="timeline">
                    <div className="row">
                      <div className="timeline-item">
                        <div className="timeline-item-inner outer-shadow">
                          <div className="icon">
                            <FontAwesomeIcon icon={faGraduationCap} />
                          </div>
                          <span>2012 - 2014</span>
                          <h3>ND Information Technology</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo
                          </p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-item-inner outer-shadow">
                          <div className="icon">
                            <FontAwesomeIcon icon={faGraduationCap} />
                          </div>
                          <span>Sep, 2018 - Present</span>
                          <h3>full stack developer</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo
                          </p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-item-inner outer-shadow">
                          <div className="icon">
                            <FontAwesomeIcon icon={faGraduationCap} />
                          </div>
                          <span>Sep, 2018 - Present</span>
                          <h3>full stack developer</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo
                          </p>
                        </div>
                      </div>
                    </div>
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

export default About;
