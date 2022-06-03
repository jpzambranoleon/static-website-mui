import { Button, Card, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";

const About = () => {
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item sx={12} sm={8}>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="left"
                        color="text.primary"
                        gutterBottom
                    >
                        Turning ideas
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="left"
                        color="text.primary"
                        gutterBottom
                    >
                        into realities
                    </Typography>
                    <Typography variant="h5" align="left" color="text.secondary" paragraph>
                        Leon Digitale is a start-up applications company with
                        the goal to develop applications for developers.
                    </Typography>
                    <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="left"
                        >
                        <Button variant="contained">Main call to action</Button>
                        <Button variant="outlined">Secondary action</Button>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                    <CardMedia 
                        component="img"
                        maxHeight="100%"
                        image="/images/app_unsplash.jpg"
                        alt="random"
                    />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;