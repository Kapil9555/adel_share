import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import banner from '../assets/bgImage.jpg'
import { Grid } from '@mui/material'
import BannerText from '../components/BannerText'
import { AdelContext } from '../store/Context'
// import Footer from '../components/Footer'
import WhyUs from '../components/WhyUs'
import Technologies from '../components/Technologies'
import WebHosting from '../components/WebHosting'
import Footer from '../components/Footer'
import Testomonials from '../components/Testomonials'
import Watching from '../components/Wacthing'
const Homepage = () => {
    const { dispatch } = useContext(AdelContext)
    useEffect(() => {
        function sizeOfScreen() {
            dispatch({ type: 'RESIZE', payload: window.innerWidth })
        }
        window.addEventListener('resize', sizeOfScreen)
        return () => window.removeEventListener('resize', sizeOfScreen)
    }, [])

    return (
        <>
            <Grid container height={'100Vh'} sx={{ backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <Header />
                <BannerText />
            </Grid>
            <WhyUs />
            <Technologies />
            <WebHosting />
            <Testomonials/>
            <Watching/>
            <Footer />
        </>

    )
}

export default Homepage