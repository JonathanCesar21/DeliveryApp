import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, {useState, useEffect} from 'react'


export default function Aventura(){

  const [animes, setDataAnimes] = useState();

  useEffect(()=> {
    fetch('https://api.aniapi.com/v1/anime?genres=Adventure&nsfw=false&with_episodes=false')
    .then(resposta => resposta.json())
      .then( data => {
        const anime = {
          data: data.data
        };
        setDataAnimes(anime.data.documents);
      })
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível carregar os dados dos Animes');
      });
  }, [])
  

  return (
    <View>
        <Text style={styles.titleBox}>Aventura</Text>
        <FlatList
        horizontal={true}
        data={animes}
        renderItem={AnimeShow}
        keyExtractor={(animes) => animes}
        />
    </View>
  )

  function AnimeShow(item){

    const {titles, descriptions} = item.item
    const {cover_image} = item.item

    return(
        <View style={styles.container}>
            <View style={styles.card}>
            <Image style={styles.imageCard} source={{uri: cover_image}}/>
            </View>
        </View>
    )
}
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
card:{
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
},
titleText:{
    fontSize: 10,
    marginBottom: 5,
},
imageCard:{
    width: 120,
    height: 135,
    borderRadius: 10,
},
titleBox:{
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
}
})