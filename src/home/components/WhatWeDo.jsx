import { Cached, DarkMode, Extension, Favorite, HeatPumpRounded, SmartToy, Web } from "@mui/icons-material";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";

const WhatWeDo = () => {
    return (
        <Container>
            <Typography
                component="h1"
                variant="h6"
                align="center"
                color="secondary"
                gutterBottom
            >
                WHAT WE DO?
            </Typography>
            <Typography
                component="h1"
                variant="h3"
                align="center"
                color="text.primary"
                gutterBottom
            >
                We craft beautiful websites and digital products
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                We design, develop and launch websites and products for startups, companies and ourselves.
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%', minWidth: 275 }}>
                        <CardContent>
                            <Web fontSize="large" color="primary"/>
                            <Typography variant="h5" gutterBottom>
                                Web design
                            </Typography>
                            <Typography color="text.secondary">
                                We design and develop beautiful, lightning fast, 
                                scalable, and marketing-focused websites tailored 
                                to grow your business.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%', minWidth: 275 }}>
                        <CardContent>
                            <DarkMode fontSize="large" color="primary"/>
                            <Typography variant="h5" gutterBottom>
                                UI/UX Design
                            </Typography>
                            <Typography color="text.secondary">
                                We craft great user centered interfaces 
                                for web and mobile apps. We ensure to deliver 
                                intuitive and seamless experiences.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%', minWidth: 275 }}>
                        <CardContent>
                            <Extension fontSize="large" color="primary"/>
                            <Typography variant="h5" gutterBottom>
                                Product Development
                            </Typography>
                            <Typography color="text.secondary">
                                We help you to carefully improve your digital 
                                product to deliver a great user experience, grow 
                                its user base and increase retention.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%', minWidth: 275 }}>
                        <CardContent>
                            <Cached fontSize="large" color="primary"/>
                            <Typography variant="h5" gutterBottom>
                                Optimization
                            </Typography>
                            <Typography color="text.secondary">
                                We help you optimize your website or mobile app to increase your conversion rates.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%', minWidth: 275 }}>
                        <CardContent>
                            <SmartToy fontSize="large" color="primary"/>
                            <Typography variant="h5" gutterBottom>
                                Machine Learning/ AI
                            </Typography>
                            <Typography color="text.secondary">
                                We build and deploy machine learning models to
                                improve application performance
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%', minWidth: 275 }}>
                        <CardContent>
                            <Favorite fontSize="large" color="primary"/>
                            <Typography variant="h5" gutterBottom>
                                Automation
                            </Typography>
                            <Typography color="text.secondary">
                            We help your business gain leverage and efficiency through smart automation.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default WhatWeDo;