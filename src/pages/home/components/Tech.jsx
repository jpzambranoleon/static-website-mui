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
                Build accessible React apps with speed
            </Typography>
            <Typography 
                variant="h6" 
                align="center" 
                color="text.secondary" 
                paragraph
            >
                Build a beautiful, modern website with flexible, fully customizable, atomic MUI components.
            </Typography>
            <Grid container spacing={3} align="center">
                <Grid item sx={12} sm={4}>
                    <Avatar sx={{ width: 60, height: 60, mb: 2, bgcolor: blue[50] }}>
                        <Laptop color="primary"/>
                    </Avatar>
                    <Typography gutterBottom variant="h6">
                        Built for developers
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        theFront is built to make your life easier. 
                        Variables, build tooling, documentation, and reusable components.
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
                        to make our applications attractive to users.
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