import React from 'react'
import ric from "../assests/img/ric.jpg"
import ric1 from "../assests/img/ric.jpg"
import apcs from "../assests/img/apcs.jpeg"
import PG from "../assests/img/PGclg.jpg"
export default function Education() {
  return (
   <>
     <section id="education" className="education">
        <div className="container">
            <h2>Education</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-date">2015 - 2017</div>
                    <div className="timeline-content">
                        <img src={ric1} alt="Rastriya Intermediate College" className="education-img" loading="lazy"/>
                        <h3>Rastriya Intermediate College</h3>
                        <p>10th Grade - 75%</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-date">2017 - 2019</div>
                    <div className="timeline-content">
                        <img src={ric} alt="Rastriya Intermediate College" className="education-img" loading="lazy"/>
                        <h3>Rastriya Intermediate College</h3>
                        <p>12th Grade - 60%</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-date">2021 - 2022</div>
                    <div className="timeline-content">
                        <img src={apcs} alt="NIELIT" className="education-img" loading="lazy"/>
                        <h3> APCS College Of IT & Management (NIELIT) </h3>
                        <p>O'Level Diploma</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-date">2022 - 2025</div>
                    <div className="timeline-content">
                        <img src={PG} alt="Allahabad University" className="education-img" loading="lazy"/>
                        <h3>Allahabad University</h3>
                        <p>Bachelor Of Commerce</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-date">2025 - Persent</div>
                    <div className="timeline-content">
                        <img src={PG} alt="Allahabad University" className="education-img" loading="lazy"/>
                        <h3>Allahabad University</h3>
                        <p>MBA in Information Technology (IT)</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}
