import React from "react";
import "./About.css";
import portfolioimg from "../assets/img/portfolio/portfolio-1.webp";
import Certificates from "./Certificates";

// Import the Microsoft Teams icon
import { PiMicrosoftTeamsLogoFill } from "react-icons/pi";

function About() {
  return (
    <div>
      <main className="main">
        <section id="about" className="about section light-background">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <div className="title-shape">
              <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
            <p>Hello! I'm Project Planner </p>
          </div>
          {/* End Section Title */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-center">
              <div
                className="col-lg-6 position-relative"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="about-image">
                  <img
                    src={portfolioimg}
                    alt="karthikeyan"
                    className="img-fluid rounded-4"
                  />
                </div>
              </div>

              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="about-content">
                  <span className="subtitle">About Karthikeyan PMP® FSBI®</span>

                  <h2>Project Controls & Planning Engineer</h2>

                  <p className="lead mb-4">
                    Project Controls & Planning Engineer with 5+ years of experience in Oil & Gas, EPC environments across India and Singapore, 
                    specializing in logic-driven Primavera P6 scheduling, critical path analysis, and earned value management. 
                    Proficient in WBS decomposition, longest path analysis, float analysis, delay analysis, and Power BI / Python automation. 
                    Holds PMP® from PMI with a proven track record on multi-million-dollar projects for Baker Hughes (USA) and Kuraray Asia Pacific. 
                    A precision-driven professional committed to proactive schedule risk management and delivering project objectives on time and within scope.
                  </p>

                  <div className="personal-info">
                    <div className="row g-4">
                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Name</span>
                          <span className="value">Karthikeyan PMP® FSBI®</span>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Phone</span>
                          <span className="value">+91 7397597561</span>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Phone</span>
                          <span className="value">+65 89268246</span>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Email</span>
                          <span className="value">Karthikeyanp3198@gmail.com</span>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Occupation</span>
                          <span className="value">Project Controls / Planning Engineer</span>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="info-item">
                          <span className="label">Nationality</span>
                          <span className="value">Indian</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="social"
                    style={{ marginTop: "20px", fontSize: "1.5rem" }}
                  >
                    <a
                      href="https://teams.microsoft.com/l/chat/0/0?users=karthikeyanp3198@gmail.com"
                      target="_blank"
                      title="Chat on Teams"
                      rel="noopener noreferrer"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <PiMicrosoftTeamsLogoFill />
                    </a>

                    <a href="mailto:karthikeyanp3198@gmail.com" title="Send Email">
                      <i className="fas fa-envelope"></i>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/karthikeyan-pandian/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Certificates />
    </div>
  );
}

export default About;
