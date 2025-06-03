import React from 'react'
import { Link } from 'react-router-dom'

export default function Project() {
  return (
   <>
    <section id="projects" className="projects">
        <div className="container">
            <h2>Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <div className="project-image">
                        <div className="image-container">
                            <img src="assets/img/Ecom.webp" alt="E-com App" loading="lazy"/>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>E-Commerce Website</h3>
                        <p>A full-stack E-commerce website built with React, Spring Boot, and MySQL</p>
                        <div className="project-tech">
                            <span>Material UI</span>
                            <span>React</span>
                            <span>Redux</span>
                        </div>
                        <div className="project-links">
                            <Link to="#" className="btn btn-small">Live Demo</Link>
                            <Link to="https://github.com/A9856/AmazonWeb" className="btn btn-small btn-outline">Code</Link>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <div className="image-container">
                            <img src="assets/img/ChatAI.webp" alt="Contact Manager" loading="lazy"/>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>Real-time Chat App</h3>
                        <p>A web-based chat application with real-time messaging using WebSockets</p>
                        <div className="project-tech">
                            <span>Tailwind CSS</span>
                            <span>JavaScript</span>
                            <span>Reactjs with Vite</span>
                        </div>
                        <div className="project-links">
                            <Link to="#" className="btn btn-small">Live Demo</Link>
                            <Link to="https://github.com/A9856/chatboat" className="btn btn-small btn-outline">Code</Link>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <div className="image-container">
                            <img src="assets/img/WallW.webp" alt="Chat App" loading="lazy"/>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>Watch </h3>
                        <p>This wall watch project displays the real-time current time accurately, using a digital or analog interface for easy viewing.</p>
                        <div className="project-tech">
                            <span>HTML5</span>
                            <span>W3CSS</span>
                            <span>JavaScript</span>
                        </div>
                        <div className="project-links">
                            <Link to="#" className="btn btn-small">Live Demo</Link>
                            <Link to="https://github.com/A9856/Watch" className="btn btn-small btn-outline ">Code</Link>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <div className="image-container">
                            <img src="assets/img/Nws.webp" alt="Chat App" loading="lazy"/>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>News Website</h3>
                        <p>This news website fetches and displays the latest 15 days' headlines using a dummy API, offering updated and categorized news.</p>
                        <div className="project-tech">
                            <span>React</span>
                            <span>AWS S3</span>
                            <span>Spring Boot</span>
                        </div>
                        <div className="project-links">
                            <Link to="#" className="btn btn-small">Live Demo</Link>
                            <Link to="https://github.com/A9856/NewsWeb" className="btn btn-small btn-outline">Code</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   </>
  )
}

