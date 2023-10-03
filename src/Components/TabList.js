import react, { useState } from 'react'
import Prices from '../Data/PackagesData';
import Prices2 from '../Data/PackagesData2';
import Prices3 from '../Data/PackagesData3';
import { Link } from 'react-router-dom';




const TabList = () => {


    const [isActive, setIsActive] = useState(1);
    const handleActive = btn => setIsActive(btn)

    return (
        <div className='tabBox'>
            <div className='flex w-full md:min-h-screen'>
                <h1 className='heading6'>Budget-Friendly Design Packages</h1>
                <h5 className='heading7'>We have some affordable design packages for your graphic design needs!</h5>
                <div className='flex w-full min-h-screen  flex-col bg-[#171721]'>

                    <div className='w-full border-b border-b-[#232332]'>
                        <div className='w-full bg-transparent px-10 py-9 flex justify-between flex-wrap gap-3 md:gap-0 items-center'>

                            <div className='flex justify-between gap-4'>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center gap-2.5 w-full py-8 px-10'>

                        <div className='buttons flex flex-col items-center w-full'>
                            <div className='flex border-b-2 border-b-[#22222C]  lg:flex-row flex-col items-center w-full'>
                                <button onClick={() => handleActive(1)}
                                    className={`${isActive === 1 ? 'button1' : 'button1-1 bg-light'}`}>
                                    Logo Design
                                </button>
                                <button onClick={() => handleActive(2)}
                                    className={`${isActive === 2 ? 'button2' : 'button2-1 bg-light'}`}>
                                    Website
                                </button>
                                <button onClick={() => handleActive(3)}
                                    className={`${isActive === 3 ? 'button3' : 'button3-1 bg-light'}`}>
                                    Stationary
                                </button>
                            </div>
                        </div>
                        <hr className='hr1' style={{ width: "1115px" }} />
                        {isActive === 1 &&
                            <div className='container'>
                                <div className='row mx-5'>
                                    {
                                        Prices.map(x => {
                                            return (
                                                <div className="card my-2 mx-4" style={{ width: '17rem' }}>
                                                    <img src={x.image} width={100} alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{x.title}</h5>
                                                        <h6 class="card-subtitle mb-2 " style={{color:"goldenrod"}}>{x.subTitle}</h6>
                                                        <Link to={`/${x.id}`} className="btn btn-dark my-2">Buy</Link>
                                                        <p className="card-text lead" style={{lineHeight:"30px" , width:"160px"}}>{x.description}</p>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }
                                </div>
                            </div>

                        }
                        {isActive === 2 &&
                            <div className='container'>
                            <div className='row mx-5'>
                                {
                                    Prices2.map(x => {
                                        return (
                                            <div className="card my-2 mx-4" style={{ width: '17rem', boxShadow:"5px 5px 10px goldenrod" }}>
                                                <img src={x.image} width={100} alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{x.title}</h5>
                                                    <h6 class="card-subtitle mb-2 " style={{color:"goldenrod"}}>{x.subTitle}</h6>
                                                    <Link to={`/${x.id}`} className="btn btn-dark my-2">Buy</Link>
                                                    <p className="card-text lead" style={{lineHeight:"30px" , width:"160px"}}>{x.description}</p>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                        }
                        {isActive === 3 &&
                            <div className='container'>
                            <div className='row mx-5'>
                                {
                                    Prices3.map(x => {
                                        return (
                                            <div className="card my-2 mx-4" style={{ width: '17rem' }}>
                                                <img src={x.image} width={100} alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{x.title}</h5>
                                                    <h6 class="card-subtitle mb-2 " style={{color:"goldenrod"}}>{x.subTitle}</h6>
                                                    <Link to={`/${x.id}`} className="btn btn-dark my-2">Buy</Link>
                                                    <p className="card-text lead" style={{lineHeight:"30px" , width:"160px"}}>{x.description}</p>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>


    )

}

export default TabList