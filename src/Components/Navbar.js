import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="nav1 container-fluid">
                    <Link className="navbar-brand mx-4 p-2" to="/">
                        <img src='./images/Logo.svg' width={80} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hire Team
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="item dropdown-item" to="/GraphicDesigner">Graphic Designer <br />
                                        Hire a Designer for your team</Link></li>
                                    <li><Link className="item dropdown-item" to="/DigitalMarketers">Digital Marketers <br />
                                        Hire a Marketer for your team</Link></li>
                                    <li><Link className="item dropdown-item" to="/HiringPlans">Hiring Plans <br />
                                        Get our affordable plans
                                    </Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active mx-3" aria-current="page" to="/OurWork">Our Work</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="drop1 dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="item dropdown-item" to="#">Logo Design & Identity <i className="fa1 fa-solid fa-angle-right" style={{ color: '#000000' }} />
                                        <div className='dropdownmenu1'>
                                            <Link className='dropdown-item' to='/LogoDesign'>Logo Design</Link>
                                            <Link className='dropdown-item' to='BusinessCard'>Business Card</Link>
                                            <Link className='dropdown-item' to='/StationeryDesign'>Stationery Design</Link>
                                            <Link className='dropdown-item' to='/BrandGuide'>Brand Guide</Link>
                                            <Link className='dropdown-item' to='/IconDesign'>Icon Design</Link>
                                            <Link className='dropdown-item' to='/EmailSignature'>Email Signature</Link>
                                            <Link className='dropdown-item' to='/EmailTemplate'>Email Template Design</Link>
                                            <Link className='dropdown-item' to='/PowerPointPr'>Powerpoint Presentation</Link>
                                        </div>
                                    </Link></li>
                                    <li><Link className="item dropdown-item" to="/">Business & Advertising <i className="fa1 fa-solid fa-angle-right" style={{ color: '#000000' }} />
                                        <div className='dropdownmenu2 '>
                                            <Link className='dropdown-item ' to='/Brochure'>Brochure & Leaflet
                                            </Link>
                                            <Link className='dropdown-item' to='/BannerAd'>Banner Ad / Signage</Link>
                                            <Link className='dropdown-item' to='/TshirtDesign'>T-shirt Design</Link>
                                            <Link className='dropdown-item' to='/CarWrap'>Car Wrap Design</Link>
                                            <Link className='dropdown-item' to='/CalenderDesign'>Calender Design</Link>
                                            <Link className='dropdown-item' to='/ResumeDesign'>Resume Design</Link>
                                            <Link className='dropdown-item' to='/FlyerDesign'>Flyer Design</Link>
                                            <Link className='dropdown-item' to='/StickerDesign'>Sticker Design</Link>
                                            <Link className='dropdown-item' to='/PackegingDesign'>Packeging Design</Link>
                                        </div>
                                    </Link></li>
                                    <li><Link className="item dropdown-item" to="/DigitalMarketing">Digital Marketing <i className="fa1 fa-solid fa-angle-right" style={{ color: '#000000' }} />
                                        <div className='dropdownmenu3'>
                                            <Link className='dropdown-item' to='/SocialMediaMa'>Social Media Marketing

                                            </Link>
                                            <Link className='dropdown-item' to='/SEO'>SEO</Link>
                                        </div>
                                    </Link></li>
                                    <li><Link className="item dropdown-item" to="/WebsiteApp">Wesite & App</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3" style={{ color: "black" }} to="/Pricing">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar