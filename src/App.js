// In App.js in a new project

// import * as React, {  useState } from 'react'
import React, {  useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router'
import Login from './pages/Auth/Login'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';

function App() {

  useEffect(() => {
    setData();
  }, []);

const [User, setUser] = useState({
    idJemaah:'',
    name:'',
    email:'',
    image:''
    
});

const setData = async () => {
    try {
        AsyncStorage.getItem('UserData')
        .then(value=>{
        if (value != null) {
            let user = JSON.parse(value);
            setUser(user);
            // setEmail(user.email);
        }
        })
    
    } catch (error) {
        // console.error();
    }
}

  return (
    <NavigationContainer>
      <Router/>
      {/* {Email.length!=0 ? <Router/> : <Login/>} */}
      {/* <Text>{Email}</Text> */}
      
    </NavigationContainer>
  );
}

export default App;

// import React, { Component, useState } from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import Router from './router'
// import Login from './pages/Auth/Login'
// import { Text, View } from 'react-native'

// export class App extends Component {


//     const [Email, setEmail] = useState('')

 
//   // cek(data){
    
//   //   var hasil = data+'a'
//   //   return hasil
//   // }


//   render() {
//     return (
//       <NavigationContainer>
//         {this.cek()=='aa' ? <Router/> : <Login/>}
//       </NavigationContainer>
//     )
//   }
// }

