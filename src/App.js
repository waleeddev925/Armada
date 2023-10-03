import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import GraphicDesigner from './Pages/GraphicDesigner';
import Home from './Pages/Home';
import DigitalMArketers from './Pages/DigitalMArketers';
import HiringPlans from './Pages/HiringPlans';
import OurWork from './Pages/OurWork';
import LogoDesign from './Pages/LogoDesign';
import BusinessCard from './Pages/BusinessCard';
import StationeryDesign from './Pages/StationeryDesign';
import BrandGuide from './Pages/BrandGuide';
import IconDesign from './Pages/IconDesign';
import EmailSignature from './Pages/EmailSignature';
import EmailTemplate from './Pages/EmailTemplate';
import PowerPointPr from './Pages/PowerPointPr';
import Brochure from './Pages/Brochure';
import BannerAd from './Pages/BannerAd';
import TshirtDesign from './Pages/TshirtDesign';
import CarWrap from './Pages/CarWrap';
import CalenderDesign from './Pages/CalenderDesign';
import ResumeDesign from './Pages/ResumeDesign';
import FlyerDesign from './Pages/FlyerDesign';
import StickerDesign from './Pages/StickerDesign';
import PackegingDesign from './Pages/PackegingDesign';
import DigitalMarketing from './Pages/DigitalMarketing';
import SocialMediaMa from './Pages/SocialMediaMa';
import SEO from './Pages/SEO';
import WebsiteApp from './Pages/WebsiteApp';
import Pricing from './Pages/Pricing';
import Checkout from './Pages/Checkout';
import { Support } from './Components/Support';


function App() {
  return (
    <div className='App'>
        <Navbar/>  
        
       <Routes>
        <Route index element={<Home/>}/>
        <Route path='/:id' element={<Checkout/>}/>
        <Route path='/GraphicDesigner' element={<GraphicDesigner/>}/>
        <Route path='/DigitalMarketers' element={<DigitalMArketers/>}/>
        <Route path='/HiringPlans' element={<HiringPlans/>}/>
        <Route path='/OurWork' element={<OurWork/>}/>
        <Route path='/LogoDesign' element={<LogoDesign/>}/>
        <Route path='/BusinessCard' element={<BusinessCard/>}/>
        <Route path='/StationeryDesign' element={<StationeryDesign/>}/>
        <Route path='/BrandGuide' element={<BrandGuide/>}/>
        <Route path='/IconDesign' element={<IconDesign/>}/>
        <Route path='/EmailSignature' element={<EmailSignature/>}/>
        <Route path='/EmailTemplate' element={<EmailTemplate/>}/>
        <Route path='/PowerPointPr' element={<PowerPointPr/>}/>
        <Route path='/Brochure' element={<Brochure/>}/>
        <Route path='/BannerAd' element={<BannerAd/>}/>
        <Route path='/TshirtDesign' element={<TshirtDesign/>}/>
        <Route path='/CarWrap' element={<CarWrap/>}/>
        <Route path='/CalenderDesign' element={<CalenderDesign/>}/>
        <Route path='/ResumeDesign' element={<ResumeDesign/>}/>
        <Route path='/FlyerDesign' element={<FlyerDesign/>}/>
        <Route path='/StickerDesign' element={<StickerDesign/>}/>
        <Route path='/PackegingDesign' element={<PackegingDesign/>}/>
        <Route path='/DigitalMarketing' element={<DigitalMarketing/>}/>
        <Route path='/SocialMediaMa' element={<SocialMediaMa/>}/>
        <Route path='/SEO' element={<SEO/>}/>
        <Route path='/WebsiteApp' element={<WebsiteApp/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
       </Routes>
       <Support/>
    </div>
  
  );
}

export default App;
