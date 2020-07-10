import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#3498db',
        justifyContent: 'center'
    },
    title: {
        fontWeight:"bold",
        fontSize: 30,
        color:"#fff",
        marginBottom: 20,
        textAlign: 'center'
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
export const SignIn = ({ navigation }) => (
    <ScreenContainer>
        <Text style={styles.title}>Welcome to my app!</Text>
        <TextInput 
        style={styles.input}
        placeholder="example@gmail.com"
        keyboardType="email-address"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        autoCapitalize="none"
        />

        <TextInput 
        style={styles.input}
        placeholder="password"
        secureTextEntry
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        />

        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={()=> navigation.push("CreateAccount")}>
            <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
    </ScreenContainer>
  );

  export const CreateAccount = () => (
    <ScreenContainer>
        <TextInput 
        style={styles.input}
        placeholder="example@gmail.com"
        keyboardType="email-address"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        autoCapitalize="none"
        />

        <TextInput 
        style={styles.input}
        placeholder="password"
        secureTextEntry
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        />

        <TouchableOpacity  style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
    </ScreenContainer>
  );