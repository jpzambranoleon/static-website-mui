import { Box, Container, Grid, ImageListItem, Typography } from "@mui/material";

const itemData = [
  {
    img: "/images/leone_digitale_group.jpg",
    title: "team",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item sx={12} sm={6}>
              <Box>
                <Typography component="h1" variant="h3" align="center" color="primary">
                  About
                </Typography>
                <Typography variant="h6" align="left" color="text.secondary">
                  We are a small group of developers and business partners. We created this company to build convenient web applications that meet the needs of
                  niche markets and groups. It started as a small project by <b>Jean-Paul Zambrano-Leon</b> and <b>Zurab Sabakhtarishvili</b>. They added{" "}
                  <b>Shane Smith</b> and <b>Albert Zhang</b> as collaborators. These four friends are working to build their ideas to life and share it within
                  the digital market.
                </Typography>
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
