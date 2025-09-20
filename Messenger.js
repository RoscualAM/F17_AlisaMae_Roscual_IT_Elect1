import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Messenger = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'hi, kanus-a diay ka magbayad sa utang nmo?!!!! ', sender: 'user' },
    { id: '2', text: 'Ireklamo na tika sa pulis ron!!!!', sender: 'user' },
    { id: '3', text: 'dai, wa mn gani tika gitingil sa utang nimo sauna!', sender: 'other' },
    { id: '4', text: 'mauwaw sd ka oi', sender: 'other' },
    { id: '5', text: 'HAHAHA wow mn oii, dugay naman kayto!', sender: 'user'},
    { id: '6', text: 'edi past is past pd!', sender: 'other' },
   { id: '7', text: 'This user blocked you!', sender: 'other' },
  ]);

  const [inputText, setInputText] = useState('');

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user' ? styles.userMessage : styles.otherMessage,
      ]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: Math.random().toString(),
        text: inputText,
        sender: 'user',
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>shibal -_- </Text>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.97,
    backgroundColor: 'white',
  },
  messageList: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
  },
  userMessage: {
    backgroundColor: 'lightpink',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 2,
  },
  otherMessage: {
    backgroundColor: '#E5E5E5',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 2,
  },
  messageText: {
    color: '#fff',
  },
  // Adjust the text color for the 'other' messages
  // (You might need to override it here to be black)
  // Or handle it in the renderMessage function.
  // Example: item.sender === 'user' ? '#fff' : '#000'
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginRight: 30,
  },
  sendButton: {
    backgroundColor: 'lightpink',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  nameText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'lightpink',
  padding: 8,
  borderRadius: 2,
  borderWidth: 2,
  borderColor: 'lightpink',
  borderTopWidth: 25,
},

});

export default Messenger;