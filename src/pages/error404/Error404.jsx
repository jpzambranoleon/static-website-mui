import { Box } from "@mui/material";
import Content from "./components/Content";

export default function Error404() {
    return (
        <main>
            <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <Content />
            </Box>
        </main>
    );
}