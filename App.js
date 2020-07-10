import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, CreateAccount } from './App/Screens';

const AuthStack = createStackNavigator();

export default () => (
    <NavigationContainer>
      <AuthStack.Navigator headerMode='none'>
        <AuthStack.Screen name='SignIn' 
        component = {SignIn} 
        options={{title: "Sign In"}}
        />
        <AuthStack.Screen name='CreateAccount' 
        component = {CreateAccount}
        options={{title: "Create Account"}} />
      </AuthStack.Navigator>
    </NavigationContainer>
);

