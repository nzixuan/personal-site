import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

function TopBar(props) {

const drawerWidth = props.drawerWidth
const handleDrawerToggle = props.handleDrawerToggle

return(
<AppBar
position="fixed"
sx={{
  width: { sm: `calc(100% - ${drawerWidth}px)` },
  ml: { sm: `${drawerWidth}px` },
  display: { sm: 'none' }
}}
>
<Toolbar>
  <IconButton
    color="inherit"
    aria-label="open drawer"
    edge="start"
    onClick={handleDrawerToggle}
    sx={{ mr: 2, display: { sm: 'none' } }}
  >
    <MenuIcon />
  </IconButton>
</Toolbar>
</AppBar>

)
}
export default TopBar;
