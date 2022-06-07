import { Code, Laptop, Palette } from "@mui/icons-material";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const Tech = () => {
    return (
        <Container>
            <Typography
                component="h1"
                variant="h4"
                align="center"
                color="text.primary"
                fontWeight="bold"
                gutterBottom
            >
                Built for quality and simplicity
            </Typography>
            <Typography 
                variant="h6" 
                align="center" 
                color="text.secondary" 
                paragraph
            >
                Our web apps are designed to match the quality of modern apps and being simple to use.
            </Typography>
            <Grid container spacing={3} align="center">
                <Grid item sx={12} sm={4}>
                    <Avatar sx={{ width: 60, height: 60, mb: 2, bgcolor: blue[50] }}>
                        <Laptop color="primary"/>
                    </Avatar>
                    <Typography gutterBottom variant="h6">
                        Simple UI/UX
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Our applications are built to make your life easier.
                        We design our apps with simple and enjoyable UI/UX components.
                    </Typography>
                </Grid>
                <Grid item sx={12} sm={4}>
                    <Avatar sx={{ width: 60, height: 60, mb: 2, bgcolor: blue[50] }}>
                        <Palette color="primary"/>
                    </Avatar>
                    <Typography gutterBottom variant="h6">
                        Designed to be modern
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Our development team uses modern frameworks such as React and MUI
                        to build and deploy our applications.
                    </Typography>
                </Grid>
                <Grid item sx={12} sm={4}>
                    <Avatar sx={{ width: 60, height: 60, mb: 2, bgcolor: blue[50] }}>
                        <Code color="primary"/>
                    </Avatar>
                    <Typography gutterBottom variant="h6">
                        Open Source
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Our web applications are open source, giving developers the ability
                        to publically access, modify, and distribute our code.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Tech;