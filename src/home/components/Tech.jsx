import { Laptop } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";

const Skills = () => {
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
                Build accessible React apps with speed
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Build a beautiful, modern website with flexible, fully customizable, atomic MUI components.
            </Typography>
            <Grid container spacing={2}>
                <Grid item>
                    <Laptop />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Skills;