import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const TutoringScreen = () => {
    const [tutoringListings, setTutoringListings] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        // Fetch tutoring listings from the server
        const fetchTutoringListings = async () => {
            try {
                const response = await axios.get('http://192.168.0.107:5000/listings');
                const tutoring = response.data.filter(listing => listing.type === 'Tutoring');
                setTutoringListings(tutoring);
            } catch (error) {
                console.error('Error fetching tutoring listings:', error);
            }
        };

        fetchTutoringListings();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tutoring Listings</Text>
            {tutoringListings.length > 0 ? (
                <FlatList
                    data={tutoringListings}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <View style={styles.listingContainer}>
                            <Text style={styles.listingTitle}>{item.title}</Text>
                            <Text>{item.description}</Text>
                            <Text>{`Hourly Rate: $${item.price}`}</Text>
                            {/* Add "View Details" Button */}
                            <TouchableOpacity
                                style={styles.detailsButton}
                                onPress={() => navigation.navigate('TutoringDetails', { listing: item })}
                            >
                                <Text style={styles.detailsButtonText}>View Details</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            ) : (
                <Text>No tutoring listings available.</Text>
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
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    detailsButtonText: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default TutoringScreen;
