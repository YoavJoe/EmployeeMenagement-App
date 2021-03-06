import React, { useState } from "react";
import { View,Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { GlobalStyles } from '../Style/global';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { AntDesign, MaterialIcons} from '@expo/vector-icons'; 
import { color } from "react-native-reanimated";

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
  const AlartDelete = () => {
    Alert.alert(
      "Are you sure you want to delete this employee?"
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Sure, delete him!!!", onPress: Delete() }
      ],
      { cancelable: false }
    );
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

  const LeftAction = () => {
    return (
      <View style={GlobalStyles.cardsWrapper}> 
        <AntDesign name="edit" size={60} color="black" />
      </View>
    )
  }
  const RightAction = () => {
    return (
      <View style={GlobalStyles.rightAction}> 
        <MaterialIcons name="delete" size={60} color="black" />
      </View>
    )
  }

  return ( !iseditmode? 
      <View style={GlobalStyles.card}>
          <Text style={GlobalStyles.cardheder}>Name</Text>
          <Text style={GlobalStyles.cardtext}>{name}</Text>
          <Text style={GlobalStyles.cardheder}>Salary</Text>
          <Text style={GlobalStyles.cardtext}>{salary}</Text>
<<<<<<< HEAD
          <Text style={GlobalStyles.cardheder}>Age</Text>
          <Text style={GlobalStyles.cardtext}>{age}</Text>
          <View style={GlobalStyles.cardsWrapper}>
            <TouchableOpacity onPress={()=>EditData()}>
              <AntDesign name="edit" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Delete()}>
              <MaterialIcons name="delete" size={30} color="black" />
            </TouchableOpacity>
          </View>
=======
          <Text style={GlobalStyles.cardheder}>Age</Text> 
          <Text style={GlobalStyles.cardtext}>{age}</Text>              
>>>>>>> 4624c149bdece4cad138cb6f0f26c2f290e68fca
      </View> 
  : 
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