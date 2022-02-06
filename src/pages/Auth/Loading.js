import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Logo3 } from '../../assets';

const Loading = ({ navigation }) => {

    useEffect(() => {
        setData();

    }, []);
    
    const setData = async () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        let user = JSON.parse(value);
                        
                        if(user.idJemaah != null){
                            navigation.replace('JemaahApp', { data: user })
                        }else{
                            navigation.replace('MainApp')

                        }

                    } else {
                        navigation.replace('Login')
                    }
                })

        } catch (error) {
        }
    }

    return (
        <View style={styles.bodyImage}>
            {/* <Image source={Logo3} style={styles.logo}  resizeMode='contain'/> */}
            
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    // bodyImage:{
    //     alignItems:'center',
    //     marginVertical: '50%'

    // },
    // logo: {
    //     width:'20%',
    //     maxWidth:300,
    //     maxHeight:200,
    // },
})
