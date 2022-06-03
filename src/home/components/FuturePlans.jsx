import { Card, CardMedia, Container, Grid, Typography } from "@mui/material";

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
                    <Grid container>
                        <Grid item sx={12} sm={4}>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aut sapiente, sed perferendis harum accusamus ab doloribus quae adipisci totam ex omnis labore doloremque modi, sint vitae ad quod autem.
                            </Typography>
                        </Grid>
                        <Grid item sx={12} sm={4}>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aut sapiente, sed perferendis harum accusamus ab doloribus quae adipisci totam ex omnis labore doloremque modi, sint vitae ad quod autem.
                            </Typography>
                        </Grid>
                        <Grid item sx={12} sm={4}>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aut sapiente, sed perferendis harum accusamus ab doloribus quae adipisci totam ex omnis labore doloremque modi, sint vitae ad quod autem.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardMedia 
                            component="img"
                            maxHeight="100%"
                            image="/images/slick_laptop.jpg"
                            alt="random"
                        />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FuturePlans;