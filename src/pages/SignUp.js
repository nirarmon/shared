import React, { useState } from 'react';
import { Container, TextField, Button, Typography, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleContinue = () => {
        navigate('/signup-step2');
    };

    return (
        <Container maxWidth="xs" sx={{ mt: 5 }}>
            <Typography variant="h5">Create Account - Step 1</Typography>
            <LinearProgress variant="determinate" value={20} sx={{ mt: 2, mb: 3 }} />
            <TextField
                label="Email Address"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Create Password"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" fullWidth sx={{ mt: 3 }} onClick={handleContinue}>
                Continue
            </Button>
        </Container>
    );
}

export default SignUp;
