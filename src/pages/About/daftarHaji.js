import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import { CustomeList } from '../../componenets'
import { WarnaDark } from '../../utils/constants'
import { style } from '../../utils/Style'

const daftarHaji = () => {
    return (
        <View style={style.viewWrapper}>
            <ScrollView>

                <View style={styles.card}>
                    {/* <Text style={styles.heading}>Tentang Haji</Text> */}

                    <Text style={styles.heading}>Prosedur Pendaftaran Haji : </Text>
                    <CustomeList Title={'Mengisi Form Aplikasi Biodata Calon Jemaah Haji.'} />
                    <CustomeList Title={'Melunasi / Membayar DP Minimal USD.5,500 / pax.'} />

                    <Text style={{ textAlign: 'justify', marginTop: 15 }}>
                        Kuota Terbatas mengikuti ketentuan Kementeraian Agama RI.
                    </Text>
                    <Text style={{ textAlign: 'justify', marginTop: 15 }}>
                        Pelunasan setelah pengumuman dari Kementerian Agama RI
                    </Text>

                    <CustomeList Title={'Copy KTP dan passpor'} />
                    <CustomeList Title={'Copy Kartu Keluarga(KK)'} />
                    <CustomeList Title={'Menyerahkan Pasfoto berwarna, latar belakang putih, tampak wajah saja 80% Wanita memakai Jilbab Ukuran : 3 x 4 = 25 Lembar ; 4 x 6 = 10 lembar'} />


                    

                    <Text style={styles.heading}>Fasilitas : </Text>
                    <CustomeList Title={'HOTEL MEKKAH : GRAND ROYAL EIMAN / setaraf'} />
                    <CustomeList Title={'HOTEL MADINAH : AL HARAM / setaraf'} />
                    <CustomeList Title={'HOTEL JEDDAH : HOLIDAY IN / setaraf'} />
                    <CustomeList Title={'HOTEL TRANSIT : WISMA / APARTEMEN'} />
                    <CustomeList Title={'MINA : TENDA VIP AC'} />
                    <CustomeList Title={'ARAFAH : TENDA VIP AC'} />
                    <CustomeList Title={'PESAWAT : GARUDA – SAUDIA AIRLINES – ETIHAD – QATAR – KUWAIT'} />


                    <Text style={styles.heading}>Fasilitas Termasuk : </Text>
                    <CustomeList Title={'Setoran ke Kementerian Agama RI dan VISA HAJI KHUSUS'} />
                    <CustomeList Title={'Perlengkapan Ibadah dan Kain Seragam Jamaah Haji.'} />
                    <CustomeList Title={'Bimbingan Manasik Haji'} />
                    <CustomeList Title={'Kamar sesuai pilihan'} />
                    <CustomeList Title={'Transportasi Udara Kelas Ekonomi'} />
                    <CustomeList Title={'Transportasi Darat ber AC'} />
                    <CustomeList Title={'Tenda haji khusus / Plus di Mina dan Arafah'} />
                    <CustomeList Title={'Air ZAMZAM 10 liter'} />
                    <CustomeList Title={'Makan & Minum 3 kali sehari'} />
                    <CustomeList Title={'Muthawif / Guide dan dokter'} />
                    <CustomeList Title={'Ziarah Kota Mekkah'} />
                    <CustomeList Title={'Ziarah Kota Madinah'} />
                    <CustomeList Title={'Jeddah City Tour'} />


                    <Text style={styles.heading}>Fasilitas Tidak Termasuk : </Text>
                    <CustomeList Title={'Pemeriksaan Kesehatan & Suntik Meningitis'} />
                    <CustomeList Title={'Pemeriksaan Lab & Suntik Influensa'} />
                    <CustomeList Title={'Hewan Qurban'} />
                    <CustomeList Title={'Laundry dan kargo bagasi / kelebihan bagasi'} />
                    <CustomeList Title={'Tips / Pengeluaran Pribadi lainnya'} />
                    <CustomeList Title={'Program di luar agenda yang telah di tentukan'} />
                    <CustomeList Title={'Pembuatan Passpor'} />
                    <CustomeList Title={'Perjalanan dari daerah Ke Jakarta'} />
                    <CustomeList Title={'Sarana transportasi dan akomodasi di Jakarta'} />



                </View>
            </ScrollView>
        </View>
    )
}

export default daftarHaji

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
    cardList: {
        flexDirection: 'row',
    },
    list: {
        flex: 14
    },
    listIcon: {
        flex: 1
    }

})
