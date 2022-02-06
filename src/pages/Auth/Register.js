import { StyleSheet, Text, View, TextInput, Image, useWindowDimensions, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { style } from '../../utils/Style';
import { CustomeButton, Header } from '../../componenets';
import { WarnaSekunder, WarnaUtama } from '../../utils/constants';
import { IconEmail, IconPass, Logo4, User } from '../../assets';
import axios from 'axios'


const Register = ({navigation}) => {

    const { height } = useWindowDimensions();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setpassword1] = useState('');
    const [password2, setpassword2] = useState('');

    const [Pesan, setPesan] = useState({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    const postData = () => {


        const dataForAPI = {
            name,
            email,
            password1,
            password2,
        }

        console.log(dataForAPI);

        axios.post('http://blackid.my.id/public/auth/apiregister', dataForAPI)
            .then(function (response) {

                if (response.data.status == 'ok') {
                    // setData(response.data.data);
                    console.log(response.data.data);
                    Alert.alert(
                        "Berhasil",
                        "Akun Berhasil Diregistrasi! Silahkan Login",
                        [
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ]
                    );
                    goLogin()
                } else {
                    setPesan(response.data.messages);
                }
                // console.log(response.data.messages);

            })
            .catch(function (error) {
                console.log('erorr : ', error);
                Alert.alert(
                    "No Internet",
                    "No Internet connection found Please try again",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            });

    }

    const goLogin = () => {
        navigation.navigate('Login')
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

                                <User/>
                            </View>
                            <TextInput style={{ paddingVertical: 10, height: 56, fontSize: 16, flex: 10 }}
                                // keyboardType='email-address'
                                placeholder="Username"
                                value={name}
                                onChangeText={(text) => setName(text)} 
                                />
                        </View>

                        <Text style={{ color: '#FF1700' }}>
                            {Pesan.name}
                        </Text>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <View style={[styles.textInput, { flexDirection: 'row', alignItems: 'center' }]}>
                            <View style={{ flex: 1, marginHorizontal: 5 }}>

                                <IconEmail />
                            </View>
                            <TextInput style={{ paddingVertical: 10, height: 56, fontSize: 16, flex: 10 }}
                                keyboardType='email-address'
                                placeholder="Email"
                                value={email}
                                onChangeText={(text) => setEmail(text)} 
                                />
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
                                placeholder="Password"
                                value={password1}
                                onChangeText={(text) => setpassword1(text)}
                                secureTextEntry={true} 
                                />
                        </View>
                        {/* {Pesan.password != '' && ( */}
                        <Text style={{ color: '#FF1700' }}>
                            {Pesan.password1}
                        </Text>
                        {/* )} */}
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <View style={[styles.textInput, { flexDirection: 'row', alignItems: 'center' }]}>
                            <View style={{ flex: 1, marginHorizontal: 5 }}>

                                <IconPass />
                            </View>
                            <TextInput style={{ paddingVertical: 10, height: 56, fontSize: 16, flex: 10 }}
                                placeholder="Repeat Password"
                                value={password2}
                                onChangeText={(text) => setpassword2(text)}
                                secureTextEntry={true} />
                        </View>
                        {/* {Pesan.password != '' && ( */}
                        <Text style={{ color: '#FF1700' }}>
                            {Pesan.password2}
                        </Text>
                        {/* )} */}
                    </View>

                    {/* <View style={{ marginBottom: 30 }}> */}

                    <CustomeButton PaddingV={16} border={30} text='Register Account' color={WarnaUtama} onPress={postData} textColor={WarnaSekunder} borderWidth={1} borderColor={'#FFFFFF'} />
                    {/* </View> */}

                    <Text style={{ textAlign: 'center', marginVertical: 5, fontWeight: 'bold' }}>or</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        {/* <View style={{flex: 10}}> */}
                        <Text style={{ fontSize: 16 }}>Already have an account? </Text>
                        {/* </View> */}
                        <TouchableOpacity onPress={() => goLogin()} >
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Login!</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        // alignItems:'center',
        backgroundColor: '#FFFFFF',

    },
    bodyImage: {
        alignItems: 'center',
        marginVertical: '15%'

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

});
