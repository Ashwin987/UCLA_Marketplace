import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const TutoringScreen = () => {
    const [tutoringListings, setTutoringListings] = useState([]);
    useEffect(() => {
        // Fetch tutoring listings from the server
        const fetchTutoringListings = async () => {
            try {
                const response = await axios.get('http://192.168.0.107:5000/listings'); // Adjust the IP address if necessary
                console.log('Response data:', response.data); // Log the response data
                
                // Log the type of each listing
                response.data.forEach(listing => console.log('Listing type:', listing.type));
    
                // Filter the listings to only include those with the type "Tutoring"
                const tutoring = response.data.filter(listing => listing.type === 'Tutoring');
                console.log('Filtered Tutoring Listings:', tutoring); // Log the filtered tutoring listings
                
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
});

export default TutoringScreen;