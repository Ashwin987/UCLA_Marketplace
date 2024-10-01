import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const OtherScreen = () => {
    const [otherListings, setOtherListings] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        // Fetch other listings from the server
        const fetchOtherListings = async () => {
            try {
                const response = await axios.get('http://192.168.0.107:5000/listings');
                console.log('Response data:', response.data);

                // Filter the listings to only include those with the type "Other"
                const other = response.data.filter(listing => listing.type === 'Other');
                console.log('Filtered Other Listings:', other);
                setOtherListings(other);
            } catch (error) {
                console.error('Error fetching other listings:', error);
            }
        };

        fetchOtherListings();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Other Listings</Text>
            {otherListings.length > 0 ? (
                <FlatList
                    data={otherListings}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <View style={styles.listingContainer}>
                            <Text style={styles.listingTitle}>{item.jobType || 'Other Job'}</Text>
                            <Text>{`Payment Type: ${item.paymentType || 'Not specified'}`}</Text>
                            <Text>{`Hourly Rate: $${item.price || 'Not specified'}`}</Text>
                            <TouchableOpacity
                                style={styles.detailsButton}
                                onPress={() => navigation.navigate('OtherDetails', { listing: item })}
                            >
                                <Text style={styles.detailsButtonText}>View Details</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            ) : (
                <Text>No other listings available.</Text>
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
        fontWeight: 'bold',
        marginBottom: 16,
    },
    listingContainer: {
        backgroundColor: '#E0E0E0',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    listingTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    detailsButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    detailsButtonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default OtherScreen;
