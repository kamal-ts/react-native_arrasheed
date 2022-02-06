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

import React, {useEffect, useState} from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { WarnaUtama } from '../../utils/constants'

export default function CustomeButton({ text, onPress, color, textColor, borderColor, borderWidth, PaddingV, border }) {

    const [borderRadius, setborderRadius] = useState()
    const [PaddingVertical, setPaddingVertical] = useState()

    useEffect(() => {
        if (PaddingV != undefined) {
            setPaddingVertical(PaddingV);
        }
        else{
            setPaddingVertical(18);
        }

        if (PaddingV != undefined) {
            setborderRadius(border);
        }
        else{
            setborderRadius(5);
        }
    }, []);

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, { paddingVertical: PaddingVertical, backgroundColor: color, borderWidth: borderWidth, borderColor: borderColor, borderRadius: borderRadius,}]}>
                <Text style={[styles.text, { color: textColor}]}>{text}</Text>

            </View>
        </TouchableOpacity>
    )
}

// export default CustomeButton

const styles = StyleSheet.create({
    button: {
        
        
        paddingHorizontal: 10
        
        // backgroundColor: WarnaUtama,

    },
    text: {

        fontWeight: 'bold',
        // textTransform: 'uppercase',
        fontSize: 17,
        textAlign: 'center',

    }
})
