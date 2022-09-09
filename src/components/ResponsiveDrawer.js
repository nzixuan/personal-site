import './ResponsiveDrawer.css';

import * as React from 'react';

import { Link, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { sections } from '../data/sections';
import { styled } from '@mui/material/styles';

/**
 * @param {number} currentPosition Current Scroll position
 * @param {Array} sectionPositionArray Array of positions of all sections
 * @param {number} startIndex Start index of array
 * @param {number} endIndex End index of array
 * @return {number} Current Active index
 */
 const nearestIndex = (
  currentPosition,
  sectionPositionArray,
  startIndex,
  endIndex
) => {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sectionPositionArray.current[startIndex].current.offsetTop -
          currentPosition
      ) <
      Math.abs(
        sectionPositionArray.current[endIndex].current.offsetTop -
          currentPosition
      )
    )
      return startIndex;
    else return endIndex;
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs(
      sectionPositionArray.current[nextNearest].current.offsetTop -
        currentPosition
    );
    var b = Math.abs(
      sectionPositionArray.current[nextNearest + 1].current.offsetTop -
        currentPosition
    );
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      );
    }
  }
};

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function ResponsiveDrawer(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const drawerWidth = props.drawerWidth
  const container = props.container
  const mobileOpen = props.mobileOpen
  const handleDrawerToggle = props.handleDrawerToggle
  const sectionRefs = props.sectionRefs

  useEffect(() => {
    const handleScroll = (e) => {
      var index = nearestIndex(
        window.scrollY,
        sectionRefs,
        0,
        sectionRefs.current.length - 1
      );
      setActiveIndex(index);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const drawer = (
    <div>
      <Divider />
      <List sx={{pt:"2rem"}}>
      <Typography
            sx={{fontWeight: "bold" , color:"white", fontSize:"2rem", pb:"1rem", textDecoration: 'underline'}}>Zi Xuan</Typography>
        {sections.map((section) => (
          <div key={section.index}>
          <Box className='link-title' sx={{display: "flex", justifyContent:"center"}}>
          <Typography sx={{fontWeight:"bold",visibility:"hidden", fontSize:"1.5rem", pl: "0.5rem"}}>•</Typography>
            <Link  href={section.url}
            sx={{fontWeight: "bold" , color:section.color, fontSize:"1.5rem",}}>{section.text}</Link>
            <Typography className={activeIndex === section.index ? 'link-dot link-dot-active': 'link-dot'} sx={{fontWeight:"bold",color:section.color, fontSize:"1.5rem", pl: "0.5rem"}}>•</Typography>
          </Box>
          {
          section.index + 1 !== sections.length? 
                      <Typography sx={{fontWeight:"bold",color:"white", fontSize:"1.5rem", textAlign:"center"}}>•</Typography>: null
          }
          </div>
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
      variant="persistent"
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
      <DrawerHeader>
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <ChevronLeftIcon fontSize="large"/> 
          </IconButton>
        </DrawerHeader>
        <Divider/>
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
