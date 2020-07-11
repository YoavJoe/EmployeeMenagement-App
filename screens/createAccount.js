import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity } from 'react-native';
import { globalStyles } from '../Style/global';
import * as firebase from 'firebase';

const EnterFireBase = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        alert('Create user error', error)
    })
}

export const CreateAccount = ({ navigation }) => {

    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('');

   return <View style={globalStyles.container}>
        <TextInput 
        style={globalStyles.input}
        placeholder="example@gmail.com"
        keyboardType="email-address"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        autoCapitalize="none"
        value={email}
        onChangeText = {(email) => setEmail (email)}
        />

        <TextInput 
        style={globalStyles.input}
        placeholder="password"
        secureTextEntry
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        value={password} 
        onChangeText = {(password) => setPassword (password)}
        />

        <TouchableOpacity 
        style={globalStyles.buttonContainer}
        onPress={() => {EnterFireBase(email, password); navigation.navigate("SignIn");}}>
            <Text style={globalStyles.buttonText}>Create Account</Text>
        </TouchableOpacity>
    </View>
  };