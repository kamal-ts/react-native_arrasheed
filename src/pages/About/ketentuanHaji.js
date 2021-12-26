import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import { CustomeList } from '../../componenets'
import { WarnaDark } from '../../utils/constants'
import { style } from '../../utils/Style'

const ketentuanHaji = () => {
    return (
        <View style={style.viewWrapper}>
            <ScrollView>

                <View style={styles.card}>
                    {/* <Text style={styles.heading}>Tentang Haji</Text> */}
                        <CustomeList FontWeight={'bold'} Title={'Penyelenggaraan perjalanan ibadah haji yang diselenggarakan adalah perjalanan ibadah haji khusus atau plus yang mengikuti ketentuan kuota dari Kementerian Agama RI.'} />
                        <CustomeList FontWeight={'bold'} Title={'Calon Jemaah Haji dapat diketahui perkiraan tahun keberangkatan setelah mendapat nomor porsi.'} />
                        <CustomeList FontWeight={'bold'} Title={'Calon Jemaah Haji dapat mengambil nomor porsi keberangkatan jika telah melunasi sebagian dari biaya minimal atau melunasi sebagian besar biaya perjalanan haji plus yang telah ditentukan oleh penyelenggara.'} />
                        <CustomeList FontWeight={'bold'} Title={'Penetapan keberangkatan calon jemaah haji plus di tentukan oleh Kementerian Agama.'} />
                        <CustomeList FontWeight={'bold'} Title={'Calon Jemaah Haji yang telah mendapat nomor porsi dapat melakukan cek nomor porsi keberangkatan haji khusus / plus melalui www.kemenag.go.id'} />
                </View>
            </ScrollView>
        </View>
    )
}

export default ketentuanHaji

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 30,
        marginVertical: 30,
    },

})
