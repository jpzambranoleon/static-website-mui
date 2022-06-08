import { Mail } from "@mui/icons-material";
import { Box, Button, Card, CardMedia, Container, Grid, Typography } from "@mui/material";

const ContactUs = () => {
    return (
        <Container>
            <Typography
                component="h1"
                variant="h6"
                align="center"
                color="primary"
                gutterBottom
            >
                OUR WORK
            </Typography>
            <Typography
                component="h1"
                variant="h4"
                align="center"
                color="text.primary"
                fontWeight="bold"
                gutterBottom
            >
                We are a small team of talented designers & developers
            </Typography>
            <Typography 
                variant="h6" 
                align="center" 
                color="text.secondary" 
                paragraph
            >
                We are constantly working on new and existing projects. User feedback is used to make improvements and updates.
            </Typography>
            <Typography align="center">
                <Button variant="contained" disabled>
                    <Mail sx={{ mr: 2 }}/>
                    <Typography>
                        Contact us
                    </Typography>
                </Button>
                <Typography color="text.secondary" gutterBottom>
                    Coming Soon
                </Typography>
            </Typography>
            <Box sx={{ mt: 3 }}>
                <Grid container spacing={3}>
                    <Grid item sx={12} sm={6}>
                        <Box sx={{ mt: { xl: 7 } }}>
                            <Typography
                                variant="h5"
                                gutterBottom
                            >
                                Team Finder
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                paragraph
                            >
                                Find soccer players, teams, and trainers in your area. 
                                A message board for those interested in finding others to play soccer with.
                            </Typography>
                            <Button
                                variant="contained"
                                disabled
                            >
                                Learn more
                            </Button>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                paragraph
                            >
                                Coming soon
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sx={12} sm={6} xs={12}>
                        <Card>
                            <CardMedia 
                                component="img"
                                height="260"
                                image="/images/team-finder.JPG"
                                alt="coming-soon"  
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
};

export default ContactUs;