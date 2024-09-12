import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListingsContext } from './ListingsContext'; // Ensure ListingsContext exists

const OtherScreen = () => {
  const { listings } = useContext(ListingsContext);
  const otherListings = listings.filter(listing => listing.category === 'Other');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Other Listings</Text>
      <FlatList
        data={otherListings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listingContainer}>
            <Text>{item.details}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  listingContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default OtherScreen;
