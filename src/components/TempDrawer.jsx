import { Home } from "@mui/icons-material";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { useState } from "react";

const TempDrawer = ({ openDrawer, setOpenDrawer }) => {
    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    return (
        <Drawer anchor="left" open={openDrawer} >
            <Box sx={{ width: 250, height: '100%' }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>   
        </Drawer>
    )
};

export default TempDrawer