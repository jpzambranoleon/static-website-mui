import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Typography } from "@mui/material"

const TheTeam = () => {
    return (
        <Container>
            <Typography
                component="h1"
                variant="h6"
                align="center"
                color="secondary"
                gutterBottom
            >
                OUR TEAM
            </Typography>
            <Typography
                component="h1"
                variant="h3"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Meet the professionals
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia 
                            component="img"
                            height="260"
                            image="/images/jp_ceo.jpg"
                            alt="portrait"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Jean-Paul Zambrano-Leon
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Chief Executive Officer, Co-founder
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton href="https://www.facebook.com/jeanpaul.zambranoleon/">
                                <Facebook color="primary" />
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/in/jpzambranoleon/">
                                <LinkedIn color="primary" />
                            </IconButton>
                            <IconButton href="https://github.com/jpzambranoleon">
                                <GitHub color="primary" />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia 
                            component="img"
                            height="260"
                            image="/images/zurab_cio.jpg"
                            alt="portrait"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Zurab Sabakhtarishvili
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Chief Information Officer
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton href="https://www.facebook.com/zurab.sabakhtarishvili">
                                <Facebook color="primary" />
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/in/zurab-sabakhtarishvili-33b2731b4/">
                                <LinkedIn color="primary" />
                            </IconButton>
                            <IconButton href="https://github.com/ZSabakh">
                                <GitHub color="primary" />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
                        <CardMedia 
                            component="img"
                            height="260"
                            image="/images/shane_cfo.jpg"
                            alt="portrait"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Shane Smith
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Chief Financial Officer
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton href="https://www.facebook.com/shane.smith.3597">
                                <Facebook color="primary" />
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/in/shane-smith-mba/">
                                <LinkedIn color="primary" />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia 
                            component="img"
                            height="260"
                            image="/images/albert_cfo.jpg"
                            alt="portrait"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Albert Zhang
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Chief Financial Officer
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton href="https://www.facebook.com/albert.zhang.10048">
                                <Facebook color="primary" />
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/in/mrhzhang/">
                                <LinkedIn color="primary" />
                            </IconButton>
                            <IconButton href="https://github.com/AbbaGucci">
                                <GitHub color="primary" />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default TheTeam;