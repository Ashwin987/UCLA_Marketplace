import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const EventCleanupDetailsScreen = ({ route, navigation }) => {
  const { listing } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event Cleanup Details</Text>
      <Text style={styles.detailText}>Title: {listing.title}</Text>
      <Text style={styles.detailText}>Description: {listing.cleanupDescription}</Text>
      <Text style={styles.detailText}>Event Type: {listing.eventType}</Text>
      <Text style={styles.detailText}>Cleaners Needed: {listing.cleanersNeeded}</Text>
      <Text style={styles.detailText}>Hourly Rate: ${listing.price}</Text>
      <Button title="Contact Me" onPress={() => alert(`Contact the organizer at: ${listing.createdBy.email}`)} />
      <Button title="Back to Listings" onPress={() => navigation.goBack()} style={styles.backButton} />
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
    fontWeight: 'bold',
    marginBottom: 16,
  },
  detailText: {
    fontSize: 18,
    marginVertical: 5,
  },
  backButton: {
    marginTop: 20,
  },
});

export default EventCleanupDetailsScreen;
