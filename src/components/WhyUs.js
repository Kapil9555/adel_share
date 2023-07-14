import '../pages/Homepage.css'
import { Button, Grid, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'
import serviceImg from '../assets/service.png'
import fullStack from '../assets/fullstack.png'
import mobile from '../assets/mobileappli.png'
import todo from '../assets/todo.png'
import produ from '../assets/key.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { MAIN_COLOR } from '../constant'

const WhyUs = () => {

    const services = [
        { title: 'Full Stack Development', icon: fullStack },
        { title: 'Project Management', icon: todo },
        { title: 'Mobile Applications', icon: mobile },
        { title: 'Technology Consulting', icon: produ }].map((item) => {
            return <Grid key={item.title} item lg={6} sm={6} xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'center' }}>
                <img width='60px' height="60px" src={item.icon} alt="full stack" />
                <Typography variant='h1' color={MAIN_COLOR} fontSize={'12px'} m={'10px'} fontWeight={900}>{item.title}</Typography>
            </Grid>
        })

    return (
        <Grid container className='serviceSection'>
            <Grid item lg={12}>
                <Typography textAlign={'center'} variant='h1' color={MAIN_COLOR} sx={{ fontSize: '14px', letterSpacing: '3px', lineHeight: 1.43 }}>SERVICES</Typography>
                <Typography textAlign={'center'} m={'6px'} fontSize={'18px'} fontWeight={600}>Make a customer, not a sale.</Typography>
            </Grid>
            <Grid container m={'20px 0px'}>
                <Grid item lg={6} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={serviceImg} alt="pic" />
                </Grid>
                <Grid item lg={6} xs={12}>
                    <Grid container sx={{ height: '100%', p: '0px 20px' }}>
                        {services}
                        <Grid item lg={12} xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Button variant='contained' endIcon={<ArrowRightAltIcon />} sx={{ textTransform: 'unset', color: 'white', fontWeight: 900 }}>Learn more</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default WhyUs