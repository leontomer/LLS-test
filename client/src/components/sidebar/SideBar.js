import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Toolbar,
  ListItemButton,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./SideBar.css";
import { sideBarTextCourseSelection } from "../../Constants";

export default function SideBar() {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/courseselection")}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={sideBarTextCourseSelection} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}
