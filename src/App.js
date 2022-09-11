import './App.css';

import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Contact from './components/Contact';
import CssBaseline from '@mui/material/CssBaseline';
import Education from './components/Education';
import Experience from './components/Experience';
import Home from './components/Home';
import Projects from './components/Projects';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import TopBar from './components/TopBar';
import { Typography } from '@mui/material';
import asap from "@fontsource/asap-condensed";
import { sections } from './data/sections';

const drawerWidth = 150;

function App(props) {
  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const sectionRefs = React.useRef([]);
  sectionRefs.current= sections.map((_, i) => sectionRefs.current[i] ?? React.createRef())
  console.log(sectionRefs.current)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // 282c34
  // const bcolour ="#202124"
  const bcolour ="#202124"

  const theme = createTheme({
    palette: {
      primary: {main: bcolour},
      divider: bcolour,
      background: {
        default: bcolour,
        paper: bcolour,
      },
      text: {
        primary: '#fff',
        secondary: '#fff',
      },
      secondary: {main: "#fff"},
    },
    typography: {
      fontFamily: [
        'Asap Condensed',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(',')}
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}></TopBar>
      <ResponsiveDrawer drawerWidth={drawerWidth} container={container} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}
      sectionRefs={sectionRefs}
      ></ResponsiveDrawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p:3, pt:5, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
        id={sections[0].id}
        ref={sectionRefs.current[0]}
      >
        <section>
          <Home></Home>
        </section>
         <section id={sections[1].id} ref={sectionRefs.current[1]}>
        <Projects></Projects>
        </section>
        <section id={sections[2].id} ref={sectionRefs.current[2]}>
        <Typography sx={{color:"white", pr:4, textDecoration:"underline"}} variant='h3'>{sections[2].text}</Typography>
          <Experience></Experience>
        </section>
        <section id={sections[3].id} ref={sectionRefs.current[3]}>
        <Typography sx={{color:"white", pr:4, textDecoration:"underline"}} variant='h3'>{sections[3].text}</Typography>
          <Education></Education>
        </section>
        <section id={sections[4].id} ref={sectionRefs.current[4]}>
        <Contact></Contact>
        </section>
      </Box>
    </Box>
      </ThemeProvider>
    </div>

  );
}

export default App;
