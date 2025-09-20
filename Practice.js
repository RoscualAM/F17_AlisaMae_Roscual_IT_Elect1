import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useState} from 'react'



const Practice = () => {
  const [name, setName]= useState("Genie Mae");
  
  return (
    <View style={styles.container}>
      <Text>Practice</Text>
     <Text style= {styles.text}> I'm your báobéi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Practice;