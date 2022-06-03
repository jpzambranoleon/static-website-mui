import { Button, Card, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";

const WhatWeDo = () => {
    return (
        <Container sx={{ py: 8 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    What we do
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    We design, develop and launch websites and products for startups, companies and ourselves.
                </Typography>
            </Container>
    )
}

export default WhatWeDo;