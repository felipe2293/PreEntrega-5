import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 160,
        marginBottom:5,
        backgroundColor: COLORS.wihte,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        padding:10,
        marginHorizontal:20,
        marginTop:15,
        justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius:10,
    },
    headerContainer: {

    },
    imageContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        maxWidth:130,
        backgroundColor:COLORS.primary,
        borderRadius:10,
    },
    image:{
        width:100,
        height:100,
    },
    detailContainer: {
        justifyContent:'space-between',
        maxWidth:190,
        gap:5,
    },
    name: {
        fontSize:13,
        fontFamily:FONTS.regular,

    },
    price: {
        fontSize:13,
        fontFamily:FONTS.bold,

    },
    quantity: {
        fontSize:12,
        fontFamily:FONTS.regular,

    },
    stock: {
        fontSize:12,
        fontFamily:FONTS.regular,

    },
    increaseButton: {
        paddingVertical:10,
        paddingHorizontal:20,
        backgroundColor:COLORS.primary,
        borderRadius:20,

    },
    increaseButtonText: {
        color:COLORS.wihte,
        fontFamily:FONTS.bold,
    },
    decreaseButton: {
        paddingVertical:10,
        paddingHorizontal:20,
        backgroundColor:COLORS.secondary,
        borderRadius:20,

    },
    decreaseButtonText: {
        color:COLORS.wihte,
        fontFamily:FONTS.bold,
    },

    actionContainer:{
        flexDirection:'row',
        gap:20,
    },
    deleteButton:{
        paddingVertical:10,
        paddingHorizontal:20,
        backgroundColor:COLORS.secondary,
        borderRadius:20,
    }

})