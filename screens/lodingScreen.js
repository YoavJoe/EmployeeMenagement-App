import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { globalStyles } from '../Style/global';
import * as firebase from 'firebase';

export const LodingScreen = () => {
    
    chackIfLoogedIn = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(user) { 

            } else {
                this.props.navigation.navigate('SignIn');
            }
        });
    };
    return <View style={globalStyles.container}>
        <ActivityIndicator size="large" />
    </View>
  };