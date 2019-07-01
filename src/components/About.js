import React from 'react'
import img from '../assets/img/limon.png'
import Footer from './Footer';
import Navbar from './Navbar'

export default function About() {
  return (
    <>
    <Navbar/>
    <main id="about">
    <h1 className="lg-heading">
      About
      <span className="text-secondary">Me</span>
    </h1>
    <h2 className="sm-heading">
      Let me tell you a few things...
    </h2>
    <div className="about-info">
      <img src={img} alt="mehedi hasan" className="bio-image"/>

      <div className="bio">
        <h3 className="text-secondary">BIO</h3>
        <p>My Name is Mehedi Hasan and i am Still Working in <strong>Interactive Wing</strong> </p>
      </div>

      

      <div className="job job-1">
        <h3>Interactive wings</h3>
        <h6>Front End Developer</h6>
        <p>Alot of worked in to desing many pages and websites for Interactive Wings and Worked on many tools and new tech to used in Front-end-Development.</p>
      </div>


      <div className="job job-2">
        <h3>Online Working</h3>
        <h6>Graphic Designer</h6>
        <p>Online Working to design logo,icons and Websites templates and many more Worked include in Our Resume.</p>
      </div>

      <div className="job job-3">
        <h3>udemy  training Course </h3>
        <h6>ReactJS and redux </h6>
        <p>I was first learning web development and software engineering, I used courses, tutorials, stackoverflow threads, and public github projects. It was invigorating - teaching myself the skills that would start a career</p>
      </div>
    </div>
  </main>
  <Footer/>
  </>
  )
}
