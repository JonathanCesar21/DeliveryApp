import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    backgroundColor:{
        backgroundColor: '#fff',
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    imageProduto: {
        width: width,
        height: 300,
        resizeMode: "contain",
        marginBottom: 10,
      },
    textName:{
        textAlign: "left",
        fontSize: 18,
        fontFamily: 'UbuntuBold'
    },
    textEntregue:{
        textAlign: "left",
        fontSize: 12,
        fontFamily: 'UbuntuLight'
    },
    tamanhos:{
        flexDirection: "row",
    },
    circleTam:{
        backgroundColor: '#636363',
        borderRadius: 50,
        margin: 5,
        width: 45,
        textAlign: "center",
    },
    imageCard: {
        width: 100,
        height: 125,
        resizeMode: "contain",
      },
      textNameSimilares:{
        textAlign: "center",
        fontSize: 12,
        fontFamily: 'UbuntuRegular'
    },
    cardProduto: {
        width: 135,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 25,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
      },
      buttonSacola: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00FFAA",
        padding: 5,
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      textSacola: {
        color: "#fff",
        fontFamily: "UbuntuBold",
        fontSize: 12,
      },


});

export default styles;