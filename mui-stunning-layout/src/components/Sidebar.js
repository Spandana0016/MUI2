import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Home, Info, ContactMail } from '@mui/icons-material';

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', backgroundColor: '#f4f6f8' },
      }}
    >
      <List>
        {[{ text: 'Home', icon: <Home /> }, { text: 'About', icon: <Info /> }, { text: 'Contact', icon: <ContactMail /> }].map((item, index) => (
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;