import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { SignIn } from './screens/signIn';
import { CreateAccount } from './screens/createAccount';
import { EmployeeList } from './screens/employeeList';
import { AddNewEmployee } from './screens/addNewEmployee';
import { LodingScreen } from './screens/lodingScreen';
import * as firebase from 'firebase';
import { FirebaseConfig } from './config';

firebase.initializeApp(FirebaseConfig)

const AuthSwitch = createSwitchNavigator({
  LodingScreen: LodingScreen,
  SignIn: SignIn, 
  EmployeeList: EmployeeList,
  CreateAccount: CreateAccount,
  AddNewEmployee: AddNewEmployee
});

const AuthNav = createAppContainer(AuthSwitch);

export default () => {
    return <AuthNav />
};


