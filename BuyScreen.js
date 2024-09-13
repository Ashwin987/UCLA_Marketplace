import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const BuyScreen = () => {
  // Sample data for items to buy
  const [itemsForSale, setItemsForSale] = useState([
    { id: '1', title: 'Laptop', price: '$500' },
    { id: '2', title: 'Textbook', price: '$50' },
    { id: '3', title: 'Bicycle', price: '$150' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items for Sale</Text>
      <FlatList
        data={itemsForSale}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#1E90FF',
  },
});

export default BuyScreen;
