import React from 'react'

export default function Skills() {
  return (
    <>
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-container">

            {/* Frontend */}
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li data-percent="90">
                  <i className="fab fa-html5"></i> HTML
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "90%" }}></div>
                  </div>
                  <span classNameName="val text-light">90%</span>
                </li>
                <li data-percent="85">
                  <i className="fab fa-css3-alt"></i> CSS
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "85%" }}></div>
                  </div>
                  <span classNameName="val text-light">85%</span>
                </li>
                <li data-percent="80">
                  <i className="fab fa-js"></i> JavaScript
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "70%" }}></div>
                  </div>
                  <span classNameName="val text-light">70%</span>
                </li>
                <li data-percent="50">
                  <i className="fab fa-react"></i> ReactJs
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "50%" }}></div>
                    <span classNameName="val text-light">50%</span>
                  </div>
                  <span classNameName="val text-light">50%</span>
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li data-percent="85">
                  <i className="devicon-mongodb-plain"></i> MongoDB
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "60%" }}></div>
                  </div>
                  <span classNameName="val text-light">60%</span>
                </li>
                <li data-percent="80">
                  <i className="fas fa-leaf"></i> Express Js
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "50%" }}></div>
                  </div>
                  <span classNameName="val text-light">50%</span>
                </li>
                <li data-percent="75">
                  <i className="fab fa-node-js"></i> NodeJs
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "50%" }}></div>
                  </div>
                  <span classNameName="val text-light">50%</span>
                </li>
              </ul>
            </div>

            {/* Other */}
            <div className="skill-category">
              <h3>Other</h3>
              <ul>

                <li data-percent="70">
                  <i className="fab fa-git-alt"></i> Git
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "70%" }}></div>
                  </div>
                  <span classNameName="val text-light">70%</span>
                </li>
                <li data-percent="75">
                  <i className="fas fa-server"></i> REST APIs
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "75%" }}></div>
                  </div>
                  <span classNameName="val text-light">75%</span>
                </li>

              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* <section id="skills" classNameName="skills section aa">
                <div classNameName="container section-title" data-aos="fade-up">
                    <h2>Skills</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div classNameName="container" data-aos="fade-up" data-aos-delay="100">
                    <div classNameName="row skills-content skills-animation">
                        <div classNameName="col-lg-6">
                            <div classNameName="progress">
                                <span classNameName="skill"><i className="fab fa-html5 fs-4 icon"></i><span classNameName='fs-4'>HTML</span><i classNameName="val text-light">100%</i></span>
                                <div classNameName="progress-bar-wrap">
                                    <div classNameName="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}></div>
                                </div>
                            </div>
                            <div classNameName="progress">
                                <span classNameName="skill"><i className="fab fa-css3-alt fs-4 icon"></i><span classNameName='fs-4'>CSS</span> <i classNameName="val text-light">90%</i></span>
                                <div classNameName="progress-bar-wrap">
                                    <div classNameName="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                                </div>
                            </div>
                            <div classNameName="progress">
                                <span classNameName="skill"><i className="fab fa-js fs-4 icon"></i><span classNameName='fs-4'>JavaScript</span> <i classNameName="val text-light">75%</i></span>
                                <div classNameName="progress-bar-wrap">
                                    <div classNameName="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-lg-6">
                            <div classNameName="progress">
                                <span classNameName="skill"><i className="fab fa-react fs-4 icon"></i><span classNameName='fs-4'>React</span> <i classNameName="val text-light">60%</i></span>
                                <div classNameName="progress-bar-wrap">
                                    <div classNameName="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}></div>
                                </div>
                            </div>
                            <div classNameName="progress">
                                <span classNameName="skill"><i className="fas fa-server fs-4 icon"></i><span classNameName='fs-4'>REST APIs</span> <i classNameName="val text-light">40%</i></span>
                                <div classNameName="progress-bar-wrap">
                                    <div classNameName="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}></div>
                                </div>
                            </div>
                            <div classNameName="progress">
                                <span classNameName="skill"><i className="fab fa-docker fs-4 icon"></i><span classNameName='fs-4'>Cocker</span> <i classNameName="val text-light">55%</i></span>
                                <div classNameName="progress-bar-wrap">
                                    <div classNameName="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{ width: "55%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
    </>
  )
}
