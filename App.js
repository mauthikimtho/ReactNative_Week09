import { Text, SafeAreaView, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './app/home';
import Product from './app/products';
import Detail from './app/detail';
import BikeProvider from './hook/BikeContext';

const Stack = createStackNavigator();
export default function App() {
  return (
    <BikeProvider>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions= {{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="products" component={Product}/>
        <Stack.Screen name="detail" component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
    </BikeProvider>
  );
}

