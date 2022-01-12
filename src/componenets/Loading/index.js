import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { WarnaUtama } from '../../utils/constants'
import { Dimensions } from 'react-native'

const Loading = ({ Animati }) => {
    let deviceWidth = Dimensions.get('window').width
    return (
        // <View style={{
        //     flex: 1,
        //     flexDirection: 'column'
        // }}>



        <View style={{

            // position: 'absolute',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center'
            // marginVertical: deviceWidth*0.5,
            // marginHorizontal: deviceWidth*0.45,
            // backgroundColor: WarnaUtama



        }}>

            <ActivityIndicator
                animating={Animati}
                color={WarnaUtama}
                size={'large'}

            />
        </View>
        // </View>
    )
}

export default Loading

const styles = StyleSheet.create({})
