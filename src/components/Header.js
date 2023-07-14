import { AppBar, Toolbar, CssBaseline, Box, Link, Typography, IconButton, Button, Grid } from '@mui/material';
// import logo from '../assets/logo.png'
import ScrollToColor from "../global/ScrollToColor";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext } from 'react';
import { AdelContext } from '../store/Context';
import { HOVER_COLOR, ICON_COLOR, MAIN_COLOR, SECONDARY_COLOR } from '../constant';

export default function Header() {
    const { state } = useContext(AdelContext)
    const style = {
        '&:hover': { opacity: 0.6, borderBottom: `3px solid ${HOVER_COLOR}` },
        transition: "all 0.50s ease",
        mr: "20px",
        color: SECONDARY_COLOR,
        cursor: "pointer",
        textDecoration: "none",
        fontWeight: 800,
        borderBottom: '3px solid transparent',
        padding: '5px 5px',
    }
    // Homepage header
    return (
        <Grid item>
            <CssBaseline />

            <ScrollToColor>
                <AppBar>
                    <Toolbar>
                        <Box id="logoImg" sx={{ flexGrow: state.currentScreenSize > 918 ? 0.3 : 1 }} >
                            <Typography variant='h1' sx={{ color: state.trigger ? SECONDARY_COLOR : MAIN_COLOR }} fontWeight={900} fontSize={'25px'}>AdelSocial</Typography>
                            {/* <img width="200px" className='imgStyles' height="50px" style={{ aspectRatio: "auto 165 / 35" }} src={logo} alt="logo" /> */}
                        </Box>
                        {state.currentScreenSize > 918 && <Box sx={{ display: "flex", flexGrow: 1, justifyContent: 'space-evenly' }}>
                            <Link id="navBarHide" sx={style}>Home</Link>
                            <Link id="navBarHide" sx={style}>About</Link>
                            <Link id="navBarHide" sx={style}>IT Services</Link>
                            <Link id="navBarHide" sx={style}>Projects</Link>
                            <Link id="navBarHide" sx={style}>Contact</Link>
                        </Box>}

                        <Box sx={{ display: "flex" }}>
                            <IconButton sx={{ color: state.trigger ? SECONDARY_COLOR : MAIN_COLOR, '&:hover': { opacity: 0.6 }, transition: "all 0.70s ease", }}>
                                <LockOutlinedIcon />
                            </IconButton>
                            <IconButton sx={{ color: state.trigger ? SECONDARY_COLOR : MAIN_COLOR, '&:hover': { opacity: 0.6 }, transition: "all 0.70s ease", }}>
                                <SearchOutlinedIcon />
                            </IconButton>
                            <Button variant='outlined' sx={{ border: state.trigger && `1px solid ${SECONDARY_COLOR}`, color: state.trigger ? SECONDARY_COLOR : MAIN_COLOR, textTransform: 'unset', fontWeight: 900, display: { xs: 'none', sm: 'flex' } }}>Free Consultancy</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ScrollToColor>
        </Grid >
    );
}