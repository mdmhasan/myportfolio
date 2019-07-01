import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

export default function Contact() {
  return (
    <>
    <Navbar/>
       <main id="contact">
    <h1 className="lg-heading">
      Contact
      <span className="text-secondary">Me</span>
    </h1>
    <h2 className="sm-heading">
      This is how you can reach me...
    </h2>
    <div className="boxes">
      <div>
        <span className="text-secondary">Email: </span> mdmehedi.h@hotmail.com
      </div>
      <div>
        <span className="text-secondary">Phone: </span> (+880) 1727-876393
      </div>
      <div>
        <span className="text-secondary">Address: </span> 11/1 shahid minar Road, kollyanpur, dhaka
      </div>
    </div>
  </main>
  <Footer/>
    </>
  )
}
