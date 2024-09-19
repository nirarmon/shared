import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate();

    return (
        <Container maxWidth="xs" sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h4" gutterBottom>
                Shared Expenses App
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Simplify your shared expenses effortlessly
            </Typography>
            <Button
                variant="contained"
                fullWidth
                sx={{ mt: 3 }}
                onClick={() => navigate('/signup')}
            >
                Sign Up
            </Button>
            <Button
                variant="outlined"
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => navigate('/login')}
            >
                Log In
            </Button>
        </Container>
    );
}

export default Welcome;
