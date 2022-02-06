import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Image, ActivityIndicator, Alert, Modal } from 'react-native'
import { CustomeButton, CustomeDate, Header, Loading } from '../../componenets'
import { WarnaDark, WarnaUtama } from '../../utils/constants'
import { style } from '../../utils/Style'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import axios from 'axios'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Picker } from '@react-native-picker/picker'


// const options = {
//     title: 'konsepKoding',
//     takePhotoButtonTitle: 'Take photo with your camera',
//     chooseFromLibraryButtonTitle: 'Choose photo from library',
// };

const FormPembayaran = ({ route, navigation }) => {



    // daftar bank
    const [pickerBank, setPickerBank] = useState([
        'BCA',
        'Persero',
        'BNI',
        'Bank Mandiri',
        'BRI',
        'Bank OCBC NISP',
        'Panin Bank',
        'Citibank'
    ])
    const [SelectionBank, setSelectionBank] = useState('')

    // untuk bank tujuan
    const [pickerBankTujuan, setPickerBankTujuan] = useState([
        'Bank Mega Syariah',
        'Bank Syariah Indonesia',
        'Bank Muamalat Indonesia',
        'Bank Jabar Banten Syariah',
        'Bank Syariah Bukopin',
        'Bank Panin Dubai Syariah',
        'Bank BCA Syariah',
        'Bank Sinarmas, UUS'
    ])
    const [SelectionBankTujuan, setSelectionBankTujuan] = useState('')

    // untuk date time picker
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


    const [avatarSource, setAvatarSource] = useState(null)
    const [fileName, setFileName] = useState('')
    const [uri, setUri] = useState('')
    const [type, setType] = useState('')
    


    const [loading, setLoading] = useState(false)


    const [noRek, setNoRek] = useState('')
    const [pemilikRek, setPemilikRek] = useState('')
    const [namaBank, setNamaBank] = useState('')
    const [jumlahBayar, setJumlahBayar] = useState('')
    const [bankTujuan, setBankTujuan] = useState('')
    const [tglTransfer, setTglTransfer] = useState('')


    // untuk open camera
    const myfun = () => {
        // alert('clicked');
        const options = {
            storageOptions: {
                path: 'images',
                mediaType: 'photo',

            },
            // includeBase64: true
        }


        launchCamera(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                // console.log("tes : ", response.assets[0].fileName);
                // const source = { uri: 'data:image/jpeg;base64,' + response.base64 }
                const source = { uri: response.assets[0].uri };
                // let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                setAvatarSource(source);
                setFileName(response.assets[0].fileName)
                setUri(response.assets[0].uri)
                setType(response.assets[0].type)
            }
        });
    };

    const openGalery = () => {
        // alert('clicked');
        const options = {
            storageOptions: {
                path: 'images',
                mediaType: 'photo',

            },
            // includeBase64: true
        }


        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                // console.log("tes : ", response.assets[0].fileName);
                // const source = { uri: 'data:image/jpeg;base64,' + response.base64 }
                const source = { uri: response.assets[0].uri };
                // let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                setAvatarSource(source)
                setFileName(response.assets[0].fileName)
                setUri(response.assets[0].uri)
            }
        });
    };



    const [Pesan, setPesan] = useState({
        noRek: '',
        pemilikRek: '',
        namaBank: '',
        jumlahBayar: '',
        bankTujuan: '',
        tglTransfer: '',
        gambarStruk: '',
    })


    const postData = () => {

        if (uri == '') {
            Alert.alert(
                "Gagal!",
                "Gambar Tidak Boleh Kosong",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            )
        }
        else {

            setLoading(true)

            const gambar = {
                uri: uri,
                type: 'image/jpeg',
                name: fileName
            }

            let data = new FormData();
            data.append("idJemaah", route.params.idJemaah);
            data.append("noRek", noRek);
            data.append("pemilikRek", pemilikRek);
            data.append("namaBank", SelectionBank);
            data.append("jumlahBayar", jumlahBayar);
            data.append("bankTujuan", SelectionBankTujuan);
            data.append("tglTransfer", text);
            data.append("gambarStruk", gambar);


            console.log(data);

            // setUri('')
            // setFileName('')
            // setAvatarSource('')

            axios.post('http://blackid.my.id/public/api_pembayaran', data)
                .then(function (response) {
                    console.log(response.data)
                    alert("Data Berhasil Ditambah")
                    navigation.replace('Loading')

                })
                .catch(function (error) {
                    if(error.response == undefined){
                        postData()
                    }else{
                        console.log(error.response);
                        setPesan(error.response.data.messages)
                    }
                    // console.log(data);
                    // setPesan(error.response.data.messages)

                    setLoading(false)
                });
        }

    }


    return (
        <View style={[style.viewWrapper, { backgroundColor: '#FFFFFF' }]}>
            {/* {loading == false && ( */}

            <ScrollView>

                <View style={{ marginHorizontal: 20, marginTop: 10 }}>

                    <Text style={styles.label}>Nomor Rekening</Text>
                    <TextInput style={[style.textInputL]}
                        keyboardType='numeric'
                        placeholder="Masukkan No Rekening"
                        value={noRek}
                        onChangeText={(text) => setNoRek(text)}
                    />
                    <Text style={{ color: '#FF1700' }}>
                        {Pesan.noRek}
                    </Text>
                    <Text style={styles.label}>Pemilik Rekening</Text>
                    <TextInput style={[style.textInputL]}
                        placeholder="Masukkan Pemilik Rekening"
                        value={pemilikRek}
                        onChangeText={(text) => setPemilikRek(text)}
                    />
                    <Text style={{ color: '#FF1700' }}>
                        {Pesan.pemilikRek}
                    </Text>
                    <Text style={styles.label}>Nama Bank</Text>
                    <View style={[style.textInputL, { padding: 0 }]}>


                        <Picker

                            selectedValue={SelectionBank}

                            onValueChange={(itemValue) =>
                                setSelectionBank(itemValue)
                            }>

                            <Picker.Item label={'Pilih Bank'} value={''} />
                            {
                                pickerBank.map((up, index) => (
                                    <Picker.Item key={index} label={up} value={up} />
                                ))
                            }

                        </Picker>
                    </View>
                    {/* <TextInput style={[style.textInputL]}
                        placeholder="Masukkan Nama Bank"
                        value={namaBank}
                        onChangeText={(text) => setNamaBank(text)}
                    /> */}
                    <Text style={{ color: '#FF1700' }}>
                        {Pesan.namaBank}
                    </Text>

                    <Text style={styles.label}>Nominal</Text>
                    <TextInput style={[style.textInputL]}
                        keyboardType='numeric'
                        placeholder="Masukkan Nominal"
                        value={jumlahBayar}
                        onChangeText={(text) => setJumlahBayar(text)}
                    />
                    <Text style={{ color: '#FF1700' }}>
                        {Pesan.jumlahBayar}
                    </Text>
                    <Text style={styles.label}>Bank Tujuan</Text>

                    <View style={[style.textInputL, { padding: 0 }]}>


                        <Picker

                            // style={{ height: 49 }}

                            selectedValue={SelectionBankTujuan}

                            onValueChange={(itemValue) =>
                                setSelectionBankTujuan(itemValue)
                            }>

                            <Picker.Item label={'Pilih Bank Tujuan'} value={'Pilih Bank Tujuan'} />
                            {
                                pickerBankTujuan.map((up, index) => (
                                    <Picker.Item key={index} label={up} value={up} />
                                ))
                            }

                        </Picker>
                    </View>
                    <Text style={{ color: '#FF1700' }}>
                        {Pesan.bankTujuan}
                    </Text>

                    <Text style={styles.label}>Tanggal Transfer</Text>
                    <CustomeDate TextColor={WarnaDark} placeholder={text} onPress={() => showMode('date')} />

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

                    <Text style={{ color: '#FF1700' }}>
                        {Pesan.tglTransfer}
                    </Text>


                    <Text style={styles.label}>Pilih Gambar</Text>
                    <View style={{
                        flexDirection: 'row',
                        // marginVertical: 10,
                        // padding: 10,
                        borderWidth: 1,
                        alignItems: 'center',
                        borderRadius: 6,
                        borderColor: '#CCCCCC'

                    }}>
                        <View style={{ flex: 10, paddingLeft: 7 }}>
                            {fileName == null && (

                                <Text> Nama File</Text>
                            )}
                            {fileName != null && (
                                <Text>{fileName}</Text>
                            )}
                        </View>
                        {/* <View>
                                <CustomeButton onPress={myfun} textColor={'#FFFFFF'} color={'#12a4d9'} text={'Pilih File'} PaddingV={15} />
                            </View> */}
                        <View>
                            <CustomeButton onPress={openGalery} textColor={'#FFFFFF'} color={'#12a4d9'} text={'Open File'} PaddingV={15} />
                        </View>
                    </View>
                    <Text style={{ color: '#FF1700' }}>
                        {Pesan.gambarStruk}
                    </Text>

                    {avatarSource != null && (
                        <View style={{
                            borderWidth: 1,
                            alignItems: 'center',
                            borderColor: '#CCCCCC',
                            marginVertical: 20,
                            borderRadius: 5,

                        }}>
                            {/* {avatarSource == null && (
                                
                                <Text style={{ padding: 50, paddingVertical: 150 }}>Gambar</Text>
                            )} */}
                            

                            <Image
                                source={avatarSource}
                                style={{ width: 300, height: 300, margin: 10, }}
                            />

                        </View>
                    )}

                    <Text style={{ color: '#FF1700' }}>
                        {/* {Pesan.namaJemaah} */}

                    </Text>
                    <View style={{ marginVertical: 20 }}>

                        <CustomeButton onPress={postData} textColor={'#FFFFFF'} color={WarnaUtama} text={'Konfirmasi'} />
                    </View>
                </View>


            </ScrollView>
            {/* // )} */}
            {/* {loading != false && ( */}
            <Modal visible={loading} transparent animationType='fade' >

                <View style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    alignItems: 'center',
                    flex: 1,
                    justifyContent: 'center'


                }}>
                    {/* <CustomeButton text={'Pilih'} onPress={() => setstatusModal(false)} /> */}
                    <Loading Animati={true} />
                </View>

            </Modal>

            {/* )} */}
        </View>
    )
}

export default FormPembayaran

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
