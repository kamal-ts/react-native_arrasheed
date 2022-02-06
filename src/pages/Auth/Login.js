import React, { useEffect, useState } from 'react'
import { Alert, Button, Image, StyleSheet, Text, TextInput, View, useWindowDimensions, TouchableOpacity } from 'react-native'
import { WarnaDark, WarnaSekunder, WarnaUtama } from '../../utils/constants'
import { style } from '../../utils/Style'
import { CustomeButton, Header } from '../../componenets'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { IconEmail, IconPass, Logo, Logo3, Logo4 } from '../../assets'

// const login = ({navigation}) => {
const login = ({ navigation }) => {

    const { height } = useWindowDimensions();

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const [Pesan, setPesan] = useState({
        email: '',
        password: ''
    });

    const setData = async ({
        idJemaah,
        name,
        email,
        image,
        role_id,
    }) => {

        var user = {
            idJemaah: idJemaah,
            name: name,
            email: email,
            image: image,
            role_id: role_id,
            status: 'login'
        }

        console.log(user);

        try {
            await AsyncStorage.setItem('UserData', JSON.stringify(user));
            navigation.replace('Loading')
        } catch (error) {
            console.error();
        }

    }

    const postData = () => {

        const hapusPesan = {
            email: '',
            password: ''
        }
        setPesan(hapusPesan);


        const dataForAPI = {
            email: Email,
            password: Password
        }

        axios.post('http://blackid.my.id/public/auth/apilogin', dataForAPI)
            .then(function (response) {

                if (response.data.status == 'ok') {
                    setData(response.data.data);
                } else {
                    setPesan(response.data.messages);
                }

            })
            .catch(function (error) {
                Alert.alert(
                    "No Internet",
                    "No Internet connection found Please try again",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            });



    }

    const register = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.body}>
            <View style={styles.bodyImage}>

                <Image source={Logo4} style={styles.logo, { height: height * 0.09 }} resizeMode='contain' />
            </View>
            {/* <Header /> */}
            <View style={styles.viewForm}>
                <View style={[styles.card]}>
                    {/* <Text style={styles.heading}>
                        Login
                    </Text> */}

                    <View style={{ marginBottom: 10 }}>
                        <View style={[styles.textInput, { flexDirection: 'row', alignItems: 'center' }]}>
                            <View style={{ flex: 1, marginHorizontal: 5 }}>

                                <IconEmail />
                            </View>
                            <TextInput style={{ paddingVertical: 10, height: 56, fontSize: 16, flex: 10 }}
                                keyboardType='email-address'
                                placeholder="Masukkan Email"
                                value={Email}
                                onChangeText={(text) => setEmail(text)} />
                        </View>

                        <Text style={{ color: '#FF1700' }}>
                            {Pesan.email}
                        </Text>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={[styles.textInput, { flexDirection: 'row', alignItems: 'center' }]}>
                            <View style={{ flex: 1, marginHorizontal: 5 }}>

                                <IconPass />
                            </View>
                            <TextInput style={{ paddingVertical: 10, height: 56, fontSize: 16, flex: 10 }}
                                placeholder="Masukkan Password"
                                value={Password}
                                onChangeText={(text) => setPassword(text)}
                                secureTextEntry={true} />
                        </View>
                        {/* {Pesan.password != '' && ( */}
                        <Text style={{ color: '#FF1700' }}>
                            {Pesan.password}
                        </Text>
                        {/* )} */}
                    </View>

                    {/* <View style={{ marginBottom: 30 }}> */}

                    <CustomeButton PaddingV={16} border={30} text='Login' color={WarnaUtama} onPress={postData} textColor={WarnaSekunder} borderWidth={1} borderColor={'#FFFFFF'} />
                    {/* </View> */}

                    <Text style={{ textAlign: 'center', marginVertical: 5, fontWeight: 'bold' }}>or</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        {/* <View style={{flex: 10}}> */}
                        <Text style={{ fontSize: 16 }}>Don`t have an account? </Text>
                        {/* </View> */}
                        <TouchableOpacity onPress={() => register()} >
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        </View>
    )
}

export default login


const styles = StyleSheet.create({
    body: {
        flex: 1,
        // alignItems:'center',
        backgroundColor: '#FFFFFF',

    },
    bodyImage: {
        alignItems: 'center',
        marginVertical: '25%'

    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },

    heading: {
        fontSize: 25,
        fontWeight: '600',
        marginBottom: 35,
        // marginVertical: 15,
        color: WarnaUtama
    },
    card: {
        // backgroundColor: '#3a3a3c',
        // borderRadius: 8,
        // paddingVertical: 75,
        paddingTop: 10,
        // paddingBottom: 80,
        // paddingHorizontal: 5,
        // width: '100%',
        // marginVertical: '20%',
        // marginTop:
        marginHorizontal: 30,

    },
    shadowProp: {
        shadowOffset: { width: -2, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 3,
    },
    textInput: {
        padding: 10,
        height: 56,
        fontSize: 16,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: WarnaUtama,
    }



})

