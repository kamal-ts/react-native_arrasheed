import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { WarnaSekunder, WarnaUtama } from '../../utils/constants'
import {
    IconAbout, IconAbout1, IconAkun, IconAkun1, IconHome, IconHome1, IconPembayaran, IconPembayaran1,
    IconDokumen,
    IconDokumen1
} from '../../assets'

const TabItem = ({ label, isFocused, onPress, onLongPress }) => {


    const Icon = () => {
        if (label == "Home") {
            return isFocused ? <IconHome /> : <IconHome1 />;
        }
        if (label == "Home2") {
            return isFocused ? <IconHome /> : <IconHome1 />;
        }
        if (label == "Akun") {
            return isFocused ? <IconAkun /> : <IconAkun1 />;
        }
        if (label == "About") {
            return isFocused ? <IconAbout /> : <IconAbout1 />;
        }
        if (label == "Pembayaran") {
            return isFocused ? <IconPembayaran /> : <IconPembayaran1 />;
        }
        if (label == "DokumenPersyaratan") {
            return isFocused ? <IconDokumen /> : <IconDokumen1 />;
        }

    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={isFocused ? styles.containerFocus : styles.container}
        >
            <Icon />
            {/* {isFocused && <Text style={styles.text}>
                {label.toUpperCase()}
            </Text>} */}
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        padding: 5,
    },
    containerFocus: {
        alignContent: 'center',
        padding: 10,
        backgroundColor: WarnaSekunder,
        flexDirection: 'row',
        borderRadius: 10,
    },
    text: {
        color: WarnaUtama,
        // fontSize: 18,
        marginLeft: 8,
        fontFamily: 'Poppins-Bold'
    }
})
