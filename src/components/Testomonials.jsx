import { Box, Grid, Paper, Rating, Typography } from '@mui/material'
import React from 'react'
import { MAIN_COLOR, SECONDARY_COLOR } from '../constant';
import quote from '../assets/quote.png'
import sr from '../assets/sr.jpg'
import bjp from '../assets/bjp.jpg'
import avtar from '../assets/images.png'




const Testomonials = () => {
  return (
    <>
        <Grid container>
            <Grid item xs={12}>
                <Typography textAlign={'center'} variant='h1' color={MAIN_COLOR} sx={{ fontSize: '14px', letterSpacing: '3px', lineHeight: 1.43 }}>TESTIMONIAL</Typography>
                <Typography textAlign={'center'} m={'6px'} fontSize={'18px'} fontWeight={600}>What our clients says about us</Typography>
            </Grid>
            <Grid item xs={12} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Box sx={{width:"80%",p:"20px",display:"flex",justifyContent:"center"}}>
                    <Box sx={{m:"7px",transition: "transform 0.3s ease",'&:hover':{transform:"scale(1.1)"}}}>
                        <Paper sx={{height:"400px",width:"300px",p:"10px",m:"7px"}} elevation={3}>
                              <Typography align='center' sx={{p:"10px"}}>
                                 <img src={quote} alt="quote" height="50px" width="50px"/>
                              </Typography>
                              <Box>
                              <Typography align='center' sx={{fontSize:"18px",fontWeight:"500"}}>“One of the best social media agency in Delhi. They manage social media of their clients with skills. Have great knowledge on paid advertisements. Most recommended advertising agency.”</Typography>
                              </Box>
                              <Box >
                                <Box sx={{borderRadius:"50px",mt:"15px"}}>
                                   <Box sx={{width:"fit-content",display:"flex",alignItems:"center"}}>
                                   <Box><img src={sr} alt="sr"/></Box>
                                     
                                     <Typography sx={{fontSize:"15px",fontWeight:"700",ml:"10px",width:"fit-content"}}>Mr Sanjay SulemanClient</Typography>
                                   </Box>
                                   <Box sx={{p:"10px"}}>
                                     <Rating name="size-large" defaultValue={4} sx={{fontSize:"40px"}} size='large' disabled/>
                                   </Box>
                                </Box>
                              </Box>
                        </Paper>
                    </Box>

                    <Box sx={{m:"7px",transition: "transform 0.3s ease",'&:hover':{transform:"scale(1.1)"}}}>
                        <Paper sx={{height:"400px",width:"300px",p:"10px",m:"7px"}} elevation={3}>
                              <Typography align='center' sx={{p:"10px"}}>
                                 <img src={quote} alt="quote" height="50px" width="50px"/>
                              </Typography>
                              <Box sx={{height:"43%"}}>
                              <Typography align='center' sx={{fontSize:"18px",fontWeight:"500"}}>“One of the best digital marketing agency. Strongly recommended adelsocial to get the things done the way you want!.”</Typography>
                              </Box>
                              <Box>
                              <Box sx={{borderRadius:"50px",mt:"15px"}}>
                                   <Box sx={{width:"fit-content",display:"flex",alignItems:"center"}}>
                                   <Box> 
                                     <img src={bjp} alt="bjp"  />
                                   </Box>
                                     <Typography sx={{fontSize:"15px",fontWeight:"700",ml:"10px",width:"fit-content",wordWrap:"wrap"}}>Mr Chandrashekhar Bawankule Client (BJP) Leader</Typography>
                                   </Box>
                                   <Box sx={{p:"10px"}}>
                                     <Rating name="size-large" defaultValue={4} sx={{fontSize:"40px"}} size='large' disabled/>
                                   </Box>
                                </Box>
                              </Box>
                        </Paper>
                    </Box>


                    <Box sx={{m:"7px",transition: "transform 0.3s ease",'&:hover':{transform:"scale(1.1)"}}}>
                        <Paper sx={{height:"400px",width:"300px",p:"10px",m:"7px"}} elevation={3}>
                              <Typography align='center' sx={{p:"10px"}}>
                                 <img src={quote} alt="quote" height="50px" width="50px"/>
                              </Typography>
                              <Box sx={{height:"43%"}}>
                              <Typography align='center' sx={{fontSize:"18px",fontWeight:"500"}}>“one of the best digital marketing Agency in Delhi. They help with 360-degree digital solutions for every type of business. Great work by Adelsocial.”</Typography>
                              </Box>
                              <Box>
                              <Box sx={{mt:"15px"}}>
                                   <Box sx={{display:"flex",alignItems:"center"}}>
                                   <Box sx={{height:"fit-content",width:"fit-content",borderRadius:"50px",overflow:"hidden"}}> 
                                     <img src={avtar} alt="parsal" height="45px" width="55px" />
                                   </Box>
                                     <Typography sx={{fontSize:"15px",fontWeight:"700",ml:"10px",width:"fit-content",wordWrap:"wrap"}}>Mr Harkirat OberoiClient</Typography>
                                   </Box>
                                   <Box sx={{p:"10px"}}>
                                     <Rating name="size-large" defaultValue={4} sx={{fontSize:"40px"}} size='large' disabled/>
                                   </Box>
                                </Box>
                              </Box>
                        </Paper>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </>
  )
}

export default Testomonials