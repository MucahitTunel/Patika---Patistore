import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Header, SearchBar} from './src/components';

const data = [
  {
    id: 0,
    title: 'Xiaomi Mi True Wireless Earbuds',
    imgURL:
      'https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg',
    price: '₺134,77',
    inStock: true,
  },
  {
    id: 1,
    title: 'General Mobile GM 20',
    imgURL:
      'https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg',
    price: '₺1.810,21',
    inStock: true,
  },
  {
    id: 2,
    title: 'Philips 58PUS8505/62 The One',
    imgURL:
      'https://m.media-amazon.com/images/I/71zLCzJcXaL._AC._SR360,460.jpg',
    price: '₺6.992,25',
    inStock: false,
  },
  {
    id: 3,
    title: 'LG 49UM7100PLB Ultra HD 4K',
    imgURL:
      'https://m.media-amazon.com/images/I/71gAldY8eGL._AC._SR360,460.jpg',
    price: '₺4.614,38',
    inStock: true,
  },
  {
    id: 4,
    title: 'Samsung Galaxy M31 SM-M315F',
    imgURL:
      'https://m.media-amazon.com/images/I/71mUIp9oCXL._AC._SR360,460.jpg',
    price: '₺2.995,80',
    inStock: true,
  },
  {
    id: 5,
    title: 'Apple AirPods Series 2',
    imgURL:
      'https://m.media-amazon.com/images/I/51XanmiXw0L._AC._SR360,460.jpg',
    price: '₺1.299,00',
    inStock: true,
  },
  {
    id: 6,
    title: 'Lenovo Tab M10 Plus',
    imgURL:
      'https://m.media-amazon.com/images/I/81JR-A35D0L._AC._SR360,460.jpg',
    price: '₺2.496,50',
    inStock: false,
  },
  {
    id: 7,
    title: 'Xiaomi Redmi 20000 Mah',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/41vVdTukkgL._AC_SX522_.jpg',
    price: '₺134,70',
    inStock: false,
  },
  {
    id: 8,
    title: 'Xiaomi Mijia Smart Home 360',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/31G-rIrW9zL._AC_UL320_SR226,320_.jpg',
    price: '₺269,73',
    inStock: true,
  },
  {
    id: 9,
    title: 'Xiaomi Mi Box S 4K Ultra HD',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/31sNKUGwNUL._AC_.jpg',
    price: '₺478,53',
    inStock: true,
  },
  {
    id: 10,
    title: 'Haylou Solar LS-5 Smartwatch',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/51kfZ4W9YSL._AC_SX522_.jpg',
    price: '₺296,00',
    inStock: true,
  },
];

const {width, height} = Dimensions.get('window');

const App = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.productContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: item.imgURL}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.productTitleText}>{item.title} </Text>
          <Text style={styles.productDescriptionText}>{item.price} </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'PATIKASTORE'} />
      <SearchBar />
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  productContainer: {
    flex: 1,
    backgroundColor: '#e1e6ed',
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 10,
    width: '92%',
    borderRadius: 8,
    backgroundColor: 'white',
    marginLeft: '4%',
    marginRight: '4%',
  },
  productTitleText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
  productDescriptionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 5,
  },
  image: {
    width: '100%',
    height: Math.round((width / 2) * 0.9),
    borderRadius: 8,
  },
  descriptionContainer: {
    marginTop: 5,
    marginBottom: 5,
    width: '92%',
  },
});

export default App;
