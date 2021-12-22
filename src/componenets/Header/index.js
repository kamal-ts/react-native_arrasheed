import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Logo } from '../../assets'
import { WarnaDark } from '../../utils/constants'

const Header = () => {
    return (
        <View style={styles.container}>
            <Logo/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        paddingHorizontal : 25,
        paddingVertical : 10,
        backgroundColor : '#FFFFFF',
        // shadowOffset: { width: 10, height: 10 },
        // shadowColor: WarnaDark,
        // shadowOpacity: 1,
        // elevation: 9,
        
    }
})
