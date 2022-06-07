import { Cached, DarkMode, Extension, Favorite, SmartToy, Web } from "@mui/icons-material";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";

const WhatWeDo = () => {
    return (
        <Container>
            <Typography
                component="h1"
                variant="h6"
                align="center"
                color="primary"
                gutterBottom
            >
                WHAT WE DO?
            </Typography>
            <Typography
                component="h1"
                variant="h4"
                align="center"
                color="text.primary"
                fontWeight="bold"
                gutterBottom
            >
                We craft convenient web apps and digital products
            </Typography>
            <Typography 
                variant="h6" 
                align="center" 
                color="text.secondary" 
                paragraph
            >
                We design, build, and deploy web applications and digital products that are simple and easy to use.
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Web fontSize="large" color="primary" sx={{ mb: 2 }} />
                            <Typography variant="h5" gutterBottom>
                                Web design
                            </Typography>
                            <Typography color="text.secondary">
                                We design and develop beautiful, lightning-fast, 
                                and scalable, web apps tailored to improve your experience.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <DarkMode fontSize="large" color="primary" sx={{ mb: 2 }} />
                            <Typography variant="h5" gutterBottom>
                                UI/UX Design
                            </Typography>
                            <Typography color="text.secondary">
                                We craft great user-centered interfaces for web and mobile apps. 
                                We ensure to deliver intuitive and seamless experiences.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Extension fontSize="large" color="primary" sx={{ mb: 2 }} />
                            <Typography variant="h5" gutterBottom>
                                Product Development
                            </Typography>
                            <Typography color="text.secondary">
                                We carefully improve our digital products to 
                                deliver a great user experience, grow our user base, 
                                and increase retention.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Cached fontSize="large" color="primary" sx={{ mb: 2 }} />
                            <Typography variant="h5" gutterBottom>
                                Optimization
                            </Typography>
                            <Typography color="text.secondary">
                                Our web apps are optimized to be simple and enjoyable for
                                users.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <SmartToy fontSize="large" color="primary" sx={{ mb: 2 }} />
                            <Typography variant="h5" gutterBottom>
                                Machine Learning
                            </Typography>
                            <Typography color="text.secondary">
                                We build and deploy machine learning models for our 
                                applications to improve performance and increase user activity.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Favorite fontSize="large" color="primary" sx={{ mb: 2 }} />
                            <Typography variant="h5" gutterBottom>
                                Continuous updates
                            </Typography>
                            <Typography color="text.secondary">
                                We continually deploy improvements and new updates to our web apps.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default WhatWeDo;