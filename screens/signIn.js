import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../Style/global';
import { SignInUser, SignInGitHub } from '../api/userApi';

export const SignIn = ({ navigation }) => {

    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('');

    const validemail = () => {

    }
    
    return <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.title}>Welcome to my app!</Text>
        <TextInput 
        style={GlobalStyles.input}
        placeholder="example@gmail.com"
        keyboardType="email-address"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        autoCapitalize="none"
        onChangeText = {(email) => validemail (email) } 
        />
        <TextInput 
        style={GlobalStyles.input}
        placeholder="Enter a password"
        secureTextEntry
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        value={password} 
        passwordRules
        onChangeText = {(password) => setPassword(password)}
        />

        <TouchableOpacity 
        style={GlobalStyles.buttonContainer}
        onPress={() => SignInUser(email, password, navigation)}>
            <Text style={GlobalStyles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={GlobalStyles.buttonContainer}
        onPress={() => SignInGitHub(navigation)}>
            <Text style={GlobalStyles.buttonText}>Sign In With GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={GlobalStyles.buttonContainer}
        onPress={()=> navigation.navigate("CreateAccount")}>
            <Text style={GlobalStyles.buttonText}>Create Account</Text>
        </TouchableOpacity>
    </View>
  };