import React, { ReactElement, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from 'axios'

import { makeStyles } from "@material-ui/core/styles";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button'

const pages = [{title: 'Create A Campaign', link: '/create'}, {title: 'Fund A Campaign', link: '/campaigns'}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface Props {}

const useStyles = makeStyles(() => ({

  link: {
    textDecoration: 'none',
    color: 'white',
  }

}));

export default function NavBar({}: Props): ReactElement {
  const classes = useStyles();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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

  async function handleSignOut() {
    try {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('user')
      navigate("/login");
    } catch (error) {
      console.log("logout failed");
    }
  }

  useEffect(() => {
    try {
      axios.get('/api/users', {
        headers: {
          "x-access-token": localStorage.getItem("token") || ''
        },
        })
      .then((response) => {
        if (response.data === 'User authenticated') {
          console.log(response.data)
          setIsLoggedIn(true)
        }
      })
      console.log(isLoggedIn)
    } catch (error) {
      console.log(error)
    }
    
  }, [isLoggedIn])
  

return (
<AppBar style={{backgroundColor: "#A4D7C2"}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to='/'  className={classes.link}>
            AchievIt
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
            KICKSTARTER APP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={page.link} className={classes.link}>
                {page.title}
              </Link>
              </Button>
            ))}
          </Box>

          <Box>
            {isLoggedIn ? 
        (<Link to="/" style={{  textDecoration: 'none'}}>
          <Typography className={classes.link} onClick={handleSignOut}>Sign Out</Typography>
        </Link>) 
        : 
        (
          <Link to="/login" style={{  textDecoration: 'none'}}>
          <Typography className={classes.link}>Log In</Typography>
        </Link>
        )}
          </Box>
         
        </Toolbar>
      </Container>
    </AppBar>
        

    
  );
}