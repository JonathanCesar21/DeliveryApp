import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Banners(){

  const [banners, setDataBanners] = useState();
  const [apiData, setApiData] = useState([]);
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
        Alert.alert('Erro', 'Não foi possível carregar os dados');
      })

    }, [tokenAuth])

  

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
    width: width - 20,
    height: 200,
    borderRadius: 10,
},
titleBox:{
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
}
})