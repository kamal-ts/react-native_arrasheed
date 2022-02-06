import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Alert, Modal } from 'react-native'
import { CustomeButton, Header, Loading } from '../../componenets'
import { WarnaDark, WarnaUtama } from '../../utils/constants'
import { style } from '../../utils/Style'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import axios from 'axios'

const FormDokumen = ({ route, navigation }) => {

    // const [idJemaah, setidJemaah] = useState()

    const [namaFile, setnamaFile] = useState([
        'KTP',
        'Paspor',
        'Kartu Keluarga',
        'Akta Kelahiran',
        'Ijazah',
        'Pas Foto',
    ])
    const [SelectionNamaFile, setSelectionNamaFile] = useState('')

    const [avatarSource, setAvatarSource] = useState(null)
    const [fileName, setFileName] = useState('')
    const [uri, setUri] = useState('')

    const [loading, setLoading] = useState(false)

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
        namaDok: '',
        namaFile: []
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

            let data = new FormData();
            data.append("idJemaah",route.params.idJemaah);
            data.append("namaDok",SelectionNamaFile);
            data.append("keterangan",'-');
            data.append("namaFile",{
                type: 'image/jpeg',
                uri: uri,
                name: fileName
            });


            console.log(data);

            axios.post('http://blackid.my.id/public/api_persyaratan', data)
                .then(function (response) {
                    console.log(response.data)
                    alert("Data Berhasil Ditambah")
                    navigation.replace('Loading')

                })
                .catch(function (error) {
                    // console.log(error.response.data.messages)
                    if(error.response == undefined){
                        postData()
                    }else{
                        console.log(error.response);
                        setPesan(error.response.data.messages)
                    }
                    setLoading(false)
                    // throw error;
                });
        }

    }


    return (
        <View style={[style.viewWrapper, { marginTop: 30 }]}>
            

                <View style={[styles.card, style.shadowProp]}>


                    <Text style={styles.label}>Dokumen Persyaratan</Text>
                    <View style={[style.textInputL, { padding: 0 }]}>


                        <Picker

                            selectedValue={SelectionNamaFile}

                            onValueChange={(itemValue) =>
                                setSelectionNamaFile(itemValue)
                            }>

                            <Picker.Item label={'Pilih'} value={''} />
                            {
                                namaFile.map((up, index) => (
                                    <Picker.Item key={index} label={up} value={up} />
                                ))
                            }

                        </Picker>
                    </View>
                    <Text style={{ color: '#FF1700' }}>
                        {Pesan.namaDok}
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
                        {Pesan.namaFile}
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
                                style={{ width: 290, height: 290, margin: 10, }}
                            />

                        </View>
                    )}

                    <View style={{ marginTop: 20 }}>
                        <CustomeButton onPress={() => postData()} text={'Simpan'} color={WarnaUtama} textColor={'#FFFFFF'} PaddingV={17} border={8} />
                    </View>

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

                </View>
        </View>
    )
}

export default FormDokumen

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        paddingVertical: 10



    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
        // marginVertical: 15,
        color: WarnaDark,
        marginTop: 10,
    },
    
    buttonSm: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingVertical: 4,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'red'
    }
})
