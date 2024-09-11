import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleReviewPress = () => {
    const reviewUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeTZSWmSIhq5o2kpMQoJecUyZSjXVDXL95T7spYPlXKa57wdA/viewform?usp=sf_link';
    Linking.openURL(reviewUrl);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App!</Text>
      <Text style={styles.description}>
        This app helps you connect with your university community by offering a marketplace, service listings, event tickets, and forums.
      </Text>
      <Button
        title="Select your School"
        onPress={() => navigation.navigate('SchoolSelectionScreen')}
      />
      <TouchableOpacity style={styles.reviewButtonContainer} onPress={handleReviewPress}>
        <Text style={styles.reviewButtonText}>Leave us a review</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  reviewButtonContainer: {
    marginVertical: 20,
    width: '80%',
    position: 'absolute',
    bottom: 20,
  },
  reviewButtonText: {
    color: '#1E90FF',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;