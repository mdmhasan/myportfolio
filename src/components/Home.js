import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
export default function Home() {
  return (
    <>
    <Navbar/>
      <main id='home'>
        <h1 className='lg-heading'>
          mehedi
          <span className='text-secondary'>hasan</span>
        </h1>
        <h2 className='sm-heading'>
          Web Developer, programmer & Designer 
        </h2>
        <div className='icons'>
          <Link to='#'>
            <i className='fab fa-twitter fa-2x' />
          </Link>
          <Link to=''>
            <i className='fab fa-facebook fa-2x' />
          </Link>
          <Link to=''>
            <i className='fab fa-linkedin fa-2x' />
          </Link>
          <Link to=''>
            <i className='fab fa-github fa-2x' />
          </Link>
        </div>
      </main>
    </>
  );
}
