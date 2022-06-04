import { Button, Card, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import MasonryImageList from "./MasonryImageList";

const About = () => {
    return (
        <Container sx={{ py: {lg: 8} }}>
            <Grid container spacing={4}>
                <Grid item sx={12} sm={6}>
                    <Typography
                        component="h1"
                        variant="h3"
                        align="left"
                        color="text.primary"
                        gutterBottom
                    >
                        Turning ideas into realities: 
                    </Typography>
                    <Typography
                        component="h3"
                        variant="h3"
                        color="primary"
                        gutterBottom
                    >
                        Leone Digitale
                    </Typography>
                    <Typography variant="h5" align="left" color="text.secondary" paragraph>
                        Leon Digitale is a start-up applications company with
                        the goal to develop applications with web3 technology.
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
                <Grid item xs={12} sm={6}>
                    <MasonryImageList />
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;