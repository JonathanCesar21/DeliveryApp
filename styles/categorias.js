import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    imageCategoria:{
        width: width,
        height: 200,
        justifyContent: "center",
        
    },
    cardCategoria:{
        margin: 5,
        borderStyle: "solid",
        borderColor: '#000'
    },
    titleCategoria:{
        textAlign: "center",
        fontSize: 28,
        fontFamily: "UbuntuBold",
        color: '#000',
    },

});

export default styles;