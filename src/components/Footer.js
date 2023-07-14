import { Box, Divider, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import adel from '../assets/logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { HOVER_COLOR, MAIN_COLOR } from '../constant';


const Footer = () => {
    const companyArray = ['Home', 'Service', 'Portfolio', 'Blog', 'Contact'].map((item) => {
        return <Typography key={item} sx={{
            fontSize: '15px',
            fontWeight: "700", mt: "8px", cursor: 'pointer', borderBottom: '3px solid transparent', '&:hover': { opacity: 0.6, borderBottom: `3px solid ${HOVER_COLOR}` },
            transition: "all 0.30s ease",
        }}>{item}</Typography>
    })

    const supportArray = ['Help center', 'Terms of services', 'Privacy policy'].map((item) => {
        return <Typography sx={{ transition: "all 0.30s ease", fontSize: '15px', fontWeight: "700", mt: "8px", borderBottom: '3px solid transparent', '&:hover': { opacity: 0.6, borderBottom: `3px solid ${HOVER_COLOR}`, cursor: 'pointer' } }}>{item}</Typography>
    })

    const socialIcons = [<InstagramIcon />, <FacebookIcon />, <TwitterIcon />, <LinkedInIcon />].map((item) => {
        return <Typography sx={{ color: MAIN_COLOR, }}>
            {item}
        </Typography>
    })

    return (
        <>
            <Divider sx={{ border: `5px solid ${MAIN_COLOR}`, mb: '20px' }} />
            <Grid container spacing={2} sx={{ pb: '20px', }}>
                <Grid item xs={12} sm={12} md={6} lg={4} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ width: "80%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                        <Box sx={{ width: "100%" }}>
                            <img src={adel} height="70px" width="100%" style={{ marginLeft: "-32px", }} alt='pic' />
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: "14px", color: MAIN_COLOR, }}>copyright © 2023 AdelSocial</Typography>
                            <Typography sx={{ mt: "15px", fontSize: '12px', color: MAIN_COLOR }}>All rights reserved</Typography>
                        </Box>
                        <Box sx={{ display: "flex", mt: "40px", justifyContent: "space-between", width: "70%" }}>
                            {socialIcons}
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={2} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column" }}>
                        <Typography variant='h1' sx={{ color: MAIN_COLOR, fontWeight: "900", fontSize: "24px", mb: "10px" }}>Company</Typography>
                        {companyArray}
                    </Box>

                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={2} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column" }}>
                        <Typography variant='h1' className='Box1' sx={{ color: MAIN_COLOR, fontWeight: "900", fontSize: "24px", mb: "10px" }}>Support</Typography>
                        {supportArray}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column" }}>
                        <Typography variant='h1' sx={{ color: MAIN_COLOR, fontWeight: "900", fontSize: "24px" }}>Stay up to date</Typography>
                        <Box sx={{ display: "flex", alignItems: "center", mt: "15px" }}>
                            <TextField
                                label="your email address"
                                variant="standard"
                                focused
                            />
                            <ArrowOutwardIcon sx={{ ml: "-20px", mt: "17px" }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer