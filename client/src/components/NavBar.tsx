import React, { ReactElement, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = [{title: 'Create A Campaign', link: '/create'}, {title: 'Fund A Campaign', link: '/campaigns'}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface Props {}

const useStyles = makeStyles(() => ({

  container: {
    overflow: 'hidden',
    
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    height: 80,
    justifyContent: "space-between",
    position: "fixed",
    top: 0, /* Position the navbar at the top of the page */
    width: '100%', /* Full width */
    zIndex: 1
  },
  link: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  logo: {
    color: "#FFFFFF",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    width: "33%",
    justifyContent: "space-between",

  },
}));

export default function NavBar({}: Props): ReactElement {
  const classes = useStyles();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  async function handleLogout() {
    try {
      navigate("/login");
    } catch (error) {
      console.log("logout failed");
    }
  }

  return (
  

<AppBar style={{backgroundColor: "#A4D7C2", marginBottom: '50px'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to='/' style={{textDecoration: 'none'}}>
            KICKSTARTER APP
            </Link>
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={page.link} style={{  textDecoration: 'none'}}>
                {page.title}
              </Link>
              </Button>
            ))}
          </Box>

          <Box>
            {/* verfiedUser ? 
        (<Link to="/campaigns" style={{  textDecoration: 'none'}}>
          <Typography className={classes.link}>Fund a Campaign</Typography>
        </Link>) 
        : 
        (
          <Link to="/campaigns" style={{  textDecoration: 'none'}}>
          <Typography className={classes.link}>Fund a Campaign</Typography>
        </Link>
        ) */}
          </Box>
         
        </Toolbar>
      </Container>
    </AppBar>
        

    
  );
}





        // <Link to="/" style={{  textDecoration: 'none'}}>
        //   <Typography className={classes.link}>Home</Typography>
        // </Link>
        
        // <Link to="/campaigns" style={{  textDecoration: 'none'}}>
        //   <Typography className={classes.link}>Fund a Campaign</Typography>
        // </Link>