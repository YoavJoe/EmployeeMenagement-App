import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../Style/global';
import { Card } from '../shared/card';
import { SignOut } from '../api/userApi';

export const EmployeeList = ({ navigation }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then((response) => response.json())
        .then((json) => {setData(json.data)})
        .catch((error) => console.error(error))
    }, []);

    //// ->>>>>>> In case we want to add employee to the list data <<<<<<- ///////
    // useEffect(() => {
    //    if(navigation.state.params){
    //        setData(data.concat[navigation.state.params])
    //    }
    //     }, [navigation.state.params]); 
    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.title}> Your Employee card</Text>
            <TouchableOpacity 
            style={GlobalStyles.buttonContainer}
            onPress={() => {navigation.navigate("AddNewEmployee")}}>
                <Text style={GlobalStyles.buttonText}>Add New Employee</Text>
            </TouchableOpacity>
            <View style={GlobalStyles.cardsWrapper}>
                {data.map((item)=><Card key={item.id} item={item} />)}
            </View>
            <TouchableOpacity 
            style={GlobalStyles.buttonContainer}
            onPress={() => {navigation.navigate("SignIn"); SignOut()}}>
                <Text style={GlobalStyles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}