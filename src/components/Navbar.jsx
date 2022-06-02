import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    leone digitale
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;