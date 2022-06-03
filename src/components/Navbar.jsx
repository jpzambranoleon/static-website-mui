import { Menu } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar position="relative" sx={{ bgcolor: 'background.paper' }}>
            <Toolbar sx={{ width: { sm: '76%' }, margin: { sm: '0 auto' }, justifyContent: 'space-between' }}>
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
                        <Button color="primary">
                            Team
                        </Button>
                    </Box>
                    <IconButton color="primary" sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <Menu />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;