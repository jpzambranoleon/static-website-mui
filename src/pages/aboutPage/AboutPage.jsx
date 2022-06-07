import { Box, Container, Grid, Typography } from "@mui/material";

const itemData = [
    {
        img: '/images/leone_digitale_group.jpg',
        title: 'team'
    },
]

export default function AboutPage() {
    return (
        <main>
            <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item sx={12} sm={6}>
                            <Box sx={{ pt: { xl: 15 } }}>
                                <Typography
                                    component="h1"
                                    variant="h1"
                                    align="left"
                                    color="text.primary"
                                >
                                    404
                                </Typography>
                                <Typography 
                                    variant="h6" 
                                    align="left" 
                                    color="text.secondary" 
                                >
                                    Oops! Looks like you followed a bad link or the page hasn't been set up yet.
                                </Typography>
                                <Typography 
                                    variant="h6" 
                                    align="left" 
                                    color="text.secondary"
                                    paragraph
                                >
                                    {/*If you think this is a problem with us, please tell us */}
                                </Typography>
                                <Button variant="contained" size="large" sx={{ mt: 1 }}>
                                    Back home
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </main>
    );
  }