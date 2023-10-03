import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='Footer'>
                <div className='FooterText'>
                    <h1 style={{fontWeight:"600", fontSize:"50px",width:"340px"}}>Product goals?</h1>
                    <h1 style={{marginTop:"-5px"}} className='heading8'>Let’s make it happen.</h1>
                    <div className='FooterImg'>
                    <img src='./images/Logo.svg' width={90}/>
                    </div>
                    <p className='paragraph' style={{opacity:"0.7"}}>At Brands Design, we provide dedicated graphic design packages 
                    and we believe that the best designs are made with a personal touch. We take your ideas and
                     make them come to life with unique custom illustrations, presentation design, and motion 
                     graphics.</p>
                    
                     <p style={{fontWeight:"700"}}>CONTACT SALES & SUPPORT</p>
                     <p style={{marginTop:"-12px" , fontWeight:"600" , opacity:"0.8"}} >+92 322 9283812</p>
                </div>
                <div className='FooterLinks'>
                    <div className='LeftLinks'>
                        <p style={{fontWeight:"700"}}>Quick Links</p>
                        <Link style={{textDecoration:"none" , color:"black", fontWeight:"500" , opacity:"0.7"}} to='#'>Contact Us</Link><br/>
                        <Link style={{textDecoration:"none" , color:"black", fontWeight:"500" , opacity:"0.7"}} to='#'>About</Link><br/>
                        <Link style={{textDecoration:"none" , color:"black", fontWeight:"500" , opacity:"0.7"}} to='#'>Blogs</Link><br/>
                        <Link style={{textDecoration:"none" , color:"black", fontWeight:"500" , opacity:"0.7"}} to='/OurWork'>Our Work</Link><br/>
                        <Link style={{textDecoration:"none" , color:"black", fontWeight:"500" , opacity:"0.7"}} to='#'>Case Studies</Link><br/>
                        <Link style={{textDecoration:"none" , color:"black", fontWeight:"500" , opacity:"0.7"}} to='#'>FAQ</Link><br/>
                    </div>
                    <div className='RightLinks'>
                        <p style={{fontWeight:"700"}}>Hire Team</p>
                        <Link style={{textDecoration:"none" , color:"black", fontWeight:"500" , opacity:"0.7"}} to='/GraphicDesigner'>Hire Designer</Link><br/>
                        <Link style={{textDecoration:"none" , color:"black", fontWeight:"500" , opacity:"0.7"}} to='/DigitalMarketers'>Hire Marketer</Link><br/>
                        <Link style={{textDecoration:"none" , color:"black", fontWeight:"500" , opacity:"0.7"}} to='/HiringPlans'>Hiring Plans</Link><br/>
                        <Link style={{textDecoration:"none" , color:"black", fontWeight:"500" , opacity:"0.7"}} to='/Pricing'>Pricing</Link><br/>
                        <Link style={{textDecoration:"none" , color:"black", fontWeight:"500" , opacity:"0.7"}} to='/HiringPlans'>Packages</Link><br/>
                    </div>
                </div>
                <div className='FooterEnd'>
                    <Link style={{ textDecoration: "none", color: "black", fontWeight: "500", fontSize: "14px", opacity: "0.7" }} to='#'>Terms & Conditions |</Link>
                    <Link style={{ textDecoration: "none", color: "black", fontWeight: "500", fontSize: "14px", opacity: "0.7" }} to='#'> Privacy Policy |</Link>
                    <span style={{ textDecoration: "none", color: "black", fontWeight: "500", fontSize: "14px", opacity: "0.7" }}> Copyright © 2023 Brands Design |</span>
                    <span style={{ textDecoration: "none", color: "black", fontWeight: "500", fontSize: "14px", opacity: "0.7" }}> All rights reserved </span>

                </div>
            </div>
        </>
    )
}

export default Footer