import { Home } from "@mui/icons-material";
import { Box, ClickAwayListener, Drawer, List, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material";
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
                        <ListItem>
                            <Typography 
                                component="h3"
                                variant="h5"
                                color="primary"
                                gutterBottom
                            >
                                Leone Digitale
                            </Typography>
                        </ListItem>
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