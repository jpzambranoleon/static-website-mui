import { Box, Button, Container, Typography, Stack } from "@mui/material";
import About from "./components/About";
import FuturePlans from "./components/FuturePlans";
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
                <FuturePlans />
            </Box>
            <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <TheTeam />
            </Box>
        </main>
    );
  }