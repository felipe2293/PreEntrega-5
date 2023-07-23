import { StyleSheet } from "react-native"
import { COLORS, FONTS } from "../../themes"
export const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        widht:'100%',
        height:200,
    },
    containerImage:{
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    textDescription:{
        textAlign:'left',
        fontFamily:FONTS.light,
        fontSize:17,
    },
    content:{
        flex:1,
        padding:20,
        gap:7,
    },
    textContent:{
        fontFamily:FONTS.bold,
        fontSize:15,
    },
    priceText:{
        fontFamily:FONTS.bold,
        fontSize:20,
    },
    stockText:{
        fontFamily:FONTS.bold,
        fontSize:12,
    },
    containerButton:{
        marginVertical:10,
    },
    addToCartButton:{
        widht:'100%',
        backgroundColor:COLORS.primary,
        padding:15,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',

    },
    addToCartText:{
        fontFamily:FONTS.medium,
        fontSize:16,
        color:COLORS.wihte,

    },
})