import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const LogoTabs = () => {

    const [isActive, setIsActive] = useState(1);
    const handleActive = btn => setIsActive(btn)

    return (
        <>
            <div className='LogoBox'>
                <div className='LogoText1'>
                    <h1 style={{ fontWeight: "700" }}>Pick Out the Best Logo</h1>
                    <h1 style={{ color: "red", fontWeightL: "700" }}>Type for</h1>
                    <h1 style={{ backgroundColor: "black", color: "white", width: "335px", padding: "2px", height: "55px" }}>Your Stellar Brand</h1>
                </div>
                <div className='LogoText2'>
                    <p style={{ fontWeight: "500", opacity: "0.8" }}>It is only when a logo is capable of expressing your brand's personality rightfully <br />
                        that it fulfills its true purpose. In order to achieve that, you must choose the right <br />
                        logo type for your stellar brand, or you can get our exceptionally<Link to="/LogoDesign" style={{textDecoration:"none"}}> <span style={{ color: "goldenrod" , fontWeight:"bolder" }}> talented logo <br />designers </span></Link>
                        to come up with the idea. Boom! </p>
                </div>
            </div>
            <div className='TabList2'>
                <div className='flex flex-col justify-center gap-2.5 w-full py-8 px-10'>

                    <div className='buttons2 flex flex-col items-center w-full'>
                        <div className='flex border-b-2 border-b-[#22222C]  lg:flex-row flex-col items-center w-full'>
                            <button onClick={() => handleActive(1)}
                                className={`${isActive === 1 ? 'button6' : 'button6-1 bg-light'}`}>
                                Abstract Logo
                            </button>
                            <button onClick={() => handleActive(2)}
                                className={`${isActive === 2 ? 'button7' : 'button7-1 bg-light'}`}>
                                Emblem Logo
                            </button>
                            <button onClick={() => handleActive(3)}
                                className={`${isActive === 3 ? 'button8' : 'button8-1 bg-light'}`}>
                                Wordmark
                            </button>
                            <button onClick={() => handleActive(4)}
                                className={`${isActive === 4 ? 'button9' : 'button9-1 bg-light'}`}>
                                Mascot Logo
                            </button>
                            <button onClick={() => handleActive(5)}
                                className={`${isActive === 5 ? 'button10' : 'button10-1 bg-light'}`}>
                                2D/3D Logo
                            </button>
                            <button onClick={() => handleActive(6)}
                                className={`${isActive === 6 ? 'button11' : 'button11-1 bg-light'}`}>
                                Illustrative
                            </button>
                        </div>
                    </div>
                    <hr className='hr2' style={{ width: "1090px", marginLeft: "55px" }} />
                    {isActive === 1 &&
                        <div className='content6'>
                            <div className='content6-1'>
                                <h1 style={{ fontWeight: "700" }}>Abstract Logo</h1>
                                <p className='logopara1' style={{ width: "530px", fontWeight: "500", opacity: "0.8  " }}>Abstract logo designs are a great means of triggering creativity in the minds of your audience and that in particular, is the finest way to stand alone amongst your competitors. However, abstract logos might not perform their exceptional tricks for every niche. So, you shall pick out this logotype quite wisely.</p>
                            </div>
                            <div className='content6-2'>
                                <img className='logoimg1' style={{ marginLeft: "-50px" }} src='./images/image16.jpg' />
                            </div>
                        </div>
                    }
                    {isActive === 2 &&
                        <div className='content7'>
                            <div className='content7-1'>
                                <h1 style={{ fontWeight: "700" }}>Emblem Logo</h1>
                                <p className='logopara2' style={{ width: "530px", fontWeight: "500", opacity: "0.8  " }}>The emblem is the rightful combination of memory and attraction with a hint of metallic outlook. It goes perfectly with brands that are grand and promotes ancient culture. The good news is that logo designers at brandsdesign are experts at creating the finest emblem logo designs.</p>
                            </div>
                            <div className='content7-2'>
                                <img className='logoimg2' style={{ marginLeft: "-50px" }} src='./images/image17.jpg' />
                            </div>

                        </div>
                    }
                    {isActive === 3 &&
                        <div className='content8'>
                            <div className='content8-1'>
                                <h1 style={{ fontWeight: "700" }}>Wordmark</h1>
                                <p className='logopara3' style={{ width: "530px", fontWeight: "500", opacity: "0.8  " }}>Wordmarks are the talk of the town, meaningful text-based logos, that have never been out of trend since introduced. They are perfect for brands that want their names memorized across the audience. Experts at brandsdesign know the art of perfectly representing your brands with excellent wordmark logos.</p>
                            </div>
                            <div className='content8-2'>
                                <img className='logoimg3' style={{ marginLeft: "-50px" }} src='./images/image18.jpg' />
                            </div>

                        </div>
                    }
                    {isActive === 4 &&
                        <div className='content9'>
                            <div className='content9-1'>
                                <h1 style={{ fontWeight: "700" }}>Mascot Logo</h1>
                                <p className='logopara4' style={{ width: "530px", fontWeight: "500", opacity: "0.8  " }}>Do you own a brand with fun-loving values and culture inside? Mascots can best represent your style. They leave a lasting impression on your audience with a superb depiction of your business using characters such as cartoons, animals, robots, and people, etc. And the logo designers at brandsdesign excel at proving quality mascot logos to their clients.</p>
                            </div>
                            <div className='content9-2'>
                                <img className='logoimg4' style={{ marginLeft: "-50px" }} src='./images/image19.jpg' />
                            </div>

                        </div>
                    }
                    {isActive === 5 &&
                        <div className='content10'>
                            <div className='content10-1'>
                                <h1 style={{ fontWeight: "700" }}>2D/3D Logo</h1>
                                <p className='logopara5' style={{ width: "530px", fontWeight: "500", opacity: "0.8  " }}>The best way to attract your audience is to showcase an astounding image of your brand. And brandsdesign takes pride in having the talent which can perfectly depict your brand values in stylish yet appealing 2D/3D logo designs. They can leave a dimensional impression of your brand in the audiences’ mind.</p>
                            </div>
                            <div className='content10-2'>
                                <img className='logoimg5' style={{ marginLeft: "-50px" }} src='./images/image20.jpg' />
                            </div>

                        </div>
                    }
                    {isActive === 6 &&
                        <div className='content11'>
                            <div className='content11-1'>
                                <h1 style={{ fontWeight: "700" }}>Illustrative</h1>
                                <p className='logopara6' style={{ width: "530px", fontWeight: "500", opacity: "0.8  " }}>Illustrative logos are the best for brands that aim at capturing the creative audience and so, they can only be crafted by ultra-creative designers. Brandsdesign takes pride in having a batch of such ultra-creative designers who are experts at providing the finest illustrative logos to each of their clients.

                                </p>
                            </div>
                            <div className='content11-2'>
                                <img className='logoimg6' style={{ marginLeft: "-50px" }} src='./images/image21.jpg' />
                            </div>

                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default LogoTabs