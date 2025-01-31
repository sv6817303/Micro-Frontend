import { useState } from 'react';
import { Button, Typography, Box, CircularProgress } from '@mui/material';

const EmailComponent = () => {
  const [isOpening, setIsOpening] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleOpenEmail = () => {
    setIsOpening(true);
    setStatusMessage('Opening Gmail...');

    // Simulate a short delay before redirecting
    setTimeout(() => {
      // Open Gmail in the browser with a pre-filled subject and body
      window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=Hello&body=This is the body of the email';
      setStatusMessage('');
      setIsOpening(false);
    }, 1000); // Simulate a slight delay
  };

  return (
    <Box sx={{ padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Email Micro-Frontend
      </Typography>
      
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenEmail}
        disabled={isOpening}
        sx={{ marginBottom: '1rem' }}
      >
        {isOpening ? <CircularProgress size={24} /> : 'Open Email'}
      </Button>

      {statusMessage && (
        <Typography variant="body2" color="textSecondary">
          {statusMessage}
        </Typography>
      )}
    </Box>
  );
};

export default EmailComponent;
