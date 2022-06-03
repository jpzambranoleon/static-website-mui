import { Web } from "@mui/icons-material";
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
                    <Card sx={{ minWidth: 275 }}>
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
                    <Card sx={{ minWidth: 275 }}>
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
                    <Card sx={{ minWidth: 275 }}>
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
                    <Card sx={{ minWidth: 275 }}>
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
                    <Card sx={{ minWidth: 275 }}>
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
                    <Card sx={{ minWidth: 275 }}>
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
            </Grid>
        </Container>
    )
}

export default WhatWeDo;