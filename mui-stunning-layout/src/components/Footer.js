import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ py: 2, backgroundColor: 'primary.main', color: 'white' }}>
      <Typography align="center" variant="body2">© 2023 Stunning Layout</Typography>
    </Box>
  );
}

export default Footer;