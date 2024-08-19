import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { useMediaQuery, useTheme } from '@mui/material';
import logo from './Assets/logo.png';
import '@fontsource/be-vietnam-pro';

const pages = ['Home', 'Pencegahan Stunting', 'Peta', 'Layanan', 'Feedback'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              height: 58,
              display: { xs: 'none', md: 'flex' }
            }}
            alt="Logo"
            src={logo}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontFamily: 'Be Vietnam Pro',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              WEBGIS GESIT
            </Typography>
            <Typography
              variant="subtitle3"
              noWrap
              component="span"
              sx={{
                fontFamily: 'Be Vietnam Pro',
                fontWeight: 400,
                letterSpacing: '.2rem',
                color: 'inherit',
              }}
            >
              Kabupaten Semarang
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ position: 'absolute', left: 0 }}
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
                marginTop: '45px',
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => navigate(`/${page.replace(/\s+/g, '-').toLowerCase()}`)}>
                  <Typography textAlign="center" sx={{ fontFamily: 'Be Vietnam Pro' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Box
              component="img"
              sx={{
                height: 56,
                display: { xs: 'flex', md: 'none' },
                marginRight: 2
              }}
              alt="Logo"
              src={logo}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                mr: 2,
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <Typography
                variant="h5"
                noWrap
                sx={{
                  fontFamily: 'Be Vietnam Pro',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                WEBGIS GESIT
              </Typography>
              <Typography
                variant="subtitle2"
                noWrap
                component="span"
                sx={{
                  fontFamily: 'Be Vietnam Pro',
                  fontWeight: 400,
                  letterSpacing: '.2rem',
                  color: 'inherit',
                }}
              >
                Kabupaten Semarang
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.replace(/\s+/g, '-').toLowerCase()}`}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Be Vietnam Pro' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
