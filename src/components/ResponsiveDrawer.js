import * as React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { Link } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { sections } from '../sections';

function ResponsiveDrawer(props) {
  const drawerWidth = props.drawerWidth
  const container = props.container
  const mobileOpen = props.mobileOpen
  const handleDrawerToggle = props.handleDrawerToggle

  const drawer = (
    <div>
      <Divider />
      <List>
        {sections.map((section) => (
          <ListItem key={section.text} >
            <Link href={section.url}
            sx={{fontWeight: "bold" , color:section.color}}>{section.text}</Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  
  return (
    <Box
    component="nav"
    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    aria-label="Navigation"
  >
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
      {drawer}
    </Drawer>
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
      open
    >
      {drawer}
    </Drawer>
  </Box>
  );
}
export default ResponsiveDrawer;
