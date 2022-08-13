import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/produto";
import axios from "axios";

const ProdutoScreen = (props) => {
  const navigation = useNavigation();
  const data = props.route.params.item.item;
  const images = props.route.params.item.item.product_image;
  const [similares, setDataSimilares] = useState();

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
    fetch(
      "https://api.irroba.com.br/v1/product" +
        "/category/" +
        data.product_to_category[1].category_id,
      obj
    )
      .then((resposta) => resposta.json())
      .then((data) => {
        const similares = {
          data: data.data,
        };
        setDataSimilares(similares.data);
        //Entro no primeiro produto, dentro da primeir descrição do protudo 1 e entro no nome
        //console.log(produtos.data[0].product_description[0].name)
      })
      .catch(() => {
        Alert.alert("Erro", "Não foi possível carregar os dados dos Animes");
      });
  }, [tokenAuth]);

  return (
    <View style={styles.backgroundColor}>
      <ScrollView>
        <View style={styles.container}>
          {images[0]?.image ? (
            <FlatList
              horizontal={true}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              data={images}
              renderItem={ImagesShow}
            />
          ) : (
            <Image style={styles.imageProduto} source={{ uri: 'https://storage.googleapis.com/facily-images/5862502c-produto-indisponivel-0-1630695798.jpg'}} />
          )}

          {/* <Image style={styles.imageProduto} source={{ uri: data.image }} /> */}
        </View>
        <View>
          <Text style={styles.textName}>
            {data.product_description[0].name}
          </Text>
          <Text style={styles.textEntregue}>
            Vendido e entregue por Ao Barulho
          </Text>
        </View>
        <View style={styles.tamanhos}>
          <TouchableOpacity>
            <Text style={styles.circleTam}>34</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.circleTam}>35</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.circleTam}>36</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.circleTam}>37</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.circleTam}>38</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.circleTam}>39</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Descrição</Text>
          <Text></Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonSacola}
            onPress={() =>
              Linking.openURL(
                "https://www.aobarulhocalcados.com.br/" + data.url
              )
            }
          >
            <Text>Comprar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.titleBox}>Produtos Similares</Text>
          <FlatList
            horizontal={true}
            data={similares}
            renderItem={SimilaresShow}
          />
        </View>
      </ScrollView>
    </View>
  );


  function SimilaresShow(item) {
    const { price, product_description, image } = item.item;

    return (
      <View style={styles.container}>
        {image != "" && (
          <View style={styles.cardProduto}>
            <Image style={styles.imageCard} source={{ uri: image }} />
            <Text numberOfLines={2} style={styles.textNameSimilares}>
              {product_description[0].name}
            </Text>
            <Text style={styles.textPrice}>R${price}</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Produto", {
                  item: item,
                });
              }}
              style={styles.buttonSacola}
            >
              <Text style={styles.textSacola}>Mais informações</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }

  function ImagesShow(item) {
    const { image } = item.item;
    return (
      <View>
        <Image style={styles.imageProduto} source={{ uri: image }} />
      </View>
    );
  }
};

export default ProdutoScreen;
