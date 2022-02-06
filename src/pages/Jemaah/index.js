import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CustomeButton, CustomeListData, GetAsyncStorage, Header } from '../../componenets'
import { WarnaDark, WarnaUtama, WarnaSekunder, WarnaDark2 } from '../../utils/constants'
import { style } from '../../utils/Style'
import axios from 'axios'


const Jemaah = ({ route, navigation }) => {

    useEffect(() => {
        setData();
        getData();
    }, []);



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
                        // setUser(user);

                        axios.get('http://blackid.my.id/public/api_jemaah/' + user.idJemaah)
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
                })

        } catch (error) {

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




    }

    const Profile = () => {
        navigation.navigate('Profile')
    }


    return (
        <View style={style.viewWrapper}>
            <Header onPress={Profile} />
            <ScrollView>

                <View style={[styles.layout]}>
                    <View style={styles.box1}>
                        <Text style={styles.text}>My Information</Text>
                        <View style={[styles.card, styles.shadowProp]}>

                            <View>
                                <View style={{
                                    borderBottomWidth: 1,
                                    marginBottom: 10,
                                    borderColor: '#FFFFFF',
                                    paddingBottom: 5

                                }}>

                                    <Text style={{
                                        fontFamily: 'Poppins-Bold',
                                        textTransform: 'uppercase',
                                        fontSize: 18,
                                        color: WarnaUtama,


                                    }}>{Jemaah.namaPaket}</Text>
                                </View>
                                {title == "Detail Jemaah Umroh" && (
                                    <View>

                                        <CustomeListData Color={'#FFFFFF'} FontSize={17} WidhtHead={9} head={'Jam Berangkat'} title={Jemaah.jamBerangkat} />
                                        <CustomeListData Color={'#FFFFFF'} FontSize={17} WidhtHead={9} head={'Nama Pesawat'} title={Jemaah.namaPesawat} />
                                        <CustomeListData Color={'#FFFFFF'} FontSize={17} WidhtHead={9} head={'Biaya Daftar'} title={'Rp.' + convertToRupiah(Number(Jemaah.harga) + Number(Jemaah.hargaDaftar))} />
                                    </View>
                                )}
                                {title == "Detail Jemaah haji" && (
                                    <View>

                                        <CustomeListData Color={'#FFFFFF'} FontSize={17} WidhtHead={11} head={'Nomor Porsi'} title={porsi.nomorPorsi} />
                                        <CustomeListData Color={'#FFFFFF'} FontSize={17} WidhtHead={11} head={'TGL. Berangkat'} title={porsi.tglBerangkat} />
                                        <CustomeListData Color={'#FFFFFF'} FontSize={17} WidhtHead={11} head={'Biaya Daftar'} title={convertToRupiah(Jemaah.hargaDaftar) + '$ USD'} />
                                        <CustomeListData Color={'#FFFFFF'} FontSize={17} WidhtHead={11} head={'Biaya Pelunasan'} title={convertToRupiah(porsi.hargaPelunasan) + '$ USD'} />
                                    </View>
                                )}
                            </View>

                        </View>
                    </View>

                    <Text style={styles.text}>My Biodata</Text>
                    <View style={[styles.card, styles.shadowProp, { backgroundColor: '#FFFFFF' }]}>

                        <List head={'Nama Lengkap'} title={Jemaah.namaJemaah} />
                        <List head={'Nama Ayah Kandung'} title={Jemaah.namaAyahKandung} />
                        <List head={'Nama Ibu Kandung'} title={Jemaah.namaIbuKandung} />
                        <List head={'Nomor Paspor'} title={Jemaah.noPaspor} />
                        <List head={'Nomor KTP.'} title={Jemaah.noKtp} />
                        <List head={'Tempat Lahir'} title={Jemaah.tempatLahir} />
                        <List head={'Tanggal Lahir'} title={Jemaah.tglLahir} />
                        <List head={'Alamat Rumah'} title={Jemaah.alamatRumah} />
                        <List head={'Kelurahan'} title={Jemaah.kelurahan} />
                        <List head={'Kota'} title={Jemaah.kota} />
                        <List head={'Kode POS'} title={Jemaah.kodePos} />
                        <List head={'No. Telpon Rumah'} title={Jemaah.telponRumah} />
                        <List head={'No. Telpon Mobile'} title={Jemaah.telponMobile} />
                        <List head={'Pekerjaan'} title={Jemaah.pekerjaan} />
                        <List head={'Ukuran Pakaian'} title={Jemaah.ukuranPakaian} />
                        <List head={'Nama Mahram'} title={Jemaah.namaMahram} />
                        <List head={'Status Perkawinan'} title={Jemaah.statusPerkawinan} />

                        {/* {Jemaah.statusJemaah === 'belum lunas' && (

                            <View style={{ marginVertical: 10, marginTop: '10%' }}>
                                <CustomeButton border={20} PaddingV={5} text={'UBAH DATA'} textColor={WarnaUtama} borderWidth={3} borderColor={WarnaUtama} color={'#FFFFFF'} />
                            </View>
                        )

                        } */}

                    </View>


                </View>
            </ScrollView>
        </View>
    )
}

export default Jemaah

const styles = StyleSheet.create({
    layout: {

        marginVertical: 20,
        marginHorizontal: 20,
        // marginTop: '10%',
        flexDirection: 'column',
        flex: 1
    },
    card: {
        backgroundColor: WarnaDark2,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        // width: '100%',
        // marginHorizontal: 25,
        marginBottom: '10%',
        // borderWidth: 1,
        // borderColor: WarnaUtama

    },

    shadowProp: {
        shadowOffset: { width: -2, height: 10 },
        shadowColor: 'black',
        shadowOpacity: '100%',
        elevation: 8,
        // textShadowOffset:  { width: -17, height: 10 },
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
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: WarnaDark2,
    },
    cardList: {
        flexDirection: 'row',
    },
    listHead: {
        flex: 10
    },
    list: {
        flex: 10
    },
    listIcon: {
        flex: 1
    },
    text2: {
        color: WarnaDark,
        fontWeight: 'bold',
        fontSize: 15,

    },
})





const List = ({ head, title, FontWeight }) => {


    return (
        <View style={styles.cardList}>

            <View style={styles.listHead}>
                <Text style={[styles.text2, { fontWeight: FontWeight }]}>{head}</Text>
            </View>
            <View style={styles.listIcon}>
                <Text style={[styles.text2, { fontWeight: FontWeight }]}>:</Text>
            </View>
            <View style={styles.list}>
                <Text style={[styles.text2, { textAlign: 'justify', fontWeight: FontWeight }]}>{title}</Text>
            </View>
        </View>
    )
}