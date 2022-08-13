import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import ProdutoScreen from './screens/produto';
import { useFonts } from 'expo-font';
import LancamentosScreen from './screens/lancamentos';
import Banners from './screens/banners'
import CoturnoScreen from './screens/Coturno';
import SandaliasScreen from './screens/sandalias';
import RasteirinhasScreen from './screens/rasteirinhas';



const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    UbuntuLight: require('./assets/fonts/Ubuntu-Light.ttf'),
    UbuntuRegular: require('./assets/fonts/Ubuntu-Regular.ttf'),
    UbuntuMedium: require('./assets/fonts/Ubuntu-Medium.ttf'),
    UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff'
    },
  };
  
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Banners" component={Banners} />
        <Stack.Screen name="Produto" component={ProdutoScreen} />
        <Stack.Screen name="Coturno" component={CoturnoScreen} />
        <Stack.Screen name="Sandalia" component={SandaliasScreen} />
        <Stack.Screen name="Rasteirinha" component={RasteirinhasScreen} />
        <Stack.Screen name="Todos os produtos" component={LancamentosScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#fff',
  },
});
