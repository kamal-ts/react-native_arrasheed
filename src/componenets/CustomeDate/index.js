import React from 'react'
import { StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native'
import { Calendar } from '../../assets'
import { WarnaUtama } from '../../utils/constants'

export default function CostumeDate({ placeholder, onPress, TextColor }) {
    return (

        // <View style={styles.body}>
        <TouchableOpacity style={styles.body}  onPress={onPress}>

            <View style={styles.input}>

                <Text style={{ fontSize: 16, color: TextColor }}>{placeholder}</Text>
            </View>
            <View style={styles.icon}>

                <Calendar />
            </View>
        </TouchableOpacity>
        // </View>
    )
}

// export default CostumeDate

const styles = StyleSheet.create({
    body: {
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',

        alignItems: 'center',
        height: 56,

    },
    input: {
        flex: 6,
        padding: 10,



    },
    icon: {
        // marginRight: '0%',
        // marginLeft: '55%',
        flex: 1

    }
})