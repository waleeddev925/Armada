import React from 'react'
import AnimationContent from '../Components/AnimationContent'
import Content2 from "../Components/Content2"
import Services from '../Components/Services'
import { Support } from '../Components/Support'
import TabList from '../Components/TabList'
import LogoTabs from '../Components/LogoTabs'
import Footer from '../Components/Footer'
import PriceButton from '../Components/PriceButton'







const Home = () => {
    return (
        <div>
            <AnimationContent />
            <Content2 />
            <Support />
            <Services />
            <TabList/>
            <LogoTabs/>
            <PriceButton/>
            <Footer/>
        </div>
    )
}

export default Home