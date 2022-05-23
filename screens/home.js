import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Lancamentos from "./lancamentos";
import Banners from "./banners";
import Sandalias from "./sandalias";

function HomeScreen() {
  return (
    <View style={styles.backgroundColor}>
          <View>
            <Lancamentos />
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
