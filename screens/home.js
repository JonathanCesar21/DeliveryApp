import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Banners from "./banners";
import Sandalias from "./sandalias";
import Categorias from "./categorias";
import LancamentosScreen from "./lancamentos";


function HomeScreen() {
  return (
    <View style={styles.backgroundColor}>
          <View>
            <Categorias/>
          </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: "#fff",
  },
});
