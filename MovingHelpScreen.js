import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListingsContext } from './ListingsContext'; // Ensure ListingsContext exists

const MovingHelpScreen = () => {
  const { listings } = useContext(ListingsContext) || { listings: [] }; // Fallback to empty array if listings are undefined
  const movingHelpListings = listings.filter(listing => listing.category === 'Moving Help');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Moving Help Listings</Text>
      {movingHelpListings.length > 0 ? (
        <FlatList
          data={movingHelpListings}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.listingContainer}>
              <Text>{item.details}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noListingsText}>No listings found for Moving Help.</Text>
      )}
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
  noListingsText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MovingHelpScreen;
