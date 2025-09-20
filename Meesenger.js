import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const App = () => {
  const [conversation, setConversation] = useState([
    { id: 1, name: 'John Doe', messages: [{ id: 1, text: 'Hello!' }, { id: 2, text: 'How are you?' }] },
    { id: 2, name: 'Jane Doe', messages: [{ id: 1, text: 'Hi!' }, { id: 2, text: 'I am good, thanks!' }] },
  ]);

  const [selectedConversation, setSelectedConversation] = useState(conversation[0]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    const updatedConversation = conversation.map((conv) => {
      if (conv.id === selectedConversation.id) {
        return { ...conv, messages: [...conv.messages, { id: conv.messages.length + 1, text: newMessage }] };
      }
      return conv;
    });
    setConversation(updatedConversation);
    setNewMessage('');
  };

  const handleAutoReply = () => {
    const autoReply = 'Thank you for your message!';
    const updatedConversation = conversation.map((conv) => {
      if (conv.id === selectedConversation.id) {
        return { ...conv, messages: [...conv.messages, { id: conv.messages.length + 1, text: autoReply }] };
      }
      return conv;
    });
    setConversation(updatedConversation);
  };

  return (
    <View style={styles.container}>
      <View style={styles.conversationList}>
        {conversation.map((conv) => (
          <Text key={conv.id} style={styles.conversation} onPress={() => setSelectedConversation(conv)}>
            {conv.name}
          </Text>
        ))}
      </View>
      <View style={styles.chatContainer}>
        <FlatList
          data={selectedConversation.messages}
          renderItem={({ item }) => (
            <View style={styles.message}>
              <Text>{item.text}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={newMessage}
            onChangeText={(text) => setNewMessage(text)}
            placeholder="Type a message"
          />
          <Button title="Send" onPress={handleSendMessage} />
          <Button title="Auto Reply" onPress={handleAutoReply} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  conversationList: {
    width: '30%',
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  conversation: {
    fontSize: 16,
    marginBottom: 10,
  },
  chatContainer: {
    width: '70%',
    padding: 10,
  },
  message: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

export default App;