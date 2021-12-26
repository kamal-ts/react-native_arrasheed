import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import { CustomeList } from '../../componenets'
import { WarnaDark } from '../../utils/constants'
import { style } from '../../utils/Style'

const tentangUmroh = () => {
    return (
        <View style={style.viewWrapper}>
            <ScrollView>

                <View style={styles.card}>
                    {/* <Text style={styles.heading}>Tentang Haji</Text> */}
                    <Text style={{ textAlign: 'justify' }}>Umroh adalah berkunjung ke Ka`bah untuk melakukan serangkaian ibadah dengan syarat-syarat yang telah ditetapkan.Umroh disunahkan bagi muslim yang mampu.Umroh dapat dilakukan kapan saja, kecuali pada hari Arafah yaitu tgl 10 Zulhijah dan hari-hari Tasyrik yaitu tgl 11,12,13 Zulhijah.Melaksanakan Umroh pada bulan Ramadhan sama nilainya dengan melakukan Ibadah Haji (Hadits Muslim)</Text>

                    <Text style={styles.heading}>Rangkaian Kegiatan Ibadah Umroh</Text>
                    <CustomeList Title={"Diawali dengan mandi besar (janabah) sebelum ihram untuk Umroh, mengenakan pakaian ihram. Untuk lelaki 2 kain yang dijadikan sarung dan selendang, sedangkan untuk wanita memakai pakaian apa saja yang menutup aurat tanpa ada hiasannya dan tidak memakai cadar atau sarung tangan. Niat Umroh dalam hati dan mengucapkan Labbaika 'umrotan atau Labbaikallahumma bi`umrotin."} />

                    <CustomeList Title={"Kemudian bertalbiyah dengan dikeraskan suaranya bagi laki-laki dan cukup dengan suara yang didengar orang yang ada di sampingnya bagi wanita, yaitu mengucapkan Labbaikallahumma labbaik labbaika laa syarika laka labbaik. Innal hamda wan ni`mata laka wal mulk laa syarika laka."} />
                    <CustomeList Title={"Sesampai Masjidil Haram menuju ka`bah, lakukan thawaf sebanyak 7 kali putaran. 3 putaran pertama jalan cepat dan sisanya jalan biasa. Thowaf diawali dan diakhiri di hajar aswad dan ka`bah dijadikan berada di sebelah kiri. Setiap putaran menuju hajar aswad sambil menyentuhnya dengan tangan kanan dan menciumnya jika mampu dan mengucapkan Bismillahi wallahu akbar. Jika tidak bisa menyentuh dan menciumya, maka cukup memberi isyarat dan berkata Allahu akbar. Shalat sunnah 2 raka`at di belakang maqam Ibrahim jika bisa atau di tempat lainnya di masjidil haram dengan membaca surat Al-Kafirun pada raka`at pertama dan Al-Ikhlas pada raka`at kedua."} />
                    <CustomeList Title={"Selanjutnya Sa`i dengan naik ke bukit Shofa dan menghadap kiblat sambil mengangkat kedua tangan dan mengucapkan Innash shofa wal marwata min sya`aairillah. Abda`u bima bada`allahu bihi (Aku memulai dengan apa yang Allah memulainya).Kemudian bertakbir 3 kali tanpa memberi isyarat dan mengucapkan Laa ilaha illallahu wahdahu laa syarika lahu. Lahul mulku wa lahul hamdu wahuwa 'alaa kulli syai`in qodiir. Laa ilaha illallahu wahdahu anjaza wa`dahu wa shodaqo 'abdahu wa hazamal ahzaaba wahdahu 3x. Kemudian berdoa sekehendaknya. Sa`i dilakukan sebanyak 7 kali dengan hitungan berangkat satu kali dan kembalinya dihitung satu kali, diawali di bukit Shofa dan diakhiri di bukit Marwah."} />
                    <CustomeList Title={"Mencukur rambut kepala bagi lelaki dan memotongnya sebatas ujung jari bagi wanita. li>Ibadah Umroh selesai"} />

                    <Text style={styles.heading}>Syarat, Rukun & Wajib Umroh</Text>
                    <Text style={{ textAlign: 'justify' }}>Syarat untuk melakukan Umroh adalah sama dengan syarat dalam melakukan ibadah haji. Adapun rukun Umroh adalah :</Text>

                    <CustomeList Title={"Ihram"} />
                    <CustomeList Title={"Tawaf"} />
                    <CustomeList Title={"Sa`i"} />
                    <CustomeList Title={"Mencukur rambut kepala atau memotongnya"} />
                    <CustomeList Title={"Tertib, dilaksanakan secara berurutan"} />

                    <Text style={{ textAlign: 'justify' }}>Sementara itu wajib Umroh hanya satu, yaitu ihram dari mîqât.</Text>

                    <Text style={styles.heading}>Larangan Dalam Umroh</Text>
                    <Text style={{ textAlign: 'justify' }}>Hal-hal yang tidak boleh dilakukan oleh orang yang sudah memakai pakaian ihram dan sudah berniat melakukan ibadah haji/Umroh adalah :</Text>
                    <CustomeList Title={"Melakukan hubungan seksual atau apa pun yang dapat mengarah pada perbuatan hubungan seksual"} />
                    <CustomeList Title={"Melakukan perbuatan tercela dan maksiat"} />
                    <CustomeList Title={"Bertengkar dengan orang lain"} />
                    <CustomeList Title={"Memakai pakaian yang berjahit (bagi laki-laki)"} />
                    <CustomeList Title={"Memakai wangi-wangian"} />
                    <CustomeList Title={"Memakai khuff (kaus kaki atau sepatu yang menutup mata kaki)"} />
                    <CustomeList Title={"Melakukan akad nikah"}/>
                    <CustomeList Title={"Memotong kuku"}/>
                    <CustomeList Title={"Mencukur atau mencabut rambut"}/>
                    <CustomeList Title={"Memakai pakaian yang dicelup yang mempunyai bau harum"}/>
                    <CustomeList Title={"Membunuh binatang buruan"}/>
                    <CustomeList Title={"Memakan daging binatang buruan"}/>

                </View>
            </ScrollView>
        </View>
    )
}

export default tentangUmroh

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 30,
        marginVertical: 30,
    },
    heading: {
        fontSize: 15,
        fontWeight: '600',
        marginTop: 15,
        fontFamily: 'Poppins-Bold'
    },
})
