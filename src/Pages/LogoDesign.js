import React from 'react'
import LogoTabs from '../Components/LogoTabs'
import Footer from '../Components/Footer'
import Prices from '../Data/PackagesData'
import { Link } from 'react-router-dom'

const LogoDesign = () => {
  return (
    <div>
    <div className='bx1'>
    <div className='box1'>
      <div className='text1'>
      <h1 style={{fontWeight: "700",color:"white"}}>Affordable Logo Design Agency</h1>
      <h7 style={{color:"white"}}>If you want your customers to interact with your brand, give it an approachable face in the form of a Logo. Our logo design creators can help!</h7>
      </div>
    </div>
    <div className='LogoImage' style={{marginTop:"20px" , marginLeft:"80px"}}>
     
      <img src='https://brandsdesign.com/wp-content/uploads/2023/07/logo-services-header.png'/>
    </div>
   </div>
      <LogoTabs />
      
      <h1 className='heading6'>Budget-Friendly Design Packages</h1>
      <h5 className='heading7'>We have some affordable design packages for your graphic design needs!</h5>
      <hr className='hr1' style={{ width: "1115px" , marginLeft:"200px" }} />
      <div className='container'>
        <div className='row' style={{marginLeft:"150px" , marginTop: "30px"}}>
          {
            Prices.map(x => {
              return (
                
                <div className="card my-2 mx-4" style={{ width: '17rem' }}>
                  <img src={x.image} width={100} alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{x.title}</h5>
                    <h6 class="card-subtitle mb-2 " style={{ color: "goldenrod" }}>{x.subTitle}</h6>
                    <Link to={`/${x.id}`} className="btn btn-dark my-2">Buy</Link>
                    <p className="card-text lead" style={{ lineHeight: "30px", width: "160px" }}>{x.description}</p>
                  </div>
                </div>
                

              )
            })
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LogoDesign