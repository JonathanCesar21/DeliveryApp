import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import ProdutoScreen from './screens/produto';
import { useFonts } from 'expo-font';

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
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Produto" component={ProdutoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
