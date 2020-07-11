import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../Style/global';
import * as firebase from 'firebase';

const EnterFireBase = (email, password) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
        console.log('SignIn error', error)
    })
}

export const SignIn = ({ navigation }) => {

    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('');
    
    return <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Welcome to my app!</Text>
        <TextInput 
        style={globalStyles.input}
        placeholder="example@gmail.com"
        keyboardType="email-address"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        autoCapitalize="none"
        value={email}
        onChangeText = {(email) => setEmail (email) } 
        />
        <TextInput 
        style={globalStyles.input}
        placeholder="Enter a password"
        secureTextEntry
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        value={password} 
        onChangeText = {(password) => setPassword (password)}
        />

        <TouchableOpacity style={globalStyles.buttonContainer}>
            <Text 
            style={globalStyles.buttonText}
            onPress={() => EnterFireBase(email, password)}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={globalStyles.buttonContainer}
        onPress={()=> navigation.navigate("CreateAccount")}>
            <Text style={globalStyles.buttonText}>Create Account</Text>
        </TouchableOpacity>
    </View>
  };