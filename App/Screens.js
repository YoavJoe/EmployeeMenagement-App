import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        marginBottom: 10

    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
    }
});

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );
export const SignIn = ({ navigation }) => {  
    return (
      <ScreenContainer>
        <Text>Sign In Screen</Text>
        <Button title="Sign In" onPress={() => alert("todo") } />
        <Button
          title="Create Account"
          onPress={() => alert("todo")}
        />
      </ScreenContainer>
    );
  };