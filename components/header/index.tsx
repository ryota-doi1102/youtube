import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react';

const Header = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <YouTubeIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            YouTube
          </Typography>
          <Button variant="outlined" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
