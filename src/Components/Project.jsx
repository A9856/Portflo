import React from 'react'
import { Link } from 'react-router-dom'
import Ecom from "../assests/img/Ecom.webp"
import chatbt  from "../assests/img/chatbt.webp"
import Nws  from "../assests/img/News.webp"
import Wall  from "../assests/img/WallW.webp"
import weather from "../assests/img/Weather.webp"
import put from "../assests/img/put.webp"
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
                            <img src={Ecom} alt="E-com App" loading="lazy"/>
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
                            <Link to="https://a9856.github.io/AmazonWeb/" className="btn btn-small">Live Demo</Link>
                            <Link to="https://github.com/A9856/AmazonWeb" className="btn btn-small btn-outline">Code</Link>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <div className="image-container">
                            <img src={chatbt} alt="Real Time Chat" loading="lazy"/>
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
                            <Link to="https://a9856.github.io/chtbt/" className="btn btn-small">Live Demo</Link>
                            <Link to="https://github.com/A9856/chtbt" className="btn btn-small btn-outline">Code</Link>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <div className="image-container">
                            <img src={Wall} alt="Wall Watch" loading="lazy"/>
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
                            <Link to="https://a9856.github.io/Watch/" className="btn btn-small">Live Demo</Link>
                            <Link to="https://github.com/A9856/Watch" className="btn btn-small btn-outline ">Code</Link>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <div className="image-container">
                            <img src={Nws}alt="News" loading="lazy"/>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>News Website</h3>
                        <p>This news website fetches and displays the latest 15 days' headlines using a dummy API, offering updated and categorized news.</p>
                        <div className="project-tech">
                            <span>React</span>
                            <span>MaterialUI</span>
                            <span>Bootstrap</span>
                            <span>JavaScript</span>
                        </div>
                        <div className="project-links">
                            <Link to="https://a9856.github.io/IndiaNews/" className="btn btn-small">Live Demo</Link>
                            <Link to="https://github.com/A9856/IndiaNews" className="btn btn-small btn-outline">Code</Link>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <div className="image-container">
                            <img src={weather} alt="Weather" loading="lazy"/>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>Weather App</h3>
                        <p>A weather app provides real-time weather updates, forecasts, temperature, humidity, and wind details based on user location or selected cities. It helps users plan their day by displaying current conditions and future weather predictions using APIs like OpenWeatherMap or WeatherAPI with an intuitive, responsive user interface.</p>
                        <div className="project-tech">
                            <span>React + vite</span>
                            <span>JavaScript</span>
                        </div>
                        <div className="project-links">
                            <Link to="https://a9856.github.io/CodVedaIntrnWeatherapp/" className="btn btn-small">Live Demo</Link>
                            <Link to="https://github.com/A9856/CodVedaIntrnWeatherapp" className="btn btn-small btn-outline">Code</Link>
                        </div>
                    </div>
                </div>
                 <div className="project-card">
                    <div className="project-image">
                        <div className="image-container">
                            <img src={put} alt="Weather" loading="lazy"/>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>FeedBack WebPage</h3>
                        <p>A feedback page collects user opinions on products, including feedback text, rating, and amount spent. It captures personal details like name, email, and state for better service insights. Data is submitted using a PATCH request to update existing records, enabling continuous improvement based on real user experiences and regional preferences.</p>
                        <div className="project-tech">
                            <span>React + vite</span>
                            <span>Redux</span>
                            <span>JavaScript</span>
                        </div>
                        <div className="project-links">
                            <Link to="https://a9856.github.io/PUT-PATCH-Project/" className="btn btn-small">Live Demo</Link>
                            <Link to="https://github.com/A9856/PUT-PATCH-Project" className="btn btn-small btn-outline">Code</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   </>
  )
}

