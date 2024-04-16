import React from 'react';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';

const LandingPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/login"
        sx={{ mb: 2 }}
      >
        Sign In
      </Button>
      <Button
        variant="contained"
        color="secondary"
        component={RouterLink}
        to="/signup"
      >
        Register
      </Button>
    </Box>
  );
};

export default LandingPage;
