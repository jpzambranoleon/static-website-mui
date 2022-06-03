import { Box, Button, Container, Typography, Stack } from "@mui/material";
import About from "./components/About";
import TheTeam from "./components/TheTeam";

export default function Home() {
    return (
        <main>
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
            <About />
            <Container sx={{ py: 8 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    The Team
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    We are a team of college friends who decided to form a company on the
                    basis of brining our ideas to life. We come from different parts of the
                    world, but we have one thing in common: our love of technology. Which is
                    why we decided to build a company that follows the latest trends in 
                    computer programing, machine learning and cryptocurrency. We may be a start-up,
                    but we have big plans for the future.
                </Typography>
            </Container>
        </Box>
        <Container sx={{ py: 8 }}>
          {/* End hero unit */}
          <TheTeam />
        </Container>
      </main>
    );
  }