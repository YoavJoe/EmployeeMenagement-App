import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SignIn} from './App/Screens';


const AuthStack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen name='SignIn' component = {SignIn} />
    </AuthStack.Navigator>
  </NavigationContainer>
);
