import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Modal } from 'react-native'
import { ChevronDown } from '../../assets'
import { WarnaSekunder } from '../../utils/constants'

const { widht } = Dimensions.get('window');

const Select = ({ options, onChangeSelect, text }) => {


    const [modalVisible, setModalVisible] = useState(false)
    const [txt, setTxt] = useState(text);

    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <View style={styles.text}>

                    <Text style={styles.txt}>{txt}</Text>
                </View>
                <View style={styles.icon}>
                    <ChevronDown />
                </View>
            </TouchableOpacity>
            <Modal animationType='slide' visible={modalVisible} onRequestClose={() => setModalVisible(false)}>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        flex: 1,
        backgroundColor: WarnaSekunder,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        // marginBottom:20,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',

        paddingHorizontal: 10,

    },
    txt: {
        fontSize: 15,

    },
    text: {
        flex: 14,
    },
    icon: {
        flex: 1
    }
})

export default Select
