import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { CustomeButton, Header } from '../../componenets'
import { WarnaSekunder, WarnaUtama } from '../../utils/constants'

const Akun = ({ navigation }) => {

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
            navigation.replace('Login')
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
        <View style={styles.page}>
            <Header />
            <View style={[styles.card, styles.shadowProp]}>
                <View>
                    <Text style={styles.heading}>
                        {User.email}
                    </Text>
                    <Text style={styles.heading}>
                        {User.name}
                    </Text>
                    <Text style={styles.heading}>
                        {User.idJemaah}
                    </Text>
                    <Text style={styles.heading}>
                        {User.image}
                    </Text>
                </View>
                {/* <Text>
                    Using the elevation style prop to apply box-shadow for iOS devices
                </Text> */}

                {/* <Button title='Logout'/> */}

                <CustomeButton text='Logout' color={WarnaUtama} onPress={logout} />
            </View>
        </View>
    )
}

export default Akun

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F1F1F1'
    },

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
})
