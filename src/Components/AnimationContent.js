import React from 'react'
import { Link } from 'react-router-dom'

const AnimationContent = () => {
  return (
   <div className='bx1'>
    <div className='box1'>
      <div className='text1'>
        <h7 style={{color:"white"}}>The # 1 choice for logo design company</h7>
        <h1 style={{fontWeight: "700",color:"white"}}>Get a custom logo design by Brands Design.</h1>
        <Link to="/Pricing"><button className='btn3 btn btn-dark'>Get Started <i className="fa2 fa-solid fa-angle-right"></i></button></Link>
      </div>
    </div>
    <div className='box1 animation'>
      <div className='pic'>
      <div className='pic1'>
        <img src='./images/image1.jpg' width={240}/>
      </div>
      <div className='pic2'>
        <img src='./images/image2.jpg' width={240}/>
      </div>
      <div className='pic3'>
        <img src='./images/image3.jpg' width={240}/>
      </div>
      <div className='pic4'>
      <img src='./images/image4.jpg' width={240}/>
      </div>
      </div>
    </div>
   </div>
  )
}

export default AnimationContent