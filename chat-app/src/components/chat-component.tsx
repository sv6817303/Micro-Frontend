import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import EventBus from '../../../host-app/src/components/eventBus'; // Ensure this is the correct path to the EventBus

const ChatComponent = () => {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (message.trim() === '') return; // Don't send empty messages

    setIsSending(true);
    setStatusMessage('Sending message...');
    
    // Simulate an API call or message sending delay
    setTimeout(() => {
      EventBus.emit('new-message', message);
      setMessage('');
      setIsSending(false);
      setStatusMessage('Message Sent!');
    }, 1000);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="h6">Chat</Typography>
      
      <TextField
        label="Type your message"
        value={message}
        onChange={handleMessageChange}
        variant="outlined"
        fullWidth
        disabled={isSending}
      />
      
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendMessage}
        disabled={isSending}
      >
        {isSending ? 'Sending...' : 'Send Message'}
      </Button>

      {statusMessage && (
        <Typography variant="body2" color="textSecondary">
          {statusMessage}
        </Typography>
      )}
    </Box>
  );
};

export default ChatComponent;
