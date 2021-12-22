import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CustomeButton } from '../../componenets'
import { WarnaUtama } from '../../utils/constants'

const Jemaah = ({navigation}) => {

    const deleteData = async () =>{
        
        try {
            await AsyncStorage.clear();
            navigation.replace('Login')
        } catch (error) {
            console.error();
        }
}

    return (
        <View>
            <Text>Jemaah</Text>
            <CustomeButton text='Logout' color={WarnaUtama} onPress={deleteData}/>
        </View>
    )
}

export default Jemaah

const styles = StyleSheet.create({})
