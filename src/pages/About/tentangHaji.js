import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { WarnaDark } from '../../utils/constants'
import { style } from '../../utils/Style'

const tentangHaji = () => {
    return (
        <View style={style.viewWrapper}>
            <ScrollView>

                <View style={styles.card}>
                    {/* <Text style={styles.heading}>Tentang Haji</Text> */}
                    <Text style={{ textAlign: 'justify' }}>
                        Tempat-tempat tertentu yang dimaksud dalam definisi diatas adalah selain Ka`bah dan Mas`a (tempat sa`i), juga Padang Arafah (tempat wukuf), Muzdalifah (tempat mabit), dan Mina (tempat melontar jumroh). Sedangkan yang dimaksud dengan waktu tertentu adalah bulan-bulan haji yaitu dimulai dari Syawal sampai sepuluh hari pertama bulan Dzulhijjah. Amalan ibadah tertentu ialah thawaf, sa`i, wukuf, mazbit di Muzdalifah, melontar jumroh, dan mabit di Mina. Jenis Haji
                    </Text>
                    <Text style={styles.heading}>Jenis Haji</Text>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ textAlign: 'justify' }}>

                            <Text style={{ fontFamily: 'Poppins-Bold' }}>- Haji Ifrad, </Text>
                            <Text style={{ fontWeight: 'normal' }}>
                                artinya menyendiri
                                Pelaksanaan ibadah haji disebut ifrad jika sesorang melaksanakan ibadah haji dan umroh dilaksanakan secara sendiri-sendiri, dengan mendahulukan ibadah haji. Artinya, ketika calon jamaah haji mengenakan pakaian ihram di miqat-nya, hanya berniat melaksanakan ibadah haji. Jika ibadah hajinya sudah selesai, maka orang tersebut mengenakan ihram kembali untuk melaksanakan ibadah umroh.
                            </Text>
                        </Text>
                        <Text style={{ textAlign: 'justify' }}>

                            <Text style={{ fontFamily: 'Poppins-Bold' }}>- Haji Tamattu`, </Text>
                            <Text style={{ fontWeight: 'normal' }}>
                                artinya bersenang-senang
                                Pelaksanaan ibadah haji disebut Tamattu` jika seseorang melaksanakan ibadah umroh dan Haji di bulan haji yang sama dengan mendahulukan ibadah Umroh. Artinya, ketika seseorang mengenakan pakaian ihram di miqat-nya, hanya berniat melaksanakan ibadah Umroh. Jika ibadah Umrohnya sudah selesai, maka orang tersebut mengenakan ihram kembali untuk melaksanakan ibadah Haji. Tamattu` dapat juga berarti melaksanakan ibadah Umroh dan Haji didalam bulan-bulan serta didalam tahun yang sama, tanpa terlebih dahulu pulang ke negeri asal.
                            </Text>
                        </Text>
                        <Text style={{ textAlign: 'justify' }}>

                            <Text style={{ fontFamily: 'Poppins-Bold' }}>- Haji Qiran, </Text>
                            <Text style={{ fontWeight: 'normal' }}>
                                artinya menggabungkan
                                Pelaksanaan ibadah Haji disebut Qiran jika seseorang melaksanakan ibadah Haji dan Umroh disatukan atau menyekaliguskan berihram untuk melaksanakan ibadah haji dan umrah. Haji Qiran dilakukan dengan tetap berpakaian ihram sejak miqat makani dan melaksanakan semua rukun dan wajib haji sampai selesai, meskipun mungkin akan memakan waktu lama.
                            </Text>
                        </Text>
                    </View>
                    <Text style={{ textAlign: 'justify', marginTop: 15 }}>
                        Apabila salah satu rukun haji di atas tidak dilaksanakan maka hajinya batal. Sedangkan Abu Hanifah berpendapat bahwa rukun haji hanya ada 2 yaitu: Wuquf dan Thawaf. Ihram dan Sa`I tidak dimasukkan ke dalam rukun karena menurut beliau, ihram adalah syarat sah haji dan sa`I adalah yang wajib dilakukan dalam haji (wajib haji). Sementara Imam syafi`ie berpendapat bahwa rukun haji ada 6 yaitu: Ihram, Thawaf, Sa`ie, Wuquf, Mencukur rambut, dan Tertib berurutan).(Kitabul Fiqh Ala Madzhabil Arba`ah 1/578).
                    </Text>
                    <Text style={styles.heading}>Rukun Haji</Text>
                    <View style={{ marginLeft: 20 }}>
                        <Text>- Ihram</Text>
                        <Text>- Wukuf</Text>
                        <Text>- Tawaf</Text>
                        <Text>- Tahallul</Text>
                    </View>
                    <Text style={styles.heading}>Haji Bagi Anak Yang Belum Baligh</Text>
                    <Text style={{ textAlign: 'justify' }}>Tidaklah wajib bagi anak-anak untuk berhaji kecuali ia telah balig.Namun jika ia telah berhaji maka hajinya sah. sebagaimana yang telah diriwayatkan Ibnu Abbas ra bahwa Rasulullah SAW berjumpa dengan seseorang dikawasan Ar-Rauha beliau bersabda: Siapakah kalian? Mereka menjawab: Kami orang-orang muslim, mereka balik bertanya: Siapa anda?, Beliau menjawab: Saya Rasul Allah. Lalu ada seorang anak gadis yang masih kecil bertanya: Apakah ini yang disebut haji? Beliau menjawab: Ya dan bagimu pahala (HR. Ahmad, Muslim, Abu Daud, dan An Nasa dishahihkan oleh At Tirmidzi).</Text>

                    <Text style={styles.heading}>Mewakili Seseorang Untuk Haji</Text>
                    <Text style={{ textAlign: 'justify' }}>
                        Tidak boleh bagi seseorang berhaji untuk orang lain kecuali setelah ia berhaji untuk dirinya sendiri. Rasulullah bersabda: Berhajilah untuk dirimu sendiri, kemudian engkau berhaji untuknya.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default tentangHaji

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 30,
        marginVertical: 30,
    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
        // marginBottom: 15,
        marginTop: 15,
        // marginVertical: 15,
        color: WarnaDark,
        // textAlign: 'center',
        fontFamily: 'Poppins-Bold'
    },
    headingS: {
        // fontSize: 12,
        fontWeight: '600',
        // marginBottom: 15,
        marginTop: 15,
        // marginVertical: 15,
        color: WarnaDark,
        // textAlign: 'center',
        fontFamily: 'Poppins-Bold'
    },
})
