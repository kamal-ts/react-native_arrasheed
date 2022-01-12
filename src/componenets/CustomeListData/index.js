import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WarnaDark } from '../../utils/constants'

const CustomeListData = ({ head, title, FontWeight, WidhtHead, FontSize, Color }) => {
    return (
        <View style={styles.cardList}>

            <View style={{

                flex: WidhtHead

            }}>
                <Text style={[styles.text, {
                    fontWeight: FontWeight, 
                    fontSize: FontSize,
                    color: Color,
                }]}>{head}</Text>
            </View>
            <View style={styles.listIcon}>
                <Text style={[styles.text, { fontWeight: FontWeight, fontSize: FontSize, color: Color, }]}>:</Text>
            </View>
            <View style={styles.list}>
                <Text style={[styles.text, { textAlign: 'justify', fontWeight: FontWeight, fontSize: FontSize, color: Color, }]}>{title}</Text>
            </View>
        </View>
    )
}

export default CustomeListData

const styles = StyleSheet.create({
    cardList: {
        flexDirection: 'row',
    },
    listHead: {
        flex: 8
    },
    list: {
        flex: 10
    },
    listIcon: {
        flex: 1
    },
    text: {

        fontFamily: 'Poppins-Extra-light',
        
        // fontWeight: 'bold'

    },
})

