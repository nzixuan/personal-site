import './App.css';

import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import Roboto from'@fontsource/roboto'
import TopBar from './components/TopBar';
import { sections } from './sections';

const drawerWidth = 120;

function App(props) {
  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const theme = createTheme({
    palette: {
      primary: {main: "#282c34"},
      divider: "#282c34",
      background: {
        default: "#282c34",
        paper: "#282c34",
      },
      text: {
        primary: '#fff',
        secondary: '#fff',
      },
      secondary: {main: "#282c34"},
    },
    typography: {
      fontFamily: [
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
      <ResponsiveDrawer drawerWidth={drawerWidth} container={container} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}></ResponsiveDrawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, pt:5, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
      >
        <section id={sections[0].id}>
          <Home></Home>
        </section>
         <section id={sections[1].id}>
          <h1>{sections[1].text}</h1>
          <h1> 

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed viverra ex. Maecenas at dui faucibus, accumsan arcu quis, aliquam ipsum. Donec venenatis eros nec aliquet finibus. Nulla ut euismod tellus. Pellentesque ultricies libero at sodales vulputate. Maecenas eget nibh ex. Morbi aliquam vel purus ut vulputate. In placerat, arcu at suscipit fermentum, ligula arcu cursus arcu, quis elementum tortor nisl sed est. Sed dolor quam, tincidunt varius tellus in, mattis ultrices velit. Vestibulum consectetur nibh sed sem feugiat commodo.

Fusce finibus sem non sapien ultricies egestas. Curabitur sed nibh non justo placerat auctor vitae non mauris. Nunc aliquam non nisi in maximus. Proin in purus et lorem fermentum egestas aliquet a neque. Nam rutrum sodales sapien eu ornare. Quisque nunc urna, molestie a lacus sed, mattis dapibus metus. Proin sollicitudin odio in pretium convallis. Quisque ultrices cursus est ac tempor.

In elementum, ex et efficitur ullamcorper, mi felis scelerisque massa, vitae dapibus nulla neque a enim. Nam eu tincidunt massa, porta luctus est. Morbi eu ante id nulla pretium maximus blandit non nibh. Etiam volutpat pretium quam, ac mattis diam mollis sit amet. In nec tincidunt lectus, nec dictum orci. Quisque dolor sapien, consequat in sapien non, semper venenatis mi. Sed sit amet lacus condimentum, malesuada ligula a, facilisis odio. Nulla non tortor tincidunt, bibendum tortor a, vehicula orci. Quisque eget molestie nulla, ac condimentum velit. Aliquam imperdiet metus id urna consectetur maximus. Nulla dapibus nunc dolor, vitae scelerisque mi vulputate vitae. Curabitur nec lectus nec augue laoreet vulputate ut in sapien. Aenean eu urna in nunc malesuada venenatis sed at arcu.

Proin accumsan justo ligula, a consectetur risus pharetra nec. Nulla scelerisque non turpis in efficitur. Integer porta, ipsum sit amet sodales vulputate, odio ipsum tempor urna, vel tincidunt metus leo et metus. Aliquam posuere ante id ante pharetra, ut dignissim augue finibus. Fusce malesuada lorem eget nisi tempus, nec tincidunt eros euismod. Vivamus pulvinar bibendum purus quis commodo. Curabitur mattis malesuada purus et euismod. Vivamus viverra ultrices lorem a imperdiet. Nullam condimentum est nec libero imperdiet laoreet. Nam non risus massa. Nam eros orci, bibendum ac pharetra a, semper eu enim. Donec est mauris, pulvinar quis cursus quis, pharetra at odio. Praesent luctus enim urna, nec lacinia tortor mollis sed.


          </h1>
        </section>
      </Box>
    </Box>
      </ThemeProvider>
    </div>

  );
}

export default App;
