import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Button } from 'react-native'
import { Book, IconConfirm, IconHome, Tambah } from '../../assets'
import { CustomeButton, Header } from '../../componenets'
import { WarnaDark, WarnaUtama } from '../../utils/constants'
import { style } from '../../utils/Style'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Pembayaran = ({ route, navigation }) => {

    useEffect(() => {
        // setData();
        getData();

    }, []);



    const [getPembayaran, setGetPembayaran] = useState([])

    const getData = () => {

        // setError('');
        const url = 'http://blackid.my.id/public/api_pembayaran/' + route.params.data.idJemaah;

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
        navigation.navigate('FormPembayaran', { idJemaah: route.params.data.idJemaah })
    }

    return (
        <View style={style.viewWrapper}>
            <Header />

            <ScrollView>
                <View style={{ alignItems: 'flex-start', marginHorizontal: 20, marginVertical: 20 }}>

                    <TouchableOpacity style={styles.button} onPress={() => formPembayaran()}>
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
                                borderRadius: 5,
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

                                            <View style={{ flex: 3, marginRight: 3 }}>
                                                <TouchableOpacity>
                                                    <View style={[styles.buttonSm, { borderColor: WarnaUtama }]}>
                                                        <Text style={{
                                                            color: WarnaUtama,
                                                            fontWeight: 'bold',

                                                        }}>UBAH</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        )}
                                        {val.statusPembayaran != 'konfirmasi' && (
                                            <View style={{ flex: 3, marginRight: 3 }}>

                                                <TouchableOpacity>
                                                    <View style={styles.buttonSm}>
                                                        <Text style={{
                                                            color: 'red',
                                                            fontWeight: 'bold',
                                                        }}>HAPUS</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        )}
                                        {val.statusPembayaran == 'konfirmasi' && (

                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',

                                            }}>
                                                <View style={{marginTop: 2}}>

                                                    <IconConfirm />
                                                </View>
                                                <Text style={{ color: 'green', fontSize: 16 }}> Terkonfirmasi</Text>
                                            </View>
                                        )}
                                    </View>
                                    <List head={'No. Rekening'} title={val.noRek} />
                                    <List head={'Pemilik Rekening'} title={val.pemilikRek} />
                                    <List head={'Jumlah Bayar'} title={convertToRupiah(val.jumlahBayar) + '$ USD'} />
                                    <List head={'Tanggal Transfer'} title={val.tglTransfer} />
                                    <List head={'Bank Tujuan'} title={val.bankTujuan} />
                                    <View style={{ marginTop: 10 }} >
                                        <Image style={{ width: 100, height: 100 }} source={{
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
    buttonSm: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingVertical: 6,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'red'
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