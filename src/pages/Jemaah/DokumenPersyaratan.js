import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Tambah } from '../../assets'
import { Header } from '../../componenets'
import { WarnaDark, WarnaSekunder, WarnaUtama } from '../../utils/constants'
import { style } from '../../utils/Style'

const DokumenPersyaratan = ({ route, navigation }) => {

    useEffect(() => {
        // setData();
        getData();

    }, []);

    const [getPersyaratan, setGetPersyaratan] = useState([])


    const [gambar, setGambar] = useState('')

    const getData = () => {

        // setError('');
        const url = 'http://blackid.my.id/public/api_persyaratan/detail/' + route.params.data.idJemaah;

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


    return (
        <View style={style.viewWrapper}>
            <Header />

            <ScrollView>

                <View style={[styles.container, { marginVertical: 0 }]}>
                    <View style={{marginVertical: 20, alignItems: 'flex-start',}}>

                        <TouchableOpacity style={styles.button} onPress={() => formPembayaran()}>
                            <View style={{ marginRight: 10 }}>
                                <Tambah />
                            </View>
                            <View >
                                <Text style={styles.textButton}>Konfirmasi</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {getPersyaratan.map((val, Home) => (

                        <View key={Home}>

                            <View style={[style.shadowProp, {
                                marginBottom: 10,
                                backgroundColor: '#FFFFFF'
                            }]}>
                                <Image style={{ width: '100%', height: 200 }} source={{
                                    uri: 'http://blackid.my.id/public/img/' + val.namaFile
                                }} />
                                <View style={{ marginVertical: 10, marginHorizontal: 10 }}>

                                    <Text style={styles.text}>{val.namaDok}</Text>
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

        backgroundColor: '#12a4d9',
        padding: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#FFFFFF'

    },
})
