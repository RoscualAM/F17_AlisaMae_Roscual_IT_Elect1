// ColorChangerApp.js
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ColorChangerApp = () => {
    const [backgroundColor, setBackgroundColor] = useState('white');

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Button title="Default (White)" onPress={() => setBackgroundColor('white')} />
            <Button title="Light Pink" onPress={() => setBackgroundColor('lightpink')} />
            <Button title=" Green" onPress={() => setBackgroundColor('green')} />
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

export default ColorChangerApp;