import eventBus from '../../../host-app/src/eventBus'; // Import global event bus
import Button from '../../../host-app/src/button'; // Import shared button from host

const ChatComponent = () => {
  const sendMessage = () => {
    eventBus.emit('new-message', 'Hello from Chat!');
  };

  return <Button label="Send Message" onClick={sendMessage} />;
};

export default ChatComponent;
