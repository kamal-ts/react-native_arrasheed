import React, { Component, useEffect, useState } from 'react';
import { CustomeButton, Header } from '../../componenets'
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { style } from '../../utils/Style'
import axios from 'axios';
import { WarnaDark, WarnaSekunder, WarnaUtama } from '../../utils/constants';
import { Formulir } from './formulir';



const Home = ({ navigation }) => {

    useEffect(() => {
        getData();
    }, []);

    const [Paket, setPaket] = useState([])
    const [Error, setError] = useState('')

    const getData = () => {

        setError('');

        axios.get('http://blackid.my.id/public/api_paket')
            .then(res => {
                // console.log('res: ', res.data);
                setPaket(res.data);
                // console.log('paket: ', Paket);
            })
            .catch(function (error) {
                setError('Error')
                // Alert.alert(
                //     "No Internet",
                //     "No Internet connection found Please try again",
                //     [
                //         { text: "OK", onPress: () => setError('Error') }
                //     ]
                // );
            });

    }


    const Profile = () => {
        navigation.navigate('Profile')
    }

    const selectItem = (val) => {
        navigation.navigate('Formulir', { data: val })
    }


    const ErrorKoneksi = () => {
        return (
            <View style={{ marginVertical: '50%' }}>
                <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Poppins-Bold' }}>No Internet !</Text>
                <Text style={{ textAlign: 'center', fontSize: 20 }}>
                    no internet connection found please try again
                </Text>
                <View style={{ paddingHorizontal: 130, marginVertical: 30 }} >
                    <Button title='try again' onPress={getData} />
                </View>
                {/* <CustomeButton text='Logout' color={WarnaUtama} onPress={getData}/> */}

            </View>
        )
    }


    return (
        <View style={style.viewWrapper}>
            <Header onPress={Profile} UserN={''} />
            <View style={style.viewData}>
                <ScrollView>

                    <View>
                        <Text style={styles.heading}>- PAKET HAJI & UMROH -</Text>
                    </View>

                    {Error == 'Error' && (
                        <ErrorKoneksi />
                    )}

                    {Error != 'Error' && (


                        Paket.map((val, Home) => (
                            <Item key={Home} kategori={val.kategori} namaPaket={val.namaPaket} description={val.description} hargaDaftar={val.hargaDaftar} onPress={() => selectItem(val)} />

                        ))

                    )}

                </ScrollView>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        // marginVertical: 15,
        color: '#4c4c4c',
        fontFamily: 'Poppins-Bold',
        marginHorizontal: 30,
        marginBottom: 8,
        // textDecorationLine: 'underline',
    },
})






const Item = ({ namaPaket, kategori, description, hargaDaftar, onPress }) => {

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
    return (
        <TouchableOpacity style={style.viewList} onPress={onPress}>
            <View>
                <Text style={style.textLispaket} >{namaPaket.toUpperCase()}</Text>
                {/* <Text style={{ color: WarnaSekunder }}>
                    {description}
                </Text> */}
                <Text style={{ color: WarnaSekunder, fontSize: 20, fontWeight: "bold", marginTop: 7 }}>

                    Estimasi :
                    {kategori == 'umroh' ? ' Rp. ' : ' USD. '}
                    {convertToRupiah(hargaDaftar)}

                </Text>
            </View>
        </TouchableOpacity>
    )
}



// import React, { Component } from 'react';
// import { Header } from '../../componenets'
// import { View, Text, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
// import { style } from '../../utils/Style'

// class Depan extends Component {
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

//     convertToRupiah(number) {

//         if (number) {
//             var rupiah = "";
//             var numberrev = number
//                 .toString()
//                 .split("")
//                 .reverse()
//                 .join("");

//             for (var i = 0; i < numberrev.length; i++)
//                 if (i % 3 == 0) rupiah += numberrev.substr(i, 3) + ".";
//                 return (

//                     // "Rp. " +
//                     rupiah
//                     .split("", rupiah.length - 1)
//                     .reverse()
//                     .join("")
//                 );

//         } else {

//         return number;

//         }

//     }


//     render() {
//         return (
//             <View style={style.viewWrapper}>
//                 <Header />
//                 <View style={style.viewData}>
//                     <ScrollView>
//                         {
//                             this.state.listData.map((val, index) => (

//                                 <TouchableOpacity style={style.viewList} key={index}>
//                                     <View>
//                                         <Text style={style.textLispaket}>{val.namaPaket}</Text>
//                                         <Text style={{color:'#FFFFFF'}}>
//                                             {val.description}
//                                         </Text>
//                                         <Text style={{color:'#FFFFFF', fontSize:18, fontWeight: "bold", marginTop:2}}>

//                                             Estimasi :
//                                             {val.kategori== 'umroh' ? ' Rp. ' : ' USD. '}
//                                             {this.convertToRupiah(val.hargaDaftar)}

//                                         </Text>
//                                     </View>
//                                 </TouchableOpacity>

//                             ))
//                         }
//                     </ScrollView>
//                 </View>
//             </View>
//         );
//     }
// }

// export default Depan;
