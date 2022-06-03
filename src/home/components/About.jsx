import { CardMedia, Grid, Typography } from "@mui/material";

const About = () => {
    return (
        <Grid container>
            <Grid item sx={12} sm={8}>
                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, alias deleniti quo ipsum porro quod enim obcaecati accusamus cumque praesentium assumenda laborum ducimus eaque, ad nemo iusto ab repudiandae sed?
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CardMedia 
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                />
            </Grid>
        </Grid>
    )
}

export default About;