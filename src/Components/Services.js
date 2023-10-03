import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      <h1 className='ServicesHeading' style={{ marginTop: "50px", marginLeft: "470px", fontWeight: "700" }}>Get to know the best Services</h1>
      <div className='services'>
        <div className='service1'>
          <div className='img2'>
            <img src='./images/image10.png' width={100} />
          </div>
          <Link to="LogoDesign" style={{ textDecoration: "none", color: "black" }}><h6>Logo Design / Brand Identity</h6></Link>
          <p style={{color:"#6d6e70" , textAlign:"center"}}>We design logos that become the talk of the town. We take simple ideas and turn them into purposeful custom design logos.</p>
        </div>
        <div className='service2'>
          <div className='img3'>
            <img src='./images/image11.png' width={100} />
          </div>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}><h6>Business & Advertising</h6></Link>
          <p style={{color:"#6d6e70" , textAlign:"center" }}>We believe in turning your brand stories into best business advertisements that can both attract and convert potential clients.</p>
        </div>
        <div className='service3'>
          <div className='img4'>
            <img src='./images/image12.png' width={100} />
          </div>
          <Link to="/WebsiteApp" style={{ textDecoration: "none", color: "black" }}><h6>Web Design / Development</h6></Link>
          <p style={{color:"#6d6e70" , textAlign:"center" }}>Not a typical website design company, at Brands Design we give full liberty to our designers so that they can come up with a creative & exclusive web.</p>
        </div>
        <div className='service4'>
          <div className='img5'>
            <img src='./images/image13.png' width={100} />
          </div>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}><h6>Marketing Material Design</h6></Link>
          <p style={{color:"#6d6e70" , textAlign:"center" }}>We create best marketing material designs including, label, flyers, signage, packaging, and everything that can make an impression of your brand.</p>
        </div>
        <div className='service5'>
          <div className='img6'>
            <img src='./images/image14.png' />
          </div>
          <Link to="SEO" style={{ textDecoration: "none", color: "black" }}><h6>Search Engine Optimization</h6></Link>
          <p style={{color:"#6d6e70" , textAlign:"center" }}>We craft unique optimization strategies for each business and make sure your website is well optimized to jump on higher ranks each time.</p>
        </div>
        <div className='service6'>
          <div className='img7'>
            <img src='./images/image15.png' />
          </div>
          <Link to="SocialMediaMa" style={{ textDecoration: "none", color: "black" }}><h6>Social Media Marketing</h6></Link>
          <p style={{color:"#6d6e70" , textAlign:"center" }}>We work as your partner and help you improve customer engagement and loyalty, brand recognition, sales, and more.</p>
        </div>
      </div>
    </>
  )
}

export default Services