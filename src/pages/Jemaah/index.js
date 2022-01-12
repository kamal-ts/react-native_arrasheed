import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CustomeButton, CustomeListData, GetAsyncStorage, Header } from '../../componenets'
import { WarnaDark, WarnaUtama, WarnaSekunder } from '../../utils/constants'
import { style } from '../../utils/Style'
import axios from 'axios'
import { IconAbout, IconAbout1, IconDetail, IconDokumen, IconPembayaran, Tambah } from '../../assets'


const Jemaah = ({ route, navigation }) => {

    useEffect(() => {
        getData();
        setData();
    }, []);

    const [User, setUser] = useState({
        idJemaah: '',
        name: '',
        email: '',
        image: ''

    });

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

    const setData = async () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        let user = JSON.parse(value);
                        setUser(user);
                        // console.log(User);
                        // setEmail(user.email);
                    }
                })

        } catch (error) {
            // console.error();
        }
    }

    const [Jemaah, setJemaah] = useState({
        idPaket: '',
        idJadwal: '',
        noKtp: '',
        noPaspor: '',
        namaJemaah: '',
        namaAyahKandung: '',
        namaIbuKandung: '',
        tempatLahir: '',
        tglLahir: '',
        alamatRumah: '',
        kelurahan: '',
        kota: '',
        kodePos: '',
        telponRumah: '',
        telponMobile: '',
        pekerjaan: '',
        ukuranPakaian: '',
        namaMahram: '',
        email: '',
        statusPerkawinan: '',
        statusJemaah: '',
        tglKembali: '',
        namaPaket: '',
        hargaDaftar: '',

    })

    const [porsi, setPorsi] = useState({
        nomorPorsi: null,
        hargaPelunasan: null,
        tglBerangkat: null,
        created_at: null,
    })

    const [title, setTitle] = useState('')

    const getData = () => {

        axios.get('http://blackid.my.id/public/api_jemaah/' + route.params.data.idJemaah)
            // axios.get('http://blackid.my.id/public/api_jemaah/8')
            .then(res => {
                if (res.data.title == "Detail Jemaah Umroh") {
                    setJemaah(res.data.jemaah)
                    setTitle(res.data.title)

                } else if (res.data.title == "Detail Jemaah haji") {

                    if (res.data.porsi == null) {
                        const dataPorsi = {
                            nomorPorsi: 'Belum Ada',
                            hargaPelunasan: 'Belum Ada',
                            tglBerangkat: 'Belum Ada',
                            created_at: 'Belum Ada',
                        };

                        setPorsi(dataPorsi)
                        setTitle(res.data.title)

                    } else {
                        setJemaah(res.data.jemaah)
                        setPorsi(res.data.porsi)
                        setTitle(res.data.title)
                    }
                }
                console.log('res: ', res.data.jemaah);
                // console.log('paket: ', Paket);
            })
            .catch(function (error) {
                Alert.alert(
                    "No Internet",
                    "No Internet connection found Please try again",
                    [
                        { text: "OK", onPress: () => '' }
                    ]
                );
            });

    }

    const Profile = () => {
        navigation.navigate('Profile')
    }

    const DetailJemaah = (user) => {
        navigation.navigate('DetailJemaah', { data: user })
    }

    const PembayaranJemaah = (user) => {
        navigation.navigate('Pembayaran', { data: user })
    }

    const Info = () => {
        navigation.navigate('About1')
    }

    const dokumenPersyaratan = (user) => {
        navigation.navigate('DokumenPersyaratan', { data: user })
    }






    return (
        <View style={style.viewWrapper}>
            <Header onPress={Profile} />
            <View style={[styles.layout]}>
                <View style={styles.box1}>

                    <View style={[styles.card, styles.shadowProp]}>

                        {title == "Detail Jemaah Umroh" && (
                            <Text style={styles.textHead}>{Jemaah.namaIbuKandung}</Text>
                        )}
                        {title == "Detail Jemaah haji" && (
                            <View>
                                <View style={{
                                    borderBottomWidth: 1,
                                    marginBottom: 10,
                                    borderColor: '#909090',

                                }}>

                                    <Text style={{
                                        fontFamily: 'Poppins-Bold',
                                        textTransform: 'uppercase',
                                        fontSize: 20,
                                        color: WarnaUtama,


                                    }}>{Jemaah.namaPaket}</Text>
                                </View>
                                <CustomeListData Color={WarnaDark} FontSize={17} WidhtHead={11} head={'Nomor Porsi'} title={porsi.nomorPorsi} />
                                <CustomeListData Color={WarnaDark} FontSize={17} WidhtHead={11} head={'TGL. Berangkat'} title={porsi.tglBerangkat} />
                                <CustomeListData Color={WarnaDark} FontSize={17} WidhtHead={11} head={'Biaya Daftar'} title={convertToRupiah(Jemaah.hargaDaftar) + '$ USD'} />
                                <CustomeListData Color={WarnaDark} FontSize={17} WidhtHead={11} head={'Biaya Pelunasan'} title={convertToRupiah(porsi.hargaPelunasan) + '$ USD'} />
                            </View>
                        )}

                    </View>
                </View>

                <View style={styles.box2}>
                    
                    <TouchableOpacity style={styles.button} onPress={() => DetailJemaah(User)}>
                        <View style={{ marginRight: 30, marginLeft: 20, }}>
                            <IconDetail/>
                        </View>
                        <View >
                            <Text style={styles.textButton}>DETAIL JEMAAH</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}  onPress={() => PembayaranJemaah(User)}>
                        <View style={{ marginRight: 30, marginLeft: 20, }}>
                            <IconPembayaran/>
                        </View>
                        <View >
                            <Text style={styles.textButton}>KONFIRMASI PEMBAYARAN</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => dokumenPersyaratan(User)}>
                        <View style={{ marginRight: 30, marginLeft: 20, }}>
                            <IconDokumen/>
                        </View>
                        <View >
                            <Text style={styles.textButton}>DOKUMEN PERSYARATAN</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>

                    <TouchableOpacity onPress={() => Info()}>
                        <View style={{
                            flexDirection: 'row',
                            // marginLeft: '80%',
                            // marginTop: '15%',
                            // alignItems: 'flex-end'
                        }}>


                            <IconAbout />
                            <Text style={{ fontFamily: 'Poppins-Regular', marginLeft: 8 }}>Info</Text>

                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Jemaah

const styles = StyleSheet.create({
    layout: {

        marginVertical: 30,
        marginHorizontal: 20,
        marginTop: '10%',
        flexDirection: 'column',
        flex: 1
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 10,
        // width: '100%',
        // marginHorizontal: 25,
        marginBottom: '10%',
        // borderWidth: 1,
        // borderColor: WarnaUtama

    },

    shadowProp: {
        shadowOffset: { width: -2, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 8,
    },
    textHead: {
        fontFamily: 'Poppins-Italic',
        fontSize: 16,
    },
    box1: {
        // flex: 12,
    },
    box2: {
        // flex: 100
    },
    footer: {
        position: 'absolute',
        flex: 0.1,
        bottom: -10,
        alignItems: 'flex-end'
    },
    button: {
        backgroundColor: WarnaDark,
        padding: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        paddingVertical: 20,
        marginBottom: 20
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#FFFFFF',

    },
})





