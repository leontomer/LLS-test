import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();

  return (
    <Drawer anchor="left" variant="permanent">
      <List>
        <ListItem button onClick={() => navigate("/courseselection")}>
          <ListItemText primary="Course selection" />
        </ListItem>
        {/* Add more list items as needed */}
      </List>
    </Drawer>
  );
}
