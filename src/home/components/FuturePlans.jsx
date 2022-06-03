import { Card, CardMedia, Container, Grid, Typography } from "@mui/material";

const FuturePlans = () => {
    return (
        <Container sx={{ py: 8 }}>
            <Typography
                component="h1"
                variant="h6"
                align="center"
                color="secondary"
                gutterBottom
            >
                FUTURE PLANS
            </Typography>
            <Grid container spacing={5}>
                <Grid item sx={12} sm={6}>
                    <Typography
                        component="h1"
                        variant="h7"
                        align="left"
                        color="text.primary"
                        paragraph
                    >
                        Build powerful and easy applications powered with web3 technology
                    </Typography>
                    <Typography
                        variant="h6"
                        align="left"
                        color="text.secondary"
                        paragraph
                    >
                        Whether you're creating a subscription service, an on-demand marketplace, an e-commerce store, or a portfolio showcase, theFront helps you create the best possible product for your users.
                    </Typography>
                    <Grid container>
                        <Grid item sx={12} sm={4}>
                            <Typography
                                variant="h3"
                                align="left"
                                color="primary"
                                paragraph
                            >
                                300+
                            </Typography>
                            <Typography>
                                Lets play
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
                <Grid item xs={12} sm={6}>
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