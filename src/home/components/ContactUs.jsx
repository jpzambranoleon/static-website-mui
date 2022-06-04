import { Mail } from "@mui/icons-material";
import { Button } from "@mui/material";

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
            <Button>
                <Mail />
                Contact us
            </Button>
        </Container>
    )
};

export default ContactUs;