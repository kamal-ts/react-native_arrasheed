import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconAkun, Logo, Profile } from '../../assets'
import { WarnaDark } from '../../utils/constants'
import { style } from '../../utils/Style'

const Header = ({onPress, UserN}) => {

    

    return (
        <View style={styles.container}>

            <Logo />
            <TouchableOpacity onPress={onPress} style={styles.profile}>
                <Text style={styles.username}>{UserN}</Text>
                <Profile/>
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-between',
        // shadowOffset: { width: 10, height: 10 },
        // shadowColor: WarnaDark,
        // shadowOpacity: 1,
        // elevation: 9,

    },
    profile:{
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    username:{
        fontSize: 15,
        marginHorizontal: 10,

    }
})
