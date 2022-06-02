import { Box, Container, Grid, Typography } from "@mui/material";

export default function Home() {
    return (
        <>
        <Box
            sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}
        >
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Album layout
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Something short and leading about the collection below—its contents,
                    the creator, etc. Make it short and sweet, but not too short so folks
                    don&apos;t simply skip over it entirely.
                </Typography>
            </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    
                </Grid>
            </Grid>
        </Container>
        </>
    );
  }