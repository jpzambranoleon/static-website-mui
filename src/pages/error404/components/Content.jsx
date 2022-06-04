import { Button, Container, Grid, Typography } from "@mui/material";

const Content = () => {
    return (
      <Container>
            <Grid container>
                <Grid item sx={12} sm={6}>
                    <Typography
                        component="h1"
                        variant="h1"
                        align="left"
                        color="text.primary"
                        gutterBottom
                    >
                        404
                    </Typography>
                    <Typography 
                        variant="h5" 
                        align="left" 
                        color="text.secondary" 
                    >
                        Oops! Looks like you followed a bad link or the page hasn't been set up yet.
                    </Typography>
                    <Typography 
                        variant="h5" 
                        align="left" 
                        color="text.secondary"
                        paragraph
                    >
                        If you think this is a problem with us, please tell us
                    </Typography>
                    <Button variant="contained">
                        Back home
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img />
                </Grid>
            </Grid> 
      </Container>  
    )
}

export default Content;