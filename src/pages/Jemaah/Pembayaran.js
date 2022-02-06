import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Button, Alert } from 'react-native'
import { Book, IconConfirm, IconHome, Tambah } from '../../assets'
import { CustomeButton, Header } from '../../componenets'
import { WarnaDark, WarnaUtama } from '../../utils/constants'
import { style } from '../../utils/Style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Jemaah from '.'

const Pembayaran = ({ route, navigation }) => {

    useEffect(() => {
        setData();
        // getData();

    }, []);



    const [getPembayaran, setGetPembayaran] = useState([])

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
                        const url = 'http://blackid.my.id/public/api_pembayaran/' + user.idJemaah;

                        axios.get(url)
                            .then(res => {
                                // console.log('res: ', res.data);

                                console.log(res.data.totalBayar);
                                setGetPembayaran(res.data.data)
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

    const deleteData = (idBukti) => {

        const url = 'http://blackid.my.id/public/api_pembayaran/' + idBukti;

        axios.delete(url)
            .then(res => {
                console.log(res.data);
                setData()
                Alert.alert(
                    "SUKSES",
                    "Data Berhasil Dihapus",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed")}
                    ]
                );
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

    const getDelete = (idBukti) => {

        Alert.alert(
            "DELETE",
            "Anda yakin akan menghapus data?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => deleteData(idBukti)}
            ]
        );
    }


    const convertToRupiah = (number) => {

        if (number) {
            var rupiah = "";
            var numberrev = number
                .toString()
                .split("")
                .reverse()
                .join("");

            for (var i = 0; i < numberrev.length; i++)
                if (i % 3 == 0) rupiah += numberrev.substr(i, 3) + ".";
            return (

                // "Rp. " +
                rupiah
                    .split("", rupiah.length - 1)
                    .reverse()
                    .join("")
            );

        } else {

            return number;

        }

    }

    const formPembayaran = () => {
        navigation.navigate('FormPembayaran', { idJemaah: User.idJemaah })
    }

    return (
        <View style={style.viewWrapper}>
            <Header />

            <ScrollView>
                <View style={{ alignItems: 'flex-start', marginHorizontal: 20, marginVertical: 20 }}>

                    <TouchableOpacity style={[styles.button, style.shadowProp]} onPress={() => formPembayaran()}>
                        <View style={{ marginRight: 10 }}>
                            <Tambah />
                        </View>
                        <View >
                            <Text style={styles.textButton}>Konfirmasi</Text>
                        </View>
                    </TouchableOpacity>
                </View>



                <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
                    {
                        getPembayaran.map((val, Home) => (


                            <View key={Home} style={[style.shadowProp, {
                                // borderWidth: 1,
                                // borderColor: WarnaDark,
                                borderRadius: 10,
                                paddingHorizontal: 20,
                                paddingVertical: 15,
                                // marginVertical: 10,
                                marginBottom: 10,
                                flexDirection: 'row',
                                backgroundColor: '#FFFFFF',
                            }]}>

                                <View style={{ flex: 10 }}>
                                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>

                                        <View style={{ flex: 6 }}>

                                            <Text style={{ color: WarnaDark, fontSize: 22, fontWeight: 'bold' }}>{val.namaBank}</Text>
                                        </View>

                                        {val.statusPembayaran != 'konfirmasi' && (
                                            <View style={{ marginRight: 3 }}>

                                                <TouchableOpacity onPress={() => getDelete(val.idBukti)}>
                                                    <View style={styles.buttonSm}>
                                                        <Text style={{
                                                            color: 'red',
                                                            // fontWeight: 'bold',
                                                            fontSize: 16
                                                            
                                                        }}>Hapus</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        )}
                                        {val.statusPembayaran == 'konfirmasi' && (

                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',

                                            }}>
                                                <View style={{ marginTop: 2 }}>

                                                    <IconConfirm />
                                                </View>
                                                <Text style={{ color: 'green', fontSize: 16 }}> Terkonfirmasi</Text>
                                            </View>
                                        )}
                                    </View>
                                    <List head={'No. Rekening'} title={val.noRek} />
                                    {/* <List head={'id bukti'} title={val.idBukti} /> */}
                                    <List head={'Pemilik Rekening'} title={val.pemilikRek} />
                                    {val.kategori == 'haji' && (
                                        
                                        <List head={'Jumlah Bayar'} title={convertToRupiah(val.jumlahBayar) + '$ USD'} />
                                    )
                                    }
                                    {val.kategori != 'haji' && (
                                        
                                        <List head={'Jumlah Bayar'} title={'Rp. '+convertToRupiah(val.jumlahBayar)} />
                                    )
                                    }
                                    <List head={'Tanggal Transfer'} title={val.tglTransfer} />
                                    <List head={'Bank Tujuan'} title={val.bankTujuan} />
                                    <View style={{ marginTop: 10 }} >
                                        <Image style={{ width: '100%', height: 300 }} source={{
                                            uri: 'http://blackid.my.id/public/img/' + val.gambarStruk,
                                        }} />

                                    </View>

                                </View>

                            </View>
                        ))
                    }

                </View>
            </ScrollView >


        </View >
    )
}

export default Pembayaran

const styles = StyleSheet.create({
    cardList: {
        flexDirection: 'row',

    },
    listHead: {
        flex: 8
    },

    list: {
        flex: 10
    },

    listIcon: {
        flex: 1
    },

    text: {
        fontSize: 14,
        color: WarnaDark,
        fontFamily: 'Poppins-Medium'
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
        borderRadius: 30,
    }

})

const List = ({ head, title, FontWeight }) => {


    return (
        <View style={[styles.cardList]}>

            <View style={styles.listHead}>
                <Text style={[styles.text, { fontWeight: FontWeight }]}>{head}</Text>
            </View>
            <View style={styles.listIcon}>
                <Text style={[styles.text, { fontWeight: FontWeight }]}>:</Text>
            </View>
            <View style={styles.list}>
                <Text style={[styles.text, { textAlign: 'justify', fontWeight: FontWeight }]}>{title}</Text>
            </View>
        </View>
    )
}