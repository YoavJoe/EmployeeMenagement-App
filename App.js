import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { SignIn } from './screens/signIn';
import { CreateAccount } from './screens/createAccount';
import * as firebase from 'firebase';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig)

const AuthSwitch = createSwitchNavigator({
  SignIn: SignIn, 
  CreateAccount: CreateAccount
});

const AuthNav = createAppContainer(AuthSwitch);

export default () => {
    return <AuthNav />
};


