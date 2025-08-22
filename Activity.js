import {StatusBar} from 'expo-sratus-bar';
import {styleSheet, Text, View, Button} from 'react-native';
import React, {useState{ from 'react';

export default funxtion App(){
  const [Book, setBook]= useState {{ title: "Superbook" , author: "Bible"}};
  
  const NewTitle = () =>
  setBook{{Title: "Test", author= "Test"}};
  return{
    <View style= {styles.container}>
      <Text> Book Title: {Book.Title}</Text>
      <Text> Author: {Book.author}</Text>
      <Button title = "Change Title" onPres ={NewTitle}>
        <StatusBar style= "auto"/>
        </View>
        );
        }
        
        const styles= StyleSheet.create({
          container:{
            flex: 1,
            backgroundColor: 'fff'
          },
          
        
  });