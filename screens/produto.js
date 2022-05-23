import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from "../styles/produto"

const ProdutoScreen = (props) => {
    const navigation = useNavigation()
    const data = props.route.params.item.item
    const [similares, setDataSimilares] = useState();
  var obj = {  
    method: 'GET',
    headers: {
      'authorization': '02b88cc602e4a0f0d67cc03e014396f94a7fb8d6',
      'Content-Type': 'application/json',
    },
  }

  useEffect(()=> {
  fetch('https://api.irroba.com.br/v1/product' + '/category/' + data.product_to_category[1].category_id, obj)
      .then(resposta => resposta.json())
      .then( data => {
        const similares = {
          data: data.data,
        };
        setDataSimilares(similares.data);
        //Entro no primeiro produto, dentro da primeir descrição do protudo 1 e entro no nome
        //console.log(produtos.data[0].product_description[0].name)
      })
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível carregar os dados dos Animes');
      })
    }, [])

  return (
    <View style={styles.backgroundColor}>
      <View style={styles.container}>
        <Image style={styles.imageProduto} source={{uri: data.image}}/>
        </View>
        <View>
        <Text style={styles.textName}>{data.product_description[0].name}</Text>
        <Text style={styles.textEntregue}>Vendido e entregue por Ao Barulho</Text>
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
    </View>
  )

  function SimilaresShow(item){

    const {price, product_description, image} = item.item

    return(
      
        <View style={styles.container}>
          {(image && price) != '' &&(
            <View style={styles.cardProduto}>
                <Image style={styles.imageCard} source={{uri: image}}/>
                <Text numberOfLines={2} style={styles.textNameSimilares}>{product_description[0].name}</Text>
                <Text style={styles.textPrice}>R${price}</Text>
                <TouchableOpacity
                onPress={() => 
                  navigation.navigate('Produto', {
                    item:item,
                  })
                }
                style={styles.buttonSacola}
                >
                <Text style={styles.textSacola}>Mais informações</Text></TouchableOpacity>
            </View>
            )}
        </View>
    )
}
}

export default ProdutoScreen
