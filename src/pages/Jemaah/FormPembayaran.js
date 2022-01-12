import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native'
import { CustomeButton, CustomeDate, Header, Loading } from '../../componenets'
import { WarnaDark, WarnaUtama } from '../../utils/constants'
import { style } from '../../utils/Style'
import ImagePicker from 'react-native-image-picker'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { IconDokumen } from '../../assets'
import axios from 'axios'
import DateTimePicker from '@react-native-community/datetimepicker'


// const options = {
//     title: 'konsepKoding',
//     takePhotoButtonTitle: 'Take photo with your camera',
//     chooseFromLibraryButtonTitle: 'Choose photo from library',
// };

const FormPembayaran = ({ route, navigation }) => {


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

    const [loading, setLoading] = useState(false)


    const [noRek, setNoRek] = useState('')
    const [pemilikRek, setPemilikRek] = useState('')
    const [namaBank, setNamaBank] = useState('')
    const [jumlahBayar, setJumlahBayar] = useState('')
    const [bankTujuan, setBankTujuan] = useState('')
    const [tglTransfer, setTglTransfer] = useState('')
    // const [gambarStruk, setGambarStruk] = useState()


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
            alert("Gambar Tidak Boleh Kosong")
        } else {

            setLoading(true)

            const data = new FormData();
            data.append("idJemaah", route.params.idJemaah);
            data.append("noRek", noRek);
            data.append("pemilikRek", pemilikRek);
            data.append("namaBank", namaBank);
            data.append("jumlahBayar", jumlahBayar);
            data.append("bankTujuan", bankTujuan);
            data.append("tglTransfer", text);
            data.append("gambarStruk", {
                uri: uri,
                type: 'image/jpeg',
                name: fileName
            });


            console.log(data);

            axios.post('http://blackid.my.id/public/api_pembayaran', data)
                .then(function (response) {
                    console.log(response.data)
                    alert("Data Berhasil Ditambah")
                    navigation.replace('Loading')

                })
                .catch(function (error) {
                    console.log(error.response.data.messages)
                    setPesan(error.response.data.messages)
                    setLoading(false)
                });
        }

    }

    const hapusData = () => {

    }


    return (
        <View style={[style.viewWrapper, { backgroundColor: '#FFFFFF' }]}>
            {loading == false && (

                <ScrollView>

                    <View style={{ marginHorizontal: 20, marginTop: 10 }}>

                        <Text style={styles.label}>Nomor Rekening</Text>
                        <TextInput style={[style.textInputL]}
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
                        <TextInput style={[style.textInputL]}
                            placeholder="Masukkan Nama Bank"
                            value={namaBank}
                            onChangeText={(text) => setNamaBank(text)}
                        />
                        <Text style={{ color: '#FF1700' }}>
                            {Pesan.namaBank}
                        </Text>
                        <Text style={styles.label}>Nominal</Text>
                        <TextInput style={[style.textInputL]}
                            placeholder="Masukkan Nominal"
                            value={jumlahBayar}
                            onChangeText={(text) => setJumlahBayar(text)}
                        />
                        <Text style={{ color: '#FF1700' }}>
                            {Pesan.jumlahBayar}
                        </Text>
                        <Text style={styles.label}>Bank Tujuan</Text>
                        <TextInput style={[style.textInputL]}
                            placeholder="Masukkan Bank Tujuan"
                            value={bankTujuan}
                            onChangeText={(text) => setBankTujuan(text)}
                        />
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
                            <View>
                                <CustomeButton onPress={myfun} textColor={'#FFFFFF'} color={'#12a4d9'} text={'Pilih File'} PaddingV={15} />
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
            )}
            {loading != false && (

                <Loading Animati={true} />
            )}
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
