
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { WarnaDark } from '../../utils/constants';

export default function CustomeList({ Title, FontWeight, Color, Size }) {

    const [getColor, setgetColor] = useState(WarnaDark);
    const [getSize, setgetSize] = useState(14);

    useEffect(() => {
        if (Color != undefined) {
            setgetColor(Color);
        }
        if (Size != undefined) {
            setgetSize(Size);
        }
        // else{
        //     setgetColor(WarnaDark);
        // }

    }, []);

    return (

        <View style={styles.cardList}>
            <View style={styles.listIcon}>
                <Text style={{fontWeight: FontWeight, color: getColor, fontSize: getSize}}>-</Text>
            </View>
            <View style={styles.list}>
                <Text style={{textAlign:'justify', fontWeight: FontWeight, color: getColor, fontSize: getSize}}>{Title}</Text>
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
