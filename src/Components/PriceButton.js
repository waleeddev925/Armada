import React from 'react'
import { Link } from 'react-router-dom'

const PriceButton = () => {
  return (
    <div className='PriceButton container'>
        <div className='row mx-5 p-3'>
               <div className='flex1'>
                <h1 style={{fontWeight:"700", fontSize:"29px"}}>Discover our pricing plans and start saving today!</h1>
                <p style={{fontSize:"13px" , fontWeight:"600" , opacity:"0.8"}}>Don't miss out on our competitive pricing options! Visit our pricing page now to find the perfect plan for you.</p>
               </div>
               <div className='flex2'>
               <Link to="/Pricing"><button className='btn5 btn'>Get Started <i className="fa2 fa-solid fa-angle-right"></i></button></Link>
               </div>
        </div>
    </div>
  )
}

export default PriceButton