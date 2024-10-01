import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const OtherDetailsScreen = ({ route, navigation }) => {
    const { listing } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Other Listing Details</Text>
            <Text style={styles.detailText}>Title: {listing.jobType || 'Other Job'}</Text>
            <Text style={styles.detailText}>Payment Type: {listing.paymentType || 'Not specified'}</Text>
            <Text style={styles.detailText}>Hourly Rate: ${listing.price || 'Not specified'}</Text>
            <Text style={styles.detailText}>Description: {listing.description || 'No Description Provided'}</Text>
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

export default OtherDetailsScreen;
