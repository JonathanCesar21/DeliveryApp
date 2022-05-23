import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundColor:{
        backgroundColor: '#fff',
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    imageProduto: {
        width: 250,
        height: 300,
        resizeMode: "contain",
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