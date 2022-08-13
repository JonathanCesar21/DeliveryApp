import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 3,
    marginBottom: 3,
  },
  cardProduto: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 25,
    marginRight: 10,
    shadowColor: "#000000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textName: {
    textAlign: "center",
    fontSize: 16,
  },
  textPrice: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 18,
    color: "#636363",
    fontFamily: "UbuntuLight",
  },
  imageCard: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
  },
  titleBox: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 22,
    fontFamily: "UbuntuMedium",
  },
  buttonSacola: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00FFAA",
    padding: 8,
    marginTop: 20,
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
    fontSize: 16,
  },
});

export default styles;
