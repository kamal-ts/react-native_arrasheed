
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function CustomeList({ Title, FontWeight }) {
    return (

        <View style={styles.cardList}>
            <View style={styles.listIcon}>
                <Text style={{fontWeight: FontWeight}}>-</Text>
            </View>
            <View style={styles.list}>
                <Text style={{textAlign:'justify', fontWeight: FontWeight}}>{Title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
