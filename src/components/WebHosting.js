import { Button, Divider, Grid, Typography } from '@mui/material'
import '../pages/Homepage.css'
import laptop from '../assets/laptop.png'
import DoneIcon from '@mui/icons-material/Done';
import cust from '../assets/cust.png'
import money from '../assets/money.png'
import prize from '../assets/prize.png'
import { MAIN_COLOR, SECONDARY_COLOR } from '../constant';

const WebHosting = () => {
    const plans = [{ logo: cust, title: "Connect with pre-qualified customers", renew_price: 159, new_price: 190, planName: 'Single Domain Hosting', planSubName: 'Low-cost affordable hosting to get you started.', old_price: 'Rs.299', percent: '83%', features: ['1 Website', '10GB + 20G SSD/NVMe Disk Storage', 'Unlimited Data Transfer', 'Unlimited Subdomain', 'Unlimited Databases', 'Unlimited Email Accounts', 'Lifetime FREE SSL', '1-Click WordPress Installer'] },
    { logo: money, title: "Save time and money", renew_price: 159, new_price: 848, planName: 'Multiple Domain Hosting', planSubName: 'Everything you need to create your website', old_price: 'Rs.999', percent: '83%', features: ['10 Websites', '20GB+80GB SSD/NVMe Disk Storage', 'Unlimited Data Transfer', 'Unlimited Subdomain', 'Unlimited Databases', 'Unlimited Email Accounts', 'Lifetime FREE SSL', '1-Click WordPress Installer'] },
    { logo: prize, title: "Rely on an experienced and knowledgeable team", renew_price: 159, new_price: 634, planName: 'C-panel Hosting', planSubName: 'Level-up with more power and enhanced features', old_price: 'Rs.799', percent: '83%', features: ['5 Websites', '10 GB SSD Storage', 'Unlimited Data Transfer', 'Unlimited Subdomain', 'Unlimited Databases', 'Unlimited Email Accounts', 'Lifetime FREE SSL', '1-Click WordPress Installer'] }].map((plan) => {
        return <Grid item key={plan.planName} sx={{ '&:hover': { scale: '0.9', boxShadow: '-1px 3px 14px 0px rgba(0, 0, 0, 0.75)' }, transition: 'all 0.70s ease', border: '1px solid lightgray', p: '10px', ml: '10px', height: '75%' }} >
            <Typography variant='h1' fontSize={'16px'} fontWeight={900} textAlign={'center'}>{plan.planName}</Typography>
            <Typography variant='subtitle1' fontSize={'10px'} >{plan.planSubName}</Typography>
            <Grid container justifyContent={'center'} alignItems={'center'}>
                <Grid item fontSize={'12px'} sx={{ opacity: 0.5 }}><del>{plan.old_price}</del></Grid>
                <Grid item><span style={{ fontSize: '12px', backgroundColor: '#ebe4ff', color: '#5025d1', padding: '4px 13px', borderRadius: '20px', marginLeft: '10px' }}><b >SAVE {plan.percent}</b></span></Grid>
            </Grid>
            <Typography paragraph textAlign={'center'} sx={{ letterSpacing: '1px', color: '#2f1c6a', fontWeight: 900, fontSize: '27px' }}>₹{plan.new_price}<span style={{ fontWeight: 100, fontSize: '18px' }}>/mo</span></Typography>
            <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button size='small' variant='contained' sx={{ textTransform: 'unset', fontWeight: 900 }}>Add to cart</Button>
            </Grid>
            <Grid item>
                <Typography paragraph m={'8px'} fontSize={'10px'} textAlign={'center'}>₹{plan.renew_price}/m when you renew</Typography>
            </Grid>
            <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                <Divider sx={{ border: '1px solid lightgray', width: '80%' }} />
            </Grid>
            <Typography paragraph textAlign={'center'} color={MAIN_COLOR} fontWeight={900} m={'20px'}>Top Features</Typography>
            <Grid container flexDirection={'column'}>
                {plan.features.map((item, index) => {
                    return <Grid key={index} item sx={{ display: 'flex', mb: '0px' }}>
                        <DoneIcon sx={{ color: '#ffcd35', fontWeight: 900, fontSize: '16px' }} />
                        <Typography paragraph color={MAIN_COLOR} fontSize={"10px"} fontWeight={500} ml="5px" >{item}</Typography>
                    </Grid>
                })}
            </Grid>
            <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img width={'30px'} height={'30px'} src={plan.logo} alt='pic' />
                <Typography ml="16px" sx={{ color: 'white' }} textAlign={'center'} fontSize={'9px'} fontWeight={900} whiteSpace={'wrap'}>{plan.title}</Typography>
            </Grid>
        </Grid>
    })
    return (
        <Grid container sx={{ padding: '80px' }}>
            <Grid item lg={12} xs={12}>
                <Typography textAlign={'center'} variant='h1' color={MAIN_COLOR} sx={{ fontSize: '14px', letterSpacing: '3px', lineHeight: 1.43 }}>AFFORDABLE DOMAIN & HOSTING</Typography>
                <Typography textAlign={'center'} m={'6px'} fontSize={'18px'} fontWeight={600}>Make a customer, not a sale.</Typography>
            </Grid>
            <Grid container justifyContent={'center'} alignItems={'center'} height={'100vh'}>
                <Grid item lg={12} style={{ height: '100%', width: '80%', backgroundImage: `url(${laptop})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
                    <Grid container sx={{ height: '100%', justifyContent: 'center', alignItems: 'center' }} >
                        {plans}
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default WebHosting


// give credit to this for laptop pic on fotter like blog,newsletter or credits section
// <a href="https://www.freepik.com/free-psd/digital-device-mockup_4264999.htm#query=laptop%20screen&position=0&from_view=keyword&track=ais">Image by rawpixel.com</a> on Freepik