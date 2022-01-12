import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View, ScrollView } from 'react-native'
import { WarnaDark, WarnaSekunder, WarnaUtama } from '../../utils/constants';
import { style } from '../../utils/Style';
import { CustomeButton, Header } from '../../componenets'

const DetailJemaah = ({ route }) => {

    useEffect(() => {
        getData();
    }, []);


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
    })

    const getData = () => {

        // axios.get('http://blackid.my.id/public/api_jemaah/9')
        axios.get('http://blackid.my.id/public/api_jemaah/' + route.params.data.idJemaah)
            .then(res => {
                console.log('res: ', res.data.jemaah);
                setJemaah(res.data.jemaah)
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


    return (
        <View style={style.viewWrapper}>
            <Header />
            <ScrollView>


                <View style={[styles.card, styles.shadowProp]}>
                    <View style={{
                        borderBottomWidth: 1,
                        marginBottom: 10,
                        borderColor: '#909090',
                    }}>

                        <Text style={{ fontSize: 18, color: WarnaUtama, fontFamily: 'Poppins-Bold', textTransform: 'uppercase' }}>{Jemaah.namaPaket}</Text>
                    </View>
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

                    {Jemaah.statusJemaah === 'belum lunas' && (

                        <View style={{ marginVertical: 10, marginTop: '10%' }}>
                            <CustomeButton PaddingV={10} text={'UBAH DATA'} textColor={WarnaUtama} borderWidth={3} borderColor={WarnaUtama} color={'#FFFFFF'} />
                        </View>
                    )

                    }
                </View>
            </ScrollView>

        </View>
    )
}

export default DetailJemaah

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
        fontSize: 15,
        color: WarnaDark,
        fontFamily: 'Poppins-Extra-light'
    },
    card: {
        // borderWidth: 2,
        marginVertical: 20,
        marginHorizontal: 20,
        borderRadius: 8,
        // borderWidth: 0.5,
        paddingHorizontal: 11,
        paddingVertical: 11,
        backgroundColor: '#FFFFFF',
        // borderColor: WarnaDark


    },
    shadowProp: {
        shadowOffset: { width: -2, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 2,
    },
    // container : {
    //     marginHorizontal: 15,
    //     marginVertical: 15
    // }
})


const List = ({ head, title, FontWeight }) => {


    return (
        <View style={styles.cardList}>

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
