import React from 'react';
import pro1 from '../assets/img/projects/project1.jpg';
import pro2 from '../assets/img/projects/project2.jpg';
import pro3 from '../assets/img/projects/project3.jpg';
import pro4 from '../assets/img/projects/project4.jpg';
import pro5 from '../assets/img/projects/project5.jpg';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import { FaEye, FaGithub } from 'react-icons/fa';

export default function Work() {
  return (
    <>
      <Navbar />
      <main id='work'>
        <h1 className='lg-heading'>
          My
          <span className='text-secondary'>Work</span>
        </h1>
        <h2 className='sm-heading'>Check out some of my projects...</h2>
        <div className='projects'>
          <div className='item'>
            
              <Link to='#!'>
                <img src={pro1} alt='Project' />
              </Link>
              <div className='con'>
                <h3>html5, css3</h3>
              </div>
            <Link to='#' className='btn-light'>
              <FaEye /> Project
            </Link>
            <Link to='#' className='btn-dark'>
              <FaGithub /> Github
            </Link>
          </div>
          <div className='item'>
            <Link to='#!'>
              <img src={pro2} alt='Project' />
            </Link>
            <div className="con">
              <h3>css</h3></div>
            
            <Link to='#' className='btn-light'>
              <FaEye /> Project
            </Link>
            <Link to='#' className='btn-dark'>
              <FaGithub /> Github
            </Link>
          </div>
          <div className='item'>
            <Link to='#!'>
              <img src={pro3} alt='Project' />
            </Link>
            <Link to='#' className='btn-light'>
              <FaEye /> Project
            </Link>
            <Link to='#' className='btn-dark'>
              <FaGithub /> Github
            </Link>
          </div>

          <div className='item'>
            <Link to='#!'>
              <img src={pro4} alt='Project' />
            </Link>
            <Link to='#' className='btn-light'>
              <FaEye /> Project
            </Link>
            <Link to='#' className='btn-dark'>
              <FaGithub /> Github
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
