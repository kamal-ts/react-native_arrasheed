// import React from 'react'
// import { Text, TouchableOpacity, View } from 'react-native'


// export default function CustomeButton({text, onPress}){
//     return(
//         <TouchableOpacity onPress={onPress}>
//             <View style={styles.button}>
//                 <Text style={styles.text}>{text}</Text>

//             </View>
//         </TouchableOpacity>
//     )
// }

// const styles = StyleSheet.create({
//     button : {

//     }
// })

import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { WarnaUtama } from '../../utils/constants'

export default function CustomeButton({ text, onPress, color, textColor }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, { backgroundColor: color}]}>
                <Text style={[styles.text, { color: textColor}]}>{text}</Text>

            </View>
        </TouchableOpacity>
    )
}

// export default CustomeButton

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        paddingVertical: 18,
        paddingHorizontal: 10,
        // backgroundColor: WarnaUtama,


    },
    text: {

        fontWeight: 'bold',
        // textTransform: 'uppercase',
        fontSize: 17,
        textAlign: 'center',

    }
})
