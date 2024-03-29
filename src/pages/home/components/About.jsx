import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import MasonryImageList from "./MasonryImageList";

const About = () => {
  return (
    <Container sx={{ py: { lg: 8 } }}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Typography
            component="h1"
            variant="h3"
            align="left"
            color="text.primary"
            fontWeight="bold"
            gutterBottom
          >
            Turning ideas into realities
          </Typography>
          <Typography component="h3" variant="h3" color="primary" gutterBottom>
            Leone Digitale
          </Typography>
          <Typography
            variant="h5"
            align="left"
            color="text.secondary"
            paragraph
          >
            We are a start-up applications company that specializes in quality
            and simplicity. Our digital products are designed to be helpful,
            simple, and enjoyable to use.
          </Typography>
          <Stack
            sx={{ pt: 4, display: { xs: "none", sm: "flex" } }}
            direction="row"
            spacing={2}
            justifyContent="left"
          >
            <Button
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("what-we-do").offsetTop,
                  behavior: "smooth",
                })
              }
              variant="contained"
            >
              Find out more
            </Button>
            <Button
              variant="outlined"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("our-team").offsetTop,
                  behavior: "smooth",
                })
              }
            >
              View team
            </Button>
          </Stack>
          <Stack
            sx={{ pt: 4, display: { xs: "flex", sm: "none" } }}
            direction="column"
            spacing={2}
          >
            <Button
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("what-we-do").offsetTop,
                  behavior: "smooth",
                })
              }
              variant="contained"
            >
              Find out more
            </Button>
            <Button
              variant="outlined"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("our-team").offsetTop,
                  behavior: "smooth",
                })
              }
            >
              View team
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <MasonryImageList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
