import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomeButton, Header } from '../../componenets'
import { WarnaDark, WarnaSekunder, WarnaUtama } from '../../utils/constants'
import { style } from '../../utils/Style'

const Akun = ({ navigation }) => {

    const tentangHaji = () => {
        navigation.navigate('TentangHaji')
    }
    const daftarHaji = () => {
        navigation.navigate('DaftarHaji')
    }
    const ketentuanHaji = () => {
        navigation.navigate('KetentuanHaji')
    }
    const tentangUmroh = () => {
        navigation.navigate('tentangUmroh')
    }

    return (
        <View style={style.viewWrapper}>
            <Header />

            <View style={{ marginVertical: 30, marginHorizontal: 30 }}>

                <Text style={styles.heading}>- HAJI -</Text>
                <View style={{ marginBottom: 10 }}>
                    <CustomeButton borderWidth={1} borderColor={WarnaDark} text={'TENTANG HAJI'} color={'#FFFFFF'} textColor={WarnaDark} onPress={tentangHaji} />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <CustomeButton borderWidth={1} borderColor={WarnaDark} text={'CARA MENDAFTAR HAJI'} color={'#FFFFFF'} textColor={WarnaDark} onPress={daftarHaji} />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <CustomeButton borderWidth={1} borderColor={WarnaDark} text={'SYARAT & KETENTUAN'} color={'#FFFFFF'} textColor={WarnaDark} onPress={ketentuanHaji} />
                </View>
                <Text style={[styles.heading, {marginTop: 20}]}>- UMROH -</Text>
                <View style={{ marginBottom: 10 }}>
                    <CustomeButton borderWidth={1} borderColor={WarnaDark} text={'TENTANG UMROH'} color={'#FFFFFF'} textColor={WarnaDark} onPress={tentangUmroh} />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <CustomeButton borderWidth={1} borderColor={WarnaDark} text={'CARA MENDAFTAR UMROH'} color={'#FFFFFF'} textColor={WarnaDark} onPress={daftarHaji} />
                </View>
                <View style={{ marginBottom: 10 }}>
                    <CustomeButton borderWidth={1} borderColor={WarnaDark} text={'SYARAT & KETENTUAN'} color={'#FFFFFF'} textColor={WarnaDark} onPress={daftarHaji} />
                </View>

            </View>
        </View>
    )
}

export default Akun

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: '600',
        // marginVertical: 15,
        color: '#4c4c4c',
        fontFamily: 'Poppins-Bold',
        marginBottom: 8,
        // textDecorationLine: 'underline',
    },
})



// import React, { Component } from 'react';
// import { Header } from '../../componenets'
// import { View, Text, TextInput, Button } from 'react-native';
// import { style } from '../../utils/Style'

// class About extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             nama: '',
//             alamat: '',
//             listData: [],
//             idEdit: null,
//         };
//         this.url = "http://blackid.my.id/public/api_paket";
//     }
//     componentDidMount() {
//         this.ambilListData()
//     }
//     async ambilListData() {
//         await fetch(this.url)
//             .then((response) => response.json())
//             .then((json) => {
//                 console.log('Hasil yang didapat: ' + JSON.stringify(json));
//                 this.setState({ listData: json});
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     }
//     klikSimpan() {
//         if (this.state.nama == '' || this.state.alamat == '') {
//             alert('Silakan masukkan nama dan alamat');
//         } else {
//             if (this.state.idEdit) {
//                 var urlAksi = this.url + "/?op=update&id=" + this.state.idEdit;
//             } else {
//                 var urlAksi = this.url + "/?op=create";
//             }


//             fetch(urlAksi, {
//                 method: 'post',
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded'
//                 },
//                 body: "nama=" + this.state.nama + "&alamat=" + this.state.alamat
//             })
//                 .then((response) => response.json())
//                 .then((json) => {
//                     this.setState({ nama: '' });
//                     this.setState({ alamat: '' });
//                     this.ambilListData();
//                 })
//         }
//     }
//     async klikEdit(id) {
//         await fetch(this.url + "/?op=detail&id=" + id)
//             .then((response) => response.json())
//             .then((json) => {
//                 this.setState({ nama: json.data.result[0].nama });
//                 this.setState({ alamat: json.data.result[0].alamat })
//                 this.setState({ idEdit: id })
//             })
//     }
//     async klikDelete(id) {
//         await fetch(this.url + "/?op=delete&id=" + id)
//             .then((response) => response.json())
//             .then((json) => {
//                 alert('Data berhasil didelete');
//                 this.ambilListData();
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }

//     render() {
//         return (
//             <View style={style.viewWrapper}>
//                 <Header />
//                 <View style={style.viewData}>
//                     {
//                         this.state.listData.map((val, index) => (
//                             <View style={style.viewList} key={index}>
//                                 <Text style={style.textListNama}>{val.namaPaket}</Text>
//                                 <Text style={style.textListEdit} onPress={() => this.klikEdit(val.id)}>Edit</Text>
//                                 <Text style={style.textListDelete} onPress={() => this.klikDelete(val.id)}>Delete</Text>
//                             </View>
//                         ))
//                     }
//                 </View>
//                 <View style={style.viewForm}>
//                     <TextInput
//                         style={style.textInput}
//                         placeholder="Masukkan Nama"
//                         value={this.state.nama}
//                         onChangeText={(text) => this.setState({ nama: text })}
//                     >
//                     </TextInput>
//                     <TextInput
//                         style={style.textInput}
//                         placeholder="Masukkan Alamat"
//                         value={this.state.alamat}
//                         onChangeText={(text) => this.setState({ alamat: text })}
//                     ></TextInput>
//                     <Button
//                         title="Masukkan Data"
//                         onPress={() => this.klikSimpan()}>

//                     </Button>
//                 </View>
//             </View>
//         );
//     }
// }

// export default About;