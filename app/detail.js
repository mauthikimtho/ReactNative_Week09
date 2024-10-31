import React, {useContext} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {Heart} from 'lucide-react';
import {BikeContext} from '../hook/BikeContext';

const BikeDetailsScreen = ({ route }) => {
  const { bike } = route.params;
  const {bikes, setBikes} = useContext(BikeContext);

  const toggleLike = () => {
    const updateBikes = bikes.map(bike => bike.id === bike.id ? {...bike, like:!bike.like} : bike);
    setBikes(updateBikes);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: bike.image }} style={styles.image} />
      <Text style={styles.name}>{bike.name}</Text>
      <Text style={styles.price}>${bike.price}</Text>
      <Text style={styles.discount}>
        {bike.discount > 0 ? `${bike.discount}% OFF` : null}
      </Text>
      <Text style={styles.description}>{bike.description}</Text>
      <View style={{flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Heart/>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('products')}>
        <Text style={styles.text}>Add to card</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: '#888',
  },
  discount: {
    color: 'red',
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  btn: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e94141',
    borderRadius: 30,
    paddingHorizontal: 10,
    width: 250,
    height: 50
  },
  text: {
    fontWeight: 'bold',
    color: 'white'
  }
});

export default BikeDetailsScreen;