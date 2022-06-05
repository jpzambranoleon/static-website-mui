import { Home } from "@mui/icons-material";
import { Box, ClickAwayListener, Drawer, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { useState } from "react";

const TempDrawer = ({ openDrawer, setOpenDrawer }) => {
    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    return (
        <Drawer anchor="left" open={openDrawer} sx={{ display: { sm: 'none' } }} >
            <ClickAwayListener onClickAway={handleDrawerClose}>
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
            </ClickAwayListener> 
        </Drawer>
    )
};

export default TempDrawer