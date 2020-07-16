import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../Style/global';

export const AddNewEmployee = ( { navigation }) => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [age, setAge] = useState('');

    const PostData =  (name, salary, age) => {
     return fetch('http://dummy.restapiexample.com/api/v1/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name, 
            age: parseInt(age), 
            salary: parseInt(salary)
          })
      }).then(res => {
        return res.json()
      })
      .then(data=> 
        {return data.data })
      .catch(error => console.log('ERROR', error))
    }
    
   return <View style={GlobalStyles.container}>
        <TextInput 
        style={GlobalStyles.input}
        placeholder="Name"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        autoCapitalize="none"
        value={name}
        onChangeText = {(name) => setName(name)}
        />

        <TextInput 
        style={GlobalStyles.input}
        placeholder="Salary"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        value={salary} 
        onChangeText = {(salary) => setSalary(salary)}
        />

        <TextInput 
        style={GlobalStyles.input}
        placeholder="Age"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        value={age} 
        onChangeText = {(age) => setAge(age)}
        />
        
        <TouchableOpacity 
        style={GlobalStyles.buttonContainer}
        onPress={() => {PostData(name, salary, age).then(
          (newEmployee)=> navigation.navigate("EmployeeList",{newEmployee: newEmployee}) ) ;}}
        >
          <Text style={GlobalStyles.buttonText}>Submit</Text>
        </TouchableOpacity>
    </View>
  };