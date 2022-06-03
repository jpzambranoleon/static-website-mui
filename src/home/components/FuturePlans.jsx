import { Container, Grid, Typography } from "@mui/material";

const FuturePlans = () => {
    return (
        <Container>
            <Typography
                component="h1"
                variant="h6"
                align="center"
                color="secondary"
                gutterBottom
            >
                FUTURE PLANS
            </Typography>
            <Grid container>
                <Grid item sx={12} sm={8}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor dicta, nostrum sequi pariatur consequuntur aspernatur esse aperiam omnis molestias voluptas? Sit ut alias, dolores earum reprehenderit facere blanditiis. Pariatur.
                </Grid>
            </Grid>
        </Container>
    )
}

export default FuturePlans;