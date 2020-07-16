import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { GlobalStyles } from '../Style/global';
import * as Firebase from 'firebase';

export const LodingScreen = ({ navigation }) => {
    Firebase.auth().onAuthStateChanged(user => {
    if(user) {
        navigation.navigate("EmployeeList");
    }
    else {
        navigation.navigate("SignIn");
    }
   })
    return <View style={GlobalStyles.container}>
        <ActivityIndicator size="large" />
    </View>
  };