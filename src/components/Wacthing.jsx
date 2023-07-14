import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ForwardOutlinedIcon from '@mui/icons-material/ForwardOutlined';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { MAIN_COLOR } from '../constant';

const Watching = () => {
    return (
        <>
            <Grid container sx={{ bgcolor: '#fff8e1', width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px' }}>
                    <Typography variant='h5' fontWeight={600} sx={{ color: '#757575', fontSize: { lg: '23px', md: '23px', sm: '23px', xs: '19px' } }}>Thanks For Watching! </Typography>
                    <span><FavoriteIcon color='primary' fontSize='medium' sx={{ mt: '2px', ml: '3px' }} /></span>

                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
                    <Typography variant='h5' fontWeight={600} sx={{ color: '#757575', fontSize: { lg: '21px', md: '21px', sm: '21px', xs: '16px' } }}>Need help with your new project?</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                        <Typography variant='h5' fontWeight={600} sx={{ color: '#757575', fontSize: { lg: '21px', md: '21px', sm: '21px', xs: '13px' } }}>Get in touch </Typography>
                        <ForwardOutlinedIcon fontSize='medium' sx={{ color: '#757575', m: '3px' }} />
                        <Typography variant='h5' fontWeight={600} sx={{ color: '#2979ff', fontSize: { lg: '21px', md: '21px', sm: '21px', xs: '13px' } }}>Contact.AdelSocial@gmail.com</Typography>
                    </Box>

                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CopyrightIcon sx={{ color: '#757575', }} fontSize='small' />
                    <Typography variant='body1' sx={{ color: '#757575', fontSize: '15px', fontWeight: '600' }}>All Rights Reserved</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Watching