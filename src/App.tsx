import './App.css';
import Home from './pages/Home';
import Software from './pages/Software';
import Art from './pages/Art';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const drawerWidth = 240;
const navItems = [
  { text: '👋🏽', link: '/' },
  { text: '💻', link: '/software' },
  { text: '🎞', link: '/art' },
];

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const basename = '/website'; 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.link} component={Link} to={item.link}>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography variant="h6" sx={{ fontSize: 30, textAlign: 'center'}}>
                    {item.text}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Router basename={basename}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none', right: 0 }}>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <div className='menu-icon'>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, color: '#212121' }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          },
        }}
      >
        {drawer}
      </Drawer>
      <Box component="main" sx={{ p: 3 }}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software" element={<Software />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;