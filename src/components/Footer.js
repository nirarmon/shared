import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
    return (
        <Box component="footer" sx={{ py: 2, textAlign: 'center' }}>
            <Typography variant="body2">&copy; 2024 Shared Expenses App</Typography>
        </Box>
    );
}

export default Footer;
