import { Box, Button, Grid, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'
import angular from '../assets/angular.jpg'
import flutter from '../assets/flutter.jpg'
import wordpress from '../assets/wordpress.png'
import '../pages/Homepage.css'
import { MAIN_COLOR, SECONDARY_COLOR } from '../constant'

const Technologies = () => {
    const theme = useTheme();
    const services = [
        { title: 'WordPress', icon: wordpress, desc: 'Drive your online business with robust capabilities of Shopify solutions.' },
        { title: 'Python', icon: flutter, desc: 'Drive your online business with robust capabilities of Shopify solutions.' },
        { title: 'Flutter', icon: flutter, desc: 'Drive your online business with robust capabilities of Shopify solutions.' },
        { title: 'Shopify', icon: angular, desc: 'Drive your online business with robust capabilities of Shopify solutions.' },
        { title: 'React JS', icon: angular, desc: 'Drive your online business with robust capabilities of Shopify solutions.' },
        { title: 'Laravel', icon: angular, desc: 'Drive your online business with robust capabilities of Shopify solutions.' },
        { title: 'Angular JS', icon: angular, desc: 'Drive your online business with robust capabilities of Shopify solutions.' },
        { title: 'Flutter', icon: angular, desc: 'Drive your online business with robust capabilities of Shopify solutions.' },
        { title: 'Node JS', icon: angular, desc: 'Drive your online business with robust capabilities of Shopify solutions.' }].map((item) => {
            return <Grid key={item.title} item lg={2} sx={{ m: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Grid container sx={{ border: '1px solid lightgray', borderRadius: '20px', width: '200px', transition: 'all 0.70s ease', '&:hover': { scale: '1.1', boxShadow: '-1px 3px 14px 0px rgba(0, 0, 0, 0.75)', cursor: 'pointer' } }}>
                    <Grid item lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img width={'100%'} style={{ borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }} src={item.icon} alt='pic' />
                    </Grid>
                    <Grid item lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant='h1' fontSize={'12px'} m={'10px'} color={MAIN_COLOR} fontWeight={900}>{item.title}</Typography>
                        <Typography textAlign={'center'} sx={{ color: 'black', opacity: 0.6, '&:hover': { opacity: 1 } }} paragraph fontSize={'10px'} m={'10px'} fontWeight={800}>{item.desc}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        })
    return (
        <Grid container className='technologySection'>
            <Grid item lg={12} xs={12}>
                <Typography textAlign={'center'} variant='h1' color={MAIN_COLOR} sx={{ fontSize: '14px', letterSpacing: '3px', lineHeight: 1.43 }}>TECHNOLOGIES</Typography>
                <Typography textAlign={'center'} m={'6px'} fontSize={'18px'} fontWeight={600}>Building the Future with Tech.</Typography>
            </Grid>
            <Grid className='scrollTechParent' container sx={{ justifyContent: 'center', alignItems: 'center', }}>
                <Box className="scrollTech" sx={{ width: '90%', display: 'flex', overflowX: 'scroll' }}>
                    {services}
                </Box>
            </Grid>
            {/* <Grid item lg={12} xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', m: '20px' }}>
                <Button variant='contained' endIcon={<ArrowRightAltIcon />} sx={{ textTransform: 'unset', bgcolor: '#ff5722', color: 'white', fontWeight: 900 }}>Learn more</Button>
            </Grid> */}
        </Grid>
    )
}

export default Technologies