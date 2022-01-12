import { StyleSheet } from 'react-native'
import { WarnaDark, WarnaUtama } from './constants'

export const style = StyleSheet.create({

    viewWrapper: {
        flex: 1,
        backgroundColor: '#F3F3F3'

    },

    container:{
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        marginVertical: 25,
    },

    viewForm: {
        flex: 2,
        padding: 30
    },

    viewData: {
        flex: 4,
        backgroundColor: ''
    },

    textInput: {
        marginVertical: 10,
        padding: 10,
        fontSize: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        marginBottom: 10,
        backgroundColor: '#dedede'
    },

    textInputL: {
        // marginVertical:10,
        padding: 10,
        height: 56,
        fontSize: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        // marginBottom:20,
        // backgroundColor: '#FFFFFF'
    },
    
    textArea: {
        // marginVertical:10,
        borderWidth: 1,
        // marginHorizontal: 10,
        borderRadius: 5,
        
        padding: 10,
        
        fontSize: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        // marginBottom:20,
        backgroundColor: '#FFFFFF'
    },
    
    viewList: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: WarnaDark,
        // borderWidth:1,
        // borderColor: WarnaUtama,
        marginBottom: 16,
        marginHorizontal: 25,
        borderRadius: 15,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: WarnaDark,
        shadowOpacity: 1,
        elevation: 9,
    },

    textLispaket: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 1,
        color: WarnaUtama,
        fontWeight: "bold",
        // fontFamily: 'Poppins-Bold'
        // textDecorationLine: 'underline',

        // fontFamily : 'Poppins',
    },

    cardImage: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',

    },
    shadowProp: {
        shadowOffset: { width: -2, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 8,
    },


    // ///
    // image: {
    //     flex: 1,
    //     justifyContent: "center"
    //   },
    //   text: {
    //     color: "white",
    //     fontSize: 42,
    //     lineHeight: 84,
    //     fontWeight: "bold",
    //     textAlign: "center",
    //     backgroundColor: "#000000c0"
    //   }


    /////////
    // heading: {
    //     fontSize: 18,
    //     fontWeight: '600',
    //     marginBottom: 13,
    //   },
    //   card: {
    //     backgroundColor: 'white',
    //     borderRadius: 8,
    //     paddingVertical: 45,
    //     paddingHorizontal: 25,
    //     width: '100%',
    //     marginVertical: 10,
    //   },
    //   shadowProp: {
    //     shadowColor: '#171717',
    //     shadowOffset: {width: -2, height: 4},
    //     shadowOpacity: 0.2,
    //     shadowRadius: 3,
    //   },

})