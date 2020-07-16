import React, { useState } from "react";
import { View,Text, TextInput , TouchableOpacity, Button, } from 'react-native';
import { GlobalStyles } from '../Style/global';

export const Card = (props) => {
  const[iseditmode, setIsEditMode] = useState(false)
  const [name, setName] = useState(props.item.employee_name);
  const [salary, setSalary] = useState(props.item.employee_salary);
  const [age, setAge] = useState(props.item.employee_age);

  const EditData = () => {
    setIsEditMode(true)
  }
  const Save = () => {
    return fetch('http://dummy.restapiexample.com/api/v1/update/' + props.item.id, {
      method: 'PUT',
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
    { 
      setIsEditMode(false)
      return data.data})
  .catch(error => console.log('ERROR', error))
  }

  const Delete = () => {
    return fetch('http://dummy.restapiexample.com/api/v1/delete/' + props.item.id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
  }).then(res => {
    return res.json()
  })
  .then(data=> 
    { 
      return data})
  .catch(error => console.log('ERROR', error))
  }

  return ( !iseditmode? 
  <View style={GlobalStyles.card}>
    <View style={GlobalStyles.cardContent}>
      <Text style={GlobalStyles.cardtext}>Name: {name}</Text>
      <Text style={GlobalStyles.cardtext}>Salary: {salary}</Text>
      <Text style={GlobalStyles.cardtext}>Age: {age}</Text>              
    </View>
    <Button title="Edit" onPress={()=> setIsEditMode(true)}/>
    <Button title="Delete" onPress={()=> Delete()}/>
  </View> : 
  <View>
    <TextInput 
        style={GlobalStyles.input}
        placeholder={"name"}
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        autoCapitalize="none"
        value={name}
        onChangeText = {(name) =>{setName(name)}}
      />
      <TextInput 
        style={GlobalStyles.input}
        placeholder={"salary"}
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        autoCapitalize="none"
        value={salary}
        onChangeText = {(salary) =>{setSalary(salary)}}
      />
       <TextInput 
        style={GlobalStyles.input}
        placeholder={"age"}
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        autoCapitalize="none"
        value={age}
        onChangeText = {(age) => setAge(age)}
      />
       <TouchableOpacity 
        style={GlobalStyles.buttonContainer}
        onPress={() => Save()}><Text style={GlobalStyles.buttonText}>Save</Text>
        </TouchableOpacity>
  </View>
  )
}