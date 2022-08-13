import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/cards";
import Banners from "./banners";

export default function LancamentosScreen() {
  const navigation = useNavigation();
  const [produtos, setDataProdutos] = useState();
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
    fetch("https://api.irroba.com.br/v1/product", obj)
      .then((resposta) => resposta.json())
      .then((data) => {
        const produtos = {
          data: data.data,
        };
        setDataProdutos(produtos.data);
        //Entro no primeiro produto, dentro da primeir descrição do protudo 1 e entro no nome
        //console.log(produtos.data[0].product_description[0].name)
      })
      .catch(() => {
        Alert.alert("Erro", "Não foi possível carregar os dados dos Produtos");
      });
  }, [tokenAuth]);

  return (
    <View>
      <Banners  />
      <Text style={styles.titleBox}>Lançamentos</Text>
      <FlatList
        numColumns={2}
        horizontal={false}
        data={produtos}
        renderItem={ProdutosShow}
      />
    </View>
  );

  function ProdutosShow(item) {
    
    const { price, product_description, image, status } = item.item;
    if (image != ""){
      return (
        <View style={styles.container}>
          <View style={styles.cardProduto}>
            <Image style={styles.imageCard} source={{ uri: image }} />
            <Text numberOfLines={2} style={styles.textName}>
              {product_description[0].name}
            </Text>
            <Text style={styles.textPrice}>R${price}</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Produto", {
                  item: item,
                })
              }
              style={styles.buttonSacola}
            >
              <Text style={styles.textSacola}>Mais informações</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    else if (image == ""){
      return (
        <View style={styles.container}>
        <View style={styles.cardProduto}>
          <Image style={styles.imageCard} source={{ uri: 'https://storage.googleapis.com/facily-images/5862502c-produto-indisponivel-0-1630695798.jpg' }} />
          <Text numberOfLines={2} style={styles.textName}>
            {product_description[0].name}
          </Text>
          <Text style={styles.textPrice}>R${price}</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Produto", {
                item: item,
              })
            }
            style={styles.buttonSacola}
          >
            <Text style={styles.textSacola}>Mais informações</Text>
          </TouchableOpacity>
        </View>
      </View>
      );
    }
  }
}
