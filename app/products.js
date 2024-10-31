import React, { useState, useContext} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Heart, DollarSign} from 'lucide-react'
import {BikeContext} from '../hook/BikeContext';


const BikeListScreen = () => {
  const {bikes} = useContext(BikeContext);
  const [selectedType, setSelectedType] = useState('All');
  const navigation = useNavigation();

  const filteredBikes = selectedType === 'All' ? bikes : bikes.filter(bike => bike.type === selectedType);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>The World's Best Bike</Text>
      <View style={styles.filter}>
        <TouchableOpacity style={styles.btn} title="All" onPress={() => setSelectedType('All')}><Text>All</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} title="Roadbike" onPress={() => setSelectedType('Roadbike')}><Text>Roadbike</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} title="Mountain" onPress={() => setSelectedType('Mountain')}><Text>Mountain</Text></TouchableOpacity>
      </View>
      <FlatList
        data={filteredBikes}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('detail', { bike: item })}>
            <View style={styles.bikeCard}>
              <View>
                <Heart></Heart>
                <Image source={item.image} style={styles.bikeImage}/>
              </View>
              <View>
                <Text>{item.name}</Text>
              </View>
              <View>
                <DollarSign></DollarSign>
                <Text>${item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#e94141'
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    
  },
  bikeCard: {
    margin: 20,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fef5ec',
    borderRadius: 10,
    
  },
  bikeImage: {
    width: 100,
    height: 80,
    marginBottom: 10,

  },
  btn: {
    borderRadius: 5,
    borderColor: '#fbd9d9',
    borderWidth: 1,
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default BikeListScreen;