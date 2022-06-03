import { Card, CardMedia, Container, Grid, Typography } from "@mui/material";

const Skills = () => {
    return (
        <Container sx={{ p: 6 }}>
            <Grid container spacing={5}>
                <Grid item sx={12} sm={6}>
                    <Typography
                        component="h1"
                        variant="h7"
                        align="left"
                        color="text.primary"
                        paragraph
                    >
                        Build powerful and easy applications powered with web3 technology
                    </Typography>
                    <Typography
                        variant="h6"
                        align="left"
                        color="text.secondary"
                        paragraph
                    >
                        Our talented team of developers have the skills to build, deploy, and maintain web applications
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item sx={12} sm={4}>
                            <Typography
                                variant="h3"
                                align="left"
                                color="primary"
                                paragraph
                            >
                                3+
                            </Typography>
                            <Typography>
                                3+ years of experience in web apps development
                                and machine learning
                            </Typography>
                        </Grid>
                        <Grid item sx={12} sm={4}>
                            <Typography
                                variant="h3"
                                align="left"
                                color="primary"
                                paragraph
                            >
                                MUI
                            </Typography>
                            <Typography>
                                MUI library is used to make
                                our applications look sleek and modern
                            </Typography>
                        </Grid>
                        <Grid item sx={12} sm={4}>
                            <Typography
                                variant="h3"
                                align="left"
                                color="primary"
                                paragraph
                            >
                                ML/AI
                            </Typography>
                            <Typography>
                                Advanced ML models are used in our web applications
                                to improve the user experience
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardMedia 
                            component="img"
                            maxHeight="100%"
                            image="/images/slick_laptop.jpg"
                            alt="random"
                        />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Skills;