import { Container, Grid, Typography } from "@mui/material";

const Content = () => {
    return (
      <Container>
            <Grid container>
                <Grid item sx={12} sm={6}>
                    <Typography
                        component="h1"
                        variant="h3"
                        align="left"
                        color="text.primary"
                        fontWeight="bold"
                        gutterBottom
                    >
                        404
                    </Typography>
                    <Typography 
                        variant="h5" 
                        align="left" 
                        color="text.secondary" 
                        paragraph>
                        Leon Digitale is a start-up applications company with
                        the goal to develop applications with web3 technology.
                    </Typography>
                </Grid>
            </Grid> 
      </Container>  
    )
}

export default Content;