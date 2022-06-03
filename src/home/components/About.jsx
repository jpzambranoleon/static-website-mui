import { CardMedia, Container, Grid, Typography } from "@mui/material";

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
                        Turning Ideas
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="left"
                        color="text.primary"
                        gutterBottom
                    >
                        Into Realities
                    </Typography>
                    <Typography variant="h5" align="left" color="text.secondary" paragraph>
                        We are a team of college friends who decided to form a company on the
                        basis of brining our ideas to life. We come from different parts of the
                        world, but we have one thing in common: our love of technology. Which is
                        why we decided to build a company that follows the latest trends in 
                        computer programing, machine learning and cryptocurrency. We may be a start-up,
                        but we have big plans for the future.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CardMedia 
                        component="img"
                        image="https://unsplash.com/photos/HVp2MG15y3E"
                        alt="random"
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;