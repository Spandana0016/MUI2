import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function Body() {
  return (
    <Box sx={{ flex: 1, p: 3 }}>
      <Paper sx={{ p: 3, elevation: 3 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Stunning Layout!
        </Typography>
        <Typography variant="body1">
          This is your main content area, styled with MUI's Paper component for a professional look.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Body;