import { Home } from "@mui/icons-material";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { useState } from "react";

const TempDrawer = ({ openDrawer, setOpenDrawer }) => {
    return (
        <Drawer open={openDrawer} >
            <Box>
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