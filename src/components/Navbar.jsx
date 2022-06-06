import { Menu } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import TempDrawer from "./TempDrawer";

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    return (
        <>
        <TempDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <AppBar position="relative" sx={{ bgcolor: 'background.paper' }}>
            <Toolbar sx={{ width: { xl: '76%', lg: '90%' }, margin: { xl: '0 auto', lg: '0 auto' }, justifyContent: 'space-between' }}>
                <Typography variant="h5" color="primary" noWrap>
                    Leone Digitale
                </Typography>
                <Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button color="primary">
                            Home
                        </Button>
                        <Button color="primary">
                            About
                        </Button>
                    </Box>
                    <IconButton 
                        color="primary" 
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                        onClick={handleDrawerOpen}
                    >
                        <Menu />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar;