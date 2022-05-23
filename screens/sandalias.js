import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from "../styles/cards"

export default function Sandalias(){

  const [sandalias, setDataSandalias] = useState();
  var obj = {  
    method: 'GET',
    headers: {
      'authorization': '852459f825d3103e7212e35b729882a387b76c6e',
      'Content-Type': 'application/json',
    },
  }

  useEffect(()=> {
  fetch('https://api.irroba.com.br/v1/product/category/3', obj)
      .then(resposta => resposta.json())
      .then( data => {
        const sandalias = {
          data: data.data,
        };
        setDataSandalias(sandalias.data);
        //Entro no primeiro produto, dentro da primeir descrição do protudo 1 e entro no nome
        //console.log(produtos.data[0].product_description[0].name)
      })
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível carregar os dados dos Animes');
      })
    }, [])

  

  return (
    <View style={styles.marginFlat}>
        <Text style={styles.titleBox}>Sandálias</Text>
        <FlatList
        horizontal={true}
        data={sandalias}
        renderItem={SandaliasShow}
        />
    </View>
  )

  function SandaliasShow(item){

    const {price, product_description, image} = item.item

    return(
        <View style={styles.container}>
          {(image != '') &&(
            <View style={styles.cardProduto}>
                <TouchableOpacity>
                <Text style={styles.textPrice}>R${price}</Text>
                <Image style={styles.imageCard} source={{uri: image}}/>
                <Text style={styles.textName}>{product_description[0].name}</Text>
                </TouchableOpacity>
            </View>
            )}
        </View>
    )
}
}
