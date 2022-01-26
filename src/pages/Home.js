import { Box, Typography, Button, Paper, Divider, Stack, Badge } from '@mui/material'
import React from 'react'
import Home1 from '../assets/home1.jpg'
import Child from '../assets/child.png'
import GenDoc from '../assets/genDoc.png'
import JayRon from '../assets/jayron.jpg'
import Regine from '../assets/regine.jpg'
import Prago from '../assets/prago.jpg'
import Jym from '../assets/jym.jpg'
import AboutLogo from '../assets/icon-192x192.png'
import Marc from '../assets/marc.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import '../App.css';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'GrayText',
}));


export default function Home() {
    return (
        <Box>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ExpressMD</title>
            </Helmet>
            <Navbar />
            <Box className="homeBox">
                <Box className="headerBox" >
                    <Box className="box1 slide-right">
                        <h1 className="header">
                            HOME CARE FOR YOUR FAMILY
                        </h1>
                        <Typography className="homeText1">
                            ExpressMD will help you search for the nearest doctor that you need and get treated at home without the fear of contracting the COVID-19 virus outside.
                        </Typography>

                        <Button className="AppButton" variant="contained" onClick={() => window.location = "https://app.expressmd.ga"}>Launch the App</Button>
                    </Box>
                    <img src={Home1} className="homeImg1 slide-left" />
                </Box>
            </Box>
            <Box className="typesList">
                <Box className="typesContainer">
                    <Typography className="header" variant="h3">Medical Services</Typography>
                </Box>
                <Box className="typeBox">
                    <Paper className="typePaper" elevation="8">
                        <Box>
                            <img src={Child} className="childImg" />
                            <Typography variant="h6">Pediatrics</Typography>
                        </Box>
                        <Box>
                            <img src={GenDoc} className="genDocImg" />
                            <Typography variant="h6">General Doctor</Typography>
                        </Box>
                    </Paper>
                </Box>
            </Box>
            <Box className="aboutUsBox">
                <Box className="aboutUsContainer">
                    <Typography className="header" variant="h3">About Us</Typography>
                </Box>
                <Box className="aboutUsTextContainer">
                    <Typography className="aboutUsText" paragraph="true">
                        ExpressMD aims to provide users with the ability to find doctors without having to go outside. This is useful for the children, elderly, and pregnant women who need medical care without having to go to a clinic or hospital.
                    </Typography>
                    <Typography className="aboutUsText" paragraph="true">
                        Request an appointment now and receive the medical services that we offer. We assure you that the doctors in ExpressMD are all professional and passed our screening before hiring them.
                    </Typography>
                    <img src={AboutLogo} alt="logo" />
                </Box>
            </Box>
            <Box className="howitworksBox">
                <Box className="howitworksContainer">
                    <Typography className="header" variant="h3">How It Works</Typography>
                </Box>
                <Box className="howitworksTextContainer">
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                    >
                        <Item>
                            <Badge badgeContent={1} color="primary" />
                            <SearchIcon fontSize="large" />

                            <Typography variant="h6">Browse Doctors</Typography>
                        </Item>
                        <Item>Item 2</Item>
                        <Item>Item 3</Item>
                    </Stack>
                </Box>
            </Box>
            <Box className="ourTeamBox">
                <Box className="ourTeamContainer">
                    <Typography className="header" variant="h3">Meet The Team</Typography>
                </Box>
                <Box className="typeBox">
                    <Paper elevation="8">
                        <Box className="ourTeamContainer2">
                            <Box className="avatarContainer">
                                <img src={Regine} className="teamAvatar" />
                                <Typography variant="h6">Regine Manuel</Typography>
                                <Typography variant="subtitle1">Team Leader</Typography>
                            </Box>
                            <Divider orientation="vertical" flexItem className="dividerVert" />
                            <Divider orientation="horizontal" flexItem className="dividerHori" />
                            <Box className="avatarContainer">
                                <img src={Prago} className="teamAvatar" />
                                <Typography variant="h6">Cristofer Prago</Typography>
                                <Typography variant="subtitle1">Front-End Developer</Typography>
                            </Box>
                            <Divider orientation="vertical" flexItem className="dividerVert" />
                            <Divider orientation="horizontal" flexItem className="dividerHori" />
                            <Box className="avatarContainer">
                                <img src={Marc} className="teamAvatar" />
                                <Typography variant="h6">Marc Angelo Chiapco</Typography>
                                <Typography variant="subtitle1">Back-End Developer</Typography>
                            </Box>
                            <Divider orientation="vertical" flexItem className="dividerVert" />
                            <Divider orientation="horizontal" flexItem className="dividerHori" />
                            <Box className="avatarContainer">
                                <img src={Jym} className="teamAvatar" />
                                <Typography variant="h6">Jym Cyruz Fajiculay</Typography>
                                <Typography variant="subtitle1">Front-End Developer</Typography>
                            </Box>
                            <Divider orientation="vertical" flexItem className="dividerVert" />
                            <Divider orientation="horizontal" flexItem className="dividerHori" />
                            <Box className="avatarContainer">
                                <img src={JayRon} className="teamAvatar" />
                                <Typography variant="h6">Jay Ron Mendoza</Typography>
                                <Typography variant="subtitle1">Back-End Developer</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}
