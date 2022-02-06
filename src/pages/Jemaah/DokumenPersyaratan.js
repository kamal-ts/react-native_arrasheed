import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { Tambah } from '../../assets'
import { Header } from '../../componenets'
import { WarnaDark, WarnaSekunder, WarnaUtama } from '../../utils/constants'
import { style } from '../../utils/Style'
import AsyncStorage from '@react-native-async-storage/async-storage'

const DokumenPersyaratan = ({ route, navigation }) => {

    useEffect(() => {
        setData();
        // getData();

    }, []);

    const [getPersyaratan, setGetPersyaratan] = useState([])


    const [gambar, setGambar] = useState('')

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
                        // setError('');
                        const url = 'http://blackid.my.id/public/api_persyaratan/detail/' + user.idJemaah;

                        axios.get(url)
                            .then(res => {
                                // console.log('res: ', res.data);
                                setGetPersyaratan(res.data)
                                console.log("data : ", res.data);
                                // console.log('paket: ', Paket);
                            })
                            .catch(function (error) {
                                // setError('Error')

                                // Alert.alert(
                                //     "No Internet",
                                //     "No Internet connection found Please try again",
                                //     [
                                //         { text: "OK", onPress: () => setError('Error') }
                                //     ]
                                // );
                            });

                    }
                })

        } catch (error) {

        }
    }

    const formDokumen = (idJemaah) => {

        navigation.navigate('FormDokumen', { idJemaah: idJemaah })
    }


    const deleteData = (idPersyaratan) => {

        const url = 'http://blackid.my.id/public/api_persyaratan/' + idPersyaratan;

        axios.delete(url)
            .then(res => {
                console.log(res.data);
                setData()
                Alert.alert(
                    "SUKSES",
                    "Data Berhasil Dihapus",
                    [
                        // { text: "OK", onPress: () => setData() }
                        { text: "OK", onPress: () => setData() }
                    ]  
                );
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const getDelete = (idPersyaratan) => {

        Alert.alert(
            "DELETE",
            "Anda yakin akan menghapus?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => deleteData(idPersyaratan) }
            ]
        );
    }

    return (
        <View style={style.viewWrapper}>
            <Header />

            <ScrollView>

                <View style={[styles.container, { marginVertical: 0 }]}>
                    <View style={{ marginVertical: 20, alignItems: 'flex-start', }}>

                        <TouchableOpacity style={styles.button} onPress={() => formDokumen(User.idJemaah)}>
                            <View style={{ marginRight: 10 }}>
                                <Tambah />
                            </View>
                            <View >
                                <Text style={styles.textButton}>Tambah Dokumen</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {getPersyaratan.map((val, Home) => (

                        <View key={Home} style={styles.card}>

                            <View style={[style.shadowProp, {
                                marginBottom: 10,
                                backgroundColor: '#FFFFFF',
                                borderRadius: 10,

                            }]}>

                                <View style={{ marginVertical: 10, marginHorizontal: 10, flexDirection: 'row' }}>
                                    <View style={{ flex: 6 }}>

                                        <Text style={styles.text}>{val.namaDok}</Text>
                                    </View>
                                    <View style={{ flex: 2, marginRight: 3 }}>

                                        <TouchableOpacity onPress={() => getDelete(val.idPersyaratan)}>
                                            <View style={styles.buttonSm}>
                                                <Text style={{
                                                    color: 'red',
                                                    // fontWeight: 'bold',
                                                }}>Hapus</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{width: '100%', alignItems: 'center', paddingHorizontal: 10, paddingBottom: 10}}>

                                    <Image style={{ width: '100%', height: 300 }} source={{
                                        uri: 'http://blackid.my.id/public/img/' + val.namaFile
                                    }} />
                                </View>


                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

        </View>
    )
}

export default DokumenPersyaratan

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 25,
    },
    text: {
        color: WarnaDark,
        fontWeight: 'bold',
        fontSize: 17,

    },
    button: {
        backgroundColor: WarnaDark,
        padding: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FFFFFF'
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#FFFFFF'

    },
    buttonSm: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingVertical: 4,
        borderRadius: 5,
        // borderWidth: 1,
        // borderColor: 'red'
    }
})
