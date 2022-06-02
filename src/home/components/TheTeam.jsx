import { Card, CardContent, Grid, Typography } from "@mui/material"

const TheTeam = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
                <Card
                    
                >
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