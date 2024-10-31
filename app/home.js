import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <View style= {{flex: 1, justifyContent:'center', alignContent:'center', marginTop: 40}}>
      <Text style={styles.subtitle}>A premium online store for sporters and their stylish choices</Text>
    </View>
    <View style={{flex:4, justifyContent:'center'}}>
      <Image source={require('../img/xedap.png')} style={styles.image} />
    </View>
    <View style={{flex: 1, justifyContent:'center', alignContent:'center'}}>
       <Text style={styles.title}>POWER BIKE {"\n"} SHOP</Text>
    </View>
    <View style={{flex: 1, alignItems: 'center', }}>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('products')}>
        <Text style={styles.text}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  btn: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e94141',
    borderRadius: 30,
    paddingHorizontal: 10,
    width: 300,
    height: 50
  },
  text: {
    fontWeight: 'bold',
    color: 'white'
  }
});

export default HomeScreen;