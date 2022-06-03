import { Box, Button, Container, Typography, Stack } from "@mui/material";
import About from "./components/About";
import TheTeam from "./components/TheTeam";
import WhatWeDo from "./components/WhatWeDo";

export default function Home() {
    return (
        <main>
            <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <About />
            </Box>
            <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <WhatWeDo />
            </Box>
            <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                
            </Box>
            <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <TheTeam />
            </Box>
        </main>
    );
  }