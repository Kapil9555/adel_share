import { Box, Button, Grid, Link, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useContext } from 'react';
import { AdelContext } from '../store/Context';
import { HOVER_COLOR, MAIN_COLOR, SECONDARY_COLOR } from '../constant';

const BannerText = () => {

    const { state } = useContext(AdelContext)
    const style = {
        '&:hover': { opacity: 0.6, borderBottom: `3px solid ${HOVER_COLOR}` },
        transition: "all 1s ease",
        mr: "20px",
        cursor: "pointer",
        textDecoration: "none",
        fontWeight: 800,
        borderBottom: '3px solid transparent',
        padding: '5px 5px',
        whiteSpace: 'nowrap',
    }
    return (
        <Grid container>
            <Grid item lg={6} md={6} sm={6} xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: '3rem', overflow: 'hidden' }}>
                <Typography variant='subtitle1' color={SECONDARY_COLOR} sx={{ fontWeight: 500, whiteSpace: 'nowrap', fontSize: { lg: '90%', md: '80%', sm: '60%', xs: '40%' }, }}>We Provide Outsourced</Typography>
                <Typography variant='h1' color={MAIN_COLOR} sx={{ fontWeight: 900, fontSize: { lg: '50px', sm: '30px', md: '40px', xs: '20px' }, m: '20px 0px', whiteSpace: 'nowrap' }}>IT Services</Typography>
                <Typography variant='h6' color={SECONDARY_COLOR} sx={{ fontWeight: 500, whiteSpace: 'nowrap', fontSize: { lg: '90%', md: '80%', sm: '60%', xs: '40%' }, }}>For Small & Mid sized Businesses</Typography>
                <Grid container m={"20px 0px"} justifyContent={'left'} alignItems={'center'}>
                    <Grid item mr="20px" >
                        <Button variant='contained' sx={{ mb: { xs: "10px", lg: '0px', md: '0px', sm: '0px' }, textTransform: 'unset', fontWeight: 900, fontSize: { sm: '10px', xs: '8px' } }} endIcon={<ArrowRightAltIcon />}>Learn more</Button>
                    </Grid>
                    <Grid item >
                        <Button variant='outlined' sx={{ color: 'white', fontWeight: 900, textTransform: 'unset', fontSize: { sm: '10px', xs: '8px' } }} endIcon={<ArrowRightAltIcon />}>Get in touch</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6} sx={{ pr: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
                {state.currentScreenSize < 918 && <Box sx={{ height: '80%', width: '20%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Link id="navBarHide" sx={style}>Home</Link>
                    <Link id="navBarHide" sx={style}>About</Link>
                    <Link id="navBarHide" sx={style}>IT Services</Link>
                    <Link id="navBarHide" sx={style}>Projects</Link>
                    <Link id="navBarHide" sx={style}>Contact</Link>
                </Box>}
            </Grid>
        </Grid>
    )
}

export default BannerText