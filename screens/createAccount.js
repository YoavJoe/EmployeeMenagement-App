import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../Style/global';

export const CreateAccount = ({ navigation }) => {
    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('');
    const [Repassword, setRePassword] = useState('');

    const validpassword = () => {
        if(password.length < 6) {
            alert("Password too short")
        }
    }

    const validRepassword = () => {
        if(password != Repassword) {
            alert("Password and confirm password does not match.")
        }
    }

    const validEmail = () => {
        const template = "@gamil.com"

        if(!template.test(email)){
            alert("The input is not email, do it again!")
        }
    }

   return <View style={GlobalStyles.container}>
        <TextInput 
        style={GlobalStyles.input}
        placeholder="example@gmail.com"
        keyboardType="email-address"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        autoCapitalize="none"
        value={email}
        onChangeText = {(email) => setEmail (email)}
        />

        <TextInput 
        style={GlobalStyles.input}
        placeholder="password"
        secureTextEntry
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        value={password} 
        onChangeText = {(password) => setPassword(password)}
        />

        <TextInput 
        style={GlobalStyles.input}
        placeholder="Repassword"
        secureTextEntry
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        value={Repassword} 
        onChangeText = {(Repassword) => setRePassword (Repassword)}
        />

        <TouchableOpacity 
        style={GlobalStyles.buttonContainer}
        onPress={() => {validEmail(); validpassword(); validRepassword(); validCreateUser(email, password, navigation)}}>
            <Text style={GlobalStyles.buttonText}>Create Account</Text>
        </TouchableOpacity>
    </View>
  };