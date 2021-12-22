import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Akun, About, Login, Loading, Jemaah, Formulir } from '../pages'
import { BottomTabNavigator } from '../componenets';
import { WarnaDark } from '../utils/constants';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomTabNavigator {...props}/>}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="About" component={About} options={{ headerShown: false }} />
            <Tab.Screen name="Akun" component={Akun} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

const Router = () => {

    

    return (
        <Stack.Navigator>
            {/* {User.status == 'login' && */}
                <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false, headerTintColor: '#FFFFFF' }} />
                <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Formulir" component={Formulir} options={{title: 'Pendaftaran', headerTitleAlign: 'center',}}/>
                <Stack.Screen name="Jemaah" component={Jemaah}/>

            {/* }
            {User.status != 'login' && */}
            {/* } */}

        </Stack.Navigator>
    );
};

export default Router

const styles = StyleSheet.create({})
