import { useEffect, useState, lazy, Suspense } from 'react';
import EventBus from './eventBus';
import { Container, Typography, Card, CardContent, List, ListItem, ListItemText, Box, CircularProgress, Grid, Skeleton, Divider } from '@mui/material';

// Dynamically import remote components
const ChatComponent = lazy(() => import('../../../chat-app/src/components/chat-component').catch(() => ({ default: () => <p>Chat Failed to Load</p> })));
const EmailComponent = lazy(() => import('../../../email-app/src/components/email-component').catch(() => ({ default: () => <p>Email Failed to Load</p> })));

const App = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const handleMessage = (data: string) => {
      setMessages((prev) => [...prev, data]);
    };

    EventBus.on('new-message', handleMessage);
    return () => {
      EventBus.off('new-message', handleMessage);
    };
  }, []);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '2rem' }}>
      {/* App Title */}
      <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        Host Application
      </Typography>

      {/* Grid layout for Chat and Email Components */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Chat Micro-Frontend
              </Typography>
              <Suspense
                fallback={
                  <Box display="flex" justifyContent="center">
                    <CircularProgress />
                  </Box>
                }
              >
                <ChatComponent />
              </Suspense>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Email Micro-Frontend
              </Typography>
              <Suspense
                fallback={
                  <Box display="flex" justifyContent="center">
                    <CircularProgress />
                  </Box>
                }
              >
                <EmailComponent />
              </Suspense>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Messages Section */}
      <Box sx={{ marginTop: '3rem' }}>
        <Typography variant="h6" gutterBottom>
          Messages:
        </Typography>
        <Card elevation={2} sx={{ padding: '1rem' }}>
          <List>
            {messages.length === 0 ? (
              <Skeleton variant="text" width="100%" height={40} />
            ) : (
              messages.map((msg, index) => (
                <div key={index}>
                  <ListItem>
                    <ListItemText primary={msg} sx={{ padding: '10px', backgroundColor: index % 2 === 0 ? '#f1f1f1' : '#e1e1e1', borderRadius: '5px' }} />
                  </ListItem>
                  {index < messages.length - 1 && <Divider />}
                </div>
              ))
            )}
          </List>
        </Card>
      </Box>
    </Container>
  );
};

export default App;
