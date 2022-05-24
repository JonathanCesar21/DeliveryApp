import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/produto";

const ProdutoScreen = (props) => {
  const navigation = useNavigation();
  const data = props.route.params.item.item;
  const images = props.route.params.item.item.product_image
  const [similares, setDataSimilares] = useState();
  var obj = {
    method: "GET",
    headers: {
      authorization: "b2a77a9ad299da2fe289fbddfcd720ccfe5e5f03",
      "Content-Type": "application/json",
    },
  };

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
  }, []);

  return (
    <View style={styles.backgroundColor}>
      <View style={styles.container}>
      <FlatList
              horizontal={true}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              data={images}
              renderItem={ImagesShow}
            />
        {/* <Image style={styles.imageProduto} source={{ uri: data.image }} /> */}
      </View>
      <ScrollView>
      <View>
        <Text style={styles.textName}>{data.product_description[0].name}</Text>
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
        {(image && price) != "" && (
          <View style={styles.cardProduto}>
            <Image style={styles.imageCard} source={{ uri: image }} />
            <Text numberOfLines={2} style={styles.textNameSimilares}>
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
        )}
      </View>
    );
  }

  function ImagesShow(item){
    const {image} = item.item;
    return(
    <View>
      <Image style={styles.imageProduto} source={{ uri: image}} />
    </View>
    )

  }
};

export default ProdutoScreen;
