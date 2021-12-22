// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import { Header } from '../../componenets'
// import { WarnaSekunder } from '../../utils/constants'

// const Akun = () => {
//     return (
//         <View style={styles.page}>
//             <Header />
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text>Akun Screen</Text>
//             </View>
//         </View>
//     )
// }

// export default Akun

// const styles = StyleSheet.create({
//     page: {
//         flex: 1,
//         backgroundColor: WarnaSekunder
//     }
// })


import React, { Component } from 'react';
import { Header } from '../../componenets'
import { View, Text, TextInput, Button } from 'react-native';
import { style } from '../../utils/Style'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: '',
            alamat: '',
            listData: [],
            idEdit: null,
        };
        this.url = "http://blackid.my.id/public/api_paket";
    }
    componentDidMount() {
        this.ambilListData()
    }
    async ambilListData() {
        await fetch(this.url)
            .then((response) => response.json())
            .then((json) => {
                console.log('Hasil yang didapat: ' + JSON.stringify(json));
                this.setState({ listData: json});
            })
            .catch((error) => {
                console.log(error);
            })
    }
    klikSimpan() {
        if (this.state.nama == '' || this.state.alamat == '') {
            alert('Silakan masukkan nama dan alamat');
        } else {
            if (this.state.idEdit) {
                var urlAksi = this.url + "/?op=update&id=" + this.state.idEdit;
            } else {
                var urlAksi = this.url + "/?op=create";
            }


            fetch(urlAksi, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: "nama=" + this.state.nama + "&alamat=" + this.state.alamat
            })
                .then((response) => response.json())
                .then((json) => {
                    this.setState({ nama: '' });
                    this.setState({ alamat: '' });
                    this.ambilListData();
                })
        }
    }
    async klikEdit(id) {
        await fetch(this.url + "/?op=detail&id=" + id)
            .then((response) => response.json())
            .then((json) => {
                this.setState({ nama: json.data.result[0].nama });
                this.setState({ alamat: json.data.result[0].alamat })
                this.setState({ idEdit: id })
            })
    }
    async klikDelete(id) {
        await fetch(this.url + "/?op=delete&id=" + id)
            .then((response) => response.json())
            .then((json) => {
                alert('Data berhasil didelete');
                this.ambilListData();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View style={style.viewWrapper}>
                <Header />
                <View style={style.viewData}>
                    {
                        this.state.listData.map((val, index) => (
                            <View style={style.viewList} key={index}>
                                <Text style={style.textListNama}>{val.namaPaket}</Text>
                                <Text style={style.textListEdit} onPress={() => this.klikEdit(val.id)}>Edit</Text>
                                <Text style={style.textListDelete} onPress={() => this.klikDelete(val.id)}>Delete</Text>
                            </View>
                        ))
                    }
                </View>
                <View style={style.viewForm}>
                    <TextInput
                        style={style.textInput}
                        placeholder="Masukkan Nama"
                        value={this.state.nama}
                        onChangeText={(text) => this.setState({ nama: text })}
                    >
                    </TextInput>
                    <TextInput
                        style={style.textInput}
                        placeholder="Masukkan Alamat"
                        value={this.state.alamat}
                        onChangeText={(text) => this.setState({ alamat: text })}
                    ></TextInput>
                    <Button
                        title="Masukkan Data"
                        onPress={() => this.klikSimpan()}>

                    </Button>
                </View>
            </View>
        );
    }
}

export default About;