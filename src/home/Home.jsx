import { Box } from "@mui/material";
import Copyright from "../components/Copyright";
import About from "./components/About";
import Skills from "./components/Skills";
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
                <Skills />
            </Box>
            <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <TheTeam />
            </Box>
            <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <Copyright />
            </Box>
        </main>
    );
  }