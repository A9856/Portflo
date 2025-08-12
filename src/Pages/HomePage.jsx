import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from '../Components/About';
import Resume from '../Components/Resume';
import Skills from '../Components/Skills';
import ContactUsPage from './ContactUsPage';
import Project from '../Components/Project';
import Education from '../Components/Education';
import { Link } from 'react-router-dom';
import bike1 from "../assests/img/bike1.webp"
import resume from "../assests/img/Resume.jpeg"
export default function HomePage() {
  const typedRef = useRef(null);
  useEffect(() => {

    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

    const typed = new Typed(typedRef.current, {
      strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });


    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>

      <section id="hero" className="hero">
        <div className="container1">
          <div className="hero-content">
            <h2>Hello, I'm <br /><span>Adil Khan</span></h2>
            <p>I'm a skilled <strong>Mern Full Stack Developer</strong> with expertise in building scalable web applications using Java and Spring Boot.</p>
            <p className="text-light">
              I'm <span ref={typedRef}></span>
            </p>
            <div className="hero-buttons">
              <Link to={resume} className="btn btn-primary">Download Resume</Link>
              <Link to="https://github.com/" className="btn btn-secondary">View Projects</Link>
            </div>
            <div className="social-links">
              <Link to="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </Link>
              <Link to="https://www.linkedin.com/in/adil-khan-01b96627b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link to="https://x.com/AdilKha38643869?t=-zxImUYht3ZD-g15cI94_g&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={bike1} alt="Adil" />
            <div className="tech-icons">
              <i className="fab fa-node-js"></i>
              <i className="fab fa-js"></i>
              <i className="fab fa-react"></i>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Resume />
      <Project />
      <Education />
      <ContactUsPage />
    </>
  );
}

