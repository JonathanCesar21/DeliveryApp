import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import styles from "../styles/categorias";
import Lancamentos from "./lancamentos";
import CoturnoScreen from "./Coturno";


var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function Categorias() {
  const navigation = useNavigation();
  const [category, setDataCategory] = useState();
  const [auth, setDataAuth] = useState([]);
  
  var objAuth = {  
    method: 'POST',
    headers: {
      'username': 'grupoaob_appmobil' ,
      'password': '133d2542c40c187763beff077347c056583d3e46',
      'Content-Type': 'application/json',
    },
  }

  useEffect( ()=> {

    const fetchData = async () => {
      const datas = await fetch('https://api.irroba.com.br/v1/getToken?username=grupoaob_appmobil&password=2VSjTZo81AiaKN48jYIK72Jicd0LVcvdOjBHN0I', objAuth)
      const json = await datas.json();
      setDataAuth(json.data);
    }
    fetchData();
      }, [])
       console.log(auth.authorization)

var obj = {  
  method: 'GET',
  headers: {
    'authorization': '' + auth.authorization,
    'Content-Type': 'application/json',
  },
}

const tokenAuth = auth.authorization

  useEffect(() => {
    fetch("https://api.irroba.com.br/v1/category", obj)
      .then((resposta) => resposta.json())
      .then((data) => {
        const category = {
          data: data.data,
        };
        setDataCategory(category.data);
        //Entro no primeiro produto, dentro da primeir descrição do protudo 1 e entro no nome
        console.log(category.category_description[0]);
      })
      .catch(() => {
        Alert.alert("Erro", "Não foi possível carregar os dados dos Animes");
      });
  }, [tokenAuth]);

  return (
    <View>
      <FlatList
        numColumns={1}
        horizontal={false}
        data={category}
        renderItem={CategoryShow}
      />
    </View>
  );

  function CategoryShow(item) {
    const { name, category_description, status, image, } = item.item;
    if (status != 0) {
      return (
        <View style={styles.container}>
          <View style={styles.cardCategoria}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('' + category_description[0].name);
                
              }}
            >
              <ImageBackground
                style={styles.imageCategoria}
                imageStyle={{ opacity: 0.7 }}
                source={{
                  uri:
                    "https://img.irroba.com.br/fit-in/849x170/filters:format(webp):quality(95)/grupoaob" +
                    image,
                }}
              >
                <Text style={styles.titleCategoria}>
                  {category_description[0].name}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}
