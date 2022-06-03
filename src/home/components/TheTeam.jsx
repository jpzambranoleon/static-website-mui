import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material"

const TheTeam = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia 
                        component="img"
                        height="260"
                        image="/images/jp_ceo2.jpg"
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
                        <IconButton>
                            <Facebook color="primary" />
                        </IconButton>
                        <IconButton>
                            <LinkedIn color="primary" />
                        </IconButton>
                        <IconButton>
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
                        <IconButton>
                            <Facebook color="primary" />
                        </IconButton>
                        <IconButton>
                            <LinkedIn color="primary" />
                        </IconButton>
                        <IconButton>
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
                        <IconButton>
                            <Facebook color="primary" />
                        </IconButton>
                        <IconButton>
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
                        image="/images/jp_ceo2.jpg"
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
                        <IconButton>
                            <Facebook color="primary" />
                        </IconButton>
                        <IconButton>
                            <LinkedIn color="primary" />
                        </IconButton>
                        <IconButton>
                            <GitHub color="primary" />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>  
    )
}

export default TheTeam;