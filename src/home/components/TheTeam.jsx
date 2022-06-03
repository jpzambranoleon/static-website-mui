import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"

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
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Jean-Paul Zambrano-Leon
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Chief Executive Officer, Co-founder
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia 
                        component="img"
                        height="260"
                        image="/images/temp_portrait.jpg"
                        alt="portrait"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia 
                        component="img"
                        height="260"
                        image="/images/shane_cfo.jpg"
                        alt="portrait"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Shane Smith
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Chief Financial Officer
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia 
                        component="img"
                        height="260"
                        image="/images/temp_portrait.jpg"
                        alt="portrait"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>  
    )
}

export default TheTeam;