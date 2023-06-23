// import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import HeroSection from '../components/HeroSection'; 
import AboutSection from '../components/AboutSection'; 
import TextContent from '../components/TextContent';
import TryNuloyal from '../components/TryNuloyal'; 
import SelfFunded from '../components/SelfFunded';
import WhatWeDo from '../components/WhatWeDo';



const Platform = ()=>{
    return(
        <>
        {/* <Navbar/> */}
        <HeroSection/>
        <WhatWeDo/>
        <AboutSection/>
        <SelfFunded/>
        <TextContent/>
        <TryNuloyal/>
        <Footer/>
        
        </>
    )
}
export default Platform;
