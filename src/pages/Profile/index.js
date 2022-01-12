import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Alert, Button, StyleSheet, Text, Image, View } from 'react-native'
import { CustomeButton, Header } from '../../componenets'
import { WarnaDark, WarnaSekunder, WarnaUtama } from '../../utils/constants'
import { style } from '../../utils/Style'

const Profile = ({ navigation }) => {

    useEffect(() => {
        setData();
        // deleteData();
    }, []);


    const [User, setUser] = useState({
        idJemaah: '',
        name: '',
        email: '',
        image: ''

    });

    const setData = async () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
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

    const deleteData = async () => {

        try {
            await AsyncStorage.clear();
            // navigation.replace('Loading')
            navigation.reset({
                index: 0,
                routes: [{ name: 'Loading' }],
            });
        } catch (error) {
            console.error();
        }
    }

    const logout = () =>
        Alert.alert(
            "Logout",
            "Are you sure, do you want to logout?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => deleteData() }
            ]
        );
    return (
        <View style={style.viewWrapper}>
            <Header />
            <View style={[styles.card]}>
                <View style={styles.avatar}>
                    <Image style={{ width: 100, height: 100 }} source={{
                        uri: 'http://blackid.my.id/public/img/' + User.image,
                    }} />
                </View>
                <View style={{ alignItems: 'center' }}>

                    <Text style={styles.heading}>
                        {User.email}
                    </Text>
                    <Text style={styles.heading}>
                        {User.name}
                    </Text>
                </View>
                {/* <Text style={styles.heading}>
                    {User.idJemaah}
                </Text> */}
                {/* <Text style={styles.heading}>
                    {User.image}
                </Text> */}
                {/* <Text>
                    Using the elevation style prop to apply box-shadow for iOS devices
                </Text> */}

                {/* <Button title='Logout'/> */}
                <View style={{ marginVertical: 30 }}>
                    <CustomeButton text='Logout' color={'#FFFFFF'} textColor={WarnaUtama} onPress={logout} borderWidth={2} borderColor={WarnaUtama} PaddingV={10} />

                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({

    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 13,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        // width: '100%',
        marginVertical: 10,
        marginHorizontal: 30,

    },
    shadowProp: {
        shadowOffset: { width: -2, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 3,
    },
    avatar: {
        alignItems: 'center',
        marginBottom: 30,
    }
})
