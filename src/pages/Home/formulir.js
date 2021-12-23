import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, Combobox, TextInput, View, Platform, Button } from 'react-native'
import { CustomeButton, Header } from '../../componenets'
import { WarnaDark, WarnaSekunder, WarnaUtama } from '../../utils/constants'
import { style } from '../../utils/Style'
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage'
import DateTimePicker from '@react-native-community/datetimepicker'
import CostumeDate from '../../componenets/CustomeDate'

const Formulir = ({ route, navigation }) => {


    useEffect(() => {
        setData();
        // deleteData();
    }, []);


    const [date, setDate] = useState(new Date)
    const [Mode, setMode] = useState('')
    const [Show, setShow] = useState(false)
    const [text, setText] = useState('YYYY-mm-dd')


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);


        let tempDate = new Date(currentDate);
        var mont = (tempDate.getMonth() + 1);

        if (mont < 10) {
            mont = '0' + mont
        }

        // let fDate = tempDate.getDate() + '-' + mont + '-' + tempDate.getFullYear();
        let fDate = tempDate.getFullYear() + '-' + mont + '-' + tempDate.getDate();
        let fTime = 'Hours : ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();


        // setText(fDate + '\n' + fTime)
        setText(fDate)

        console.log(fDate + ' (' + fTime + ')');

        // setMode('')
    }

    const showMode = (currentMode) => {
        setShow(true)
        setMode(currentMode)
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
                        setUser(user);
                        // setEmail(user.email);
                    }
                })

        } catch (error) {
            // console.error();
        }
    }



    const [UkuranP, setUkuranP] = useState(['M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL']);
    const [SelectionUkuranP, setSelectionUkuranP] = useState([])

    // const [dataJemaah, setdataJemaah] = useState({
    //     idPaket: route.params.data.idPaket,
    //     idJadwal: '',
    //     noKtp: '',
    //     noPaspor: '',
    //     namaJemaah: '',
    //     namaAyahKandung: '',
    //     namaIbuKandung: '',
    //     tempatLahir: '',
    //     tglLahir: '',
    //     alamatRumah: '',
    //     kelurahan: '',
    //     kota: '',
    //     kodePos: '',
    //     telponRumah: '',
    //     telponMobile: '',
    //     pekerjaan: '',
    //     ukuranPakaian: '',
    //     namaMahram: '',
    //     email: '',
    //     statusPerkawinan: '',
    //     statusJemaah: '',
    //     tglKembali: '',
    // })

    // const [idPaket, setidPaket] = useState()
    const [idJadwal, setidJadwal] = useState()
    const [noKtp, setnoKtp] = useState()
    const [noPaspor, setnoPaspor] = useState()
    const [namaJemaah, setnamaJemaah] = useState()
    const [namaAyahKandung, setnamaAyahKandung] = useState()
    const [namaIbuKandung, setnamaIbuKandung] = useState()
    const [tempatLahir, settempatLahir] = useState()
    const [tglLahir, settglLahir] = useState()
    const [alamatRumah, setalamatRumah] = useState()
    const [kelurahan, setkelurahan] = useState()
    const [kota, setkota] = useState()
    const [kodePos, setkodePos] = useState()
    const [telponRumah, settelponRumah] = useState()
    const [telponMobile, settelponMobile] = useState()
    const [pekerjaan, setpekerjaan] = useState()
    const [ukuranPakaian, setukuranPakaian] = useState()
    const [namaMahram, setnamaMahram] = useState()
    const [email, setemail] = useState()
    const [statusPerkawinan, setstatusPerkawinan] = useState()
    const [statusJemaah, setstatusJemaah] = useState()
    const [tglKembali, settglKembali] = useState()



    const postDataJemaah = () => {

        const dataForAPI = {
            idPaket: route.params.data.idPaket,
            idJadwal: idJadwal,
            noKtp: noKtp,
            noPaspor: noPaspor,
            namaJemaah: namaJemaah,
            namaAyahKandung: namaAyahKandung,
            namaIbuKandung: namaIbuKandung,
            tempatLahir: tempatLahir,
            tglLahir: text,
            alamatRumah: alamatRumah,
            kelurahan: kelurahan,
            kota: kota,
            kodePos: kodePos,
            telponRumah: telponRumah,
            telponMobile: telponMobile,
            pekerjaan: pekerjaan,
            ukuranPakaian: SelectionUkuranP,
            namaMahram: namaMahram,
            email: User.email,
            statusPerkawinan: statusPerkawinan,
            statusJemaah: statusJemaah,
            tglKembali: tglKembali,
        }

        console.log(dataForAPI);
    }

    return (
        <View style={style.viewWrapper}>
            <ScrollView>

                <View style={{ marginHorizontal: 20 }}>


                    <Text style={styles.heading}>Personal Information</Text>

                    <Text style={styles.label}>Nama Jemaah</Text>
                    <TextInput style={[style.textInputL]}
                        placeholder="Masukkan Nama Lengkap"
                        value={namaJemaah}
                        onChangeText={(text) => setnamaJemaah(text)}
                    />
                    <Text style={styles.label}>Nama Ayah Kandung</Text>
                    <TextInput style={[style.textInputL]}
                        placeholder="Masukkan Nama Ayah Kandung"
                        value={namaAyahKandung}
                        onChangeText={(text) => setnamaAyahKandung(text)}
                    />
                    <Text style={styles.label}>Nama Ibu Kandung</Text>
                    <TextInput style={[style.textInputL]}
                        placeholder="Masukkan Nama Ibu Kandung"
                        value={namaIbuKandung}
                        onChangeText={(text) => setnamaIbuKandung(text)}
                    />
                    <Text style={styles.label}>Tempat Lahir</Text>
                    <TextInput style={[style.textInputL]}
                        placeholder="Masukkan Tempat Lahir"
                        value={tempatLahir}
                        onChangeText={(text) => settempatLahir(text)}
                    />
                    <Text style={styles.label}>Tanggal Lahir</Text>
                    <CostumeDate TextColor={WarnaDark} placeholder={text} onPress={() => showMode('date')} />

                    {/* <Text style={styles.label}>Tanggal Lahir</Text>
                    <TextInput style={[style.textInputL]}
                        placeholder="Masukkan Tanggal Lahir"
                        value={tglLahir}
                        onChangeText={(text) => settglLahir(text)}
                    /> */}

                    {
                        Show && (
                            <DateTimePicker
                                testID={'dateTimePicker'}
                                value={date}
                                mode={Mode}
                                is24Hour={true}
                                display='default'
                                onChange={onChange}
                            />
                        )
                    }

                    <Text style={styles.label}>Ukuran Pakaian</Text>
                    <View style={[style.textInputL, { padding: 0 }]}>

                        {/* <Picker

                            selectedValue={SelectionUkuranP}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker> */}

                        <Picker

                            // style={{ height: 49 }}

                            selectedValue={SelectionUkuranP}
                            onValueChange={(itemValue) =>
                                setSelectionUkuranP(itemValue)
                            }>

                            {
                                UkuranP.map((up, index) => (
                                    <Picker.Item key={index} label={up} value={up} />
                                ))
                            }

                        </Picker>
                    </View>

                    <Text style={styles.label}>Ukuran Pakaian</Text>
                    <TextInput style={[style.textInputL]}
                        placeholder="ukuran pakaian"
                    />

                    <Text style={styles.label}>Nama Mahram</Text>
                    <TextInput style={[style.textInputL]}
                        placeholder="Nama Mahram"
                    />
                    <Text style={styles.label}>Status Perkawinan</Text>
                    <TextInput style={[style.textInputL]}
                        placeholder="ukuran pakaian"
                    />

                    <Text style={styles.heading}>Contact Information</Text>

                    <Text style={styles.label}>No. KTP</Text>
                    <TextInput style={[style.textInputL]}
                        placeholder="Masukkan Nomor KTP"
                    />
                    <Text style={styles.label}>No. Paspor</Text>
                    <TextInput style={[style.textInputL]}
                    />
                    <Text style={styles.label}>Alamat Rumah</Text>
                    <TextInput style={[style.textInputL]}
                        placeholder="Masukkan Alamat Rumah"
                    />
                    <Text style={styles.label}>Kelurahan</Text>
                    <TextInput style={[style.textInputL]}
                        placeholder="kelurahan"
                    />
                    <Text style={styles.label}>Kota</Text>
                    <TextInput style={[style.textInputL]}
                        placeholder="kota"
                    />
                    <Text style={styles.label}>Kode Pos</Text>
                    <TextInput style={[style.textInputL]}
                        placeholder="kode Pos"
                    />
                    <Text style={styles.label}>Telpon Rumah</Text>
                    <TextInput style={[style.textInputL]}
                        placeholder="Telpon Rumah"
                    />
                    <Text style={styles.label}>Telpon Mobile</Text>
                    <TextInput style={[style.textInputL]}
                        placeholder="Telpon Mobile"
                    />
                    <Text style={styles.label}>Pekerjaan</Text>
                    <TextInput style={[style.textInputL]}
                        placeholder="pekerjaan"
                    />
                    <View style={{ marginVertical: 30 }}>

                        <CustomeButton text='DAFTAR' color={WarnaUtama} onPress={postDataJemaah} textColor={WarnaSekunder} />
                    </View>
                </View>


            </ScrollView>

        </View>
    )
}

export default Formulir

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
        marginTop: 25,
        // marginVertical: 15,
        color: WarnaDark,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold'
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
        // marginVertical: 15,
        color: WarnaDark,
        marginTop: 10,
    }
})


{/* <Text>{route.params.data.kategori}</Text>
            <Text>{route.params.data.namaPaket}</Text> */}