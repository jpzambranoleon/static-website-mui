import { Mail } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

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
                Unlike teams from big agencies, we will treat your project as ours. We will walk you through our smooth and simple process.
            </Typography>
            <Typography align="center">
                <Button variant="contained" disabled>
                    <Mail sx={{ mr: 2 }}/>
                    <Typography>
                        Contact us
                    </Typography>
                </Button>
                <Typography color="text.secondary">
                    Coming Soon
                </Typography>
            </Typography>
        </Container>
    )
};

export default ContactUs;