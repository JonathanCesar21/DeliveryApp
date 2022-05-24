import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'

export default function Banners(){

  const [banners, setDataBanners] = useState();
  var obj = {  
    method: 'GET',
    headers: {
      'authorization': 'b2a77a9ad299da2fe289fbddfcd720ccfe5e5f03',
      'Content-Type': 'application/json',
    },
  }

  useEffect(()=> {
  fetch('https://api.irroba.com.br/v1/banner', obj)
      .then(resposta => resposta.json())
      .then( data => {
        const banners = {
          data: data.data,
        };
        setDataBanners(banners.data);
      })
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível carregar os dados dos Animes');
      })
    }, [])

  

  return (
    <View>
        <FlatList
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={banners}
        renderItem={BannersShow}
        />
    </View>
  )

  function BannersShow(item){

    const {link_image} = item.item

    return(
        <View style={styles.container}>
            <View style={styles.marginBanner}>
            <TouchableOpacity>
            <Image style={styles.imageBanner} source={{uri: link_image}}/>
            </TouchableOpacity>
            </View>
        </View>
    )
}
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
marginBanner:{
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 10,
},
titleText:{
    fontSize: 10,
    marginBottom: 5,
},
imageBanner:{
    width: 390,
    height: 200,
    borderRadius: 10,
},
titleBox:{
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
}
})