import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from "../styles/cards"
import Banners from './banners';



export default function Lancamentos(){
  
  const navigation = useNavigation()
  const [produtos, setDataProdutos] = useState();
  var obj = {  
    method: 'GET',
    headers: {
      'authorization': '02b88cc602e4a0f0d67cc03e014396f94a7fb8d6',
      'Content-Type': 'application/json',
    },
  }

  useEffect(()=> {
  fetch('https://api.irroba.com.br/v1/product', obj)
      .then(resposta => resposta.json())
      .then( data => {
        const produtos = {
          data: data.data,
        };
        setDataProdutos(produtos.data);
        //Entro no primeiro produto, dentro da primeir descrição do protudo 1 e entro no nome
        //console.log(produtos.data[0].product_description[0].name)
      })
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível carregar os dados dos Animes');
      })
    }, [])

  

  return (
    <View>
        <Banners/>
        <Text style={styles.titleBox}>Lançamentos</Text>
        <FlatList
        numColumns={2}
        horizontal={false}
        data={produtos}
        renderItem={ProdutosShow}
        />
    </View>
  )

  function ProdutosShow(item){

    const {price, product_description, image} = item.item

    return(
      
        <View style={styles.container}>
          {(image && price) != '' &&(
            <View style={styles.cardProduto}>
                <Image style={styles.imageCard} source={{uri: image}}/>
                <Text numberOfLines={2} style={styles.textName}>{product_description[0].name}</Text>
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

