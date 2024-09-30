import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const MovingHelpScreen = () => {
    const [movingHelpListings, setMovingHelpListings] = useState([]);

    useEffect(() => {
        // Fetch moving help listings from the server
        const fetchMovingHelpListings = async () => {
            try {
              const response = await axios.get('http://192.168.0.107:5000/listings');
                console.log('Response data:', response.data); // Log the response data
                
                // Log the type of each listing
                response.data.forEach(listing => console.log('Listing type:', listing.type));
    
                // Filter the listings to only include those with the type "Moving Help"
                const movingHelp = response.data.filter(listing => listing.type === 'Moving Help');
                console.log('Filtered Moving Help Listings:', movingHelp); // Log the filtered moving help listings
                
                setMovingHelpListings(movingHelp);
            } catch (error) {
                console.error('Error fetching moving help listings:', error);
            }
        };
    
        fetchMovingHelpListings();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Moving Help Listings</Text>
            {movingHelpListings.length > 0 ? (
                <FlatList
                    data={movingHelpListings}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <View style={styles.listingContainer}>
                            <Text style={styles.listingTitle}>Moving Help</Text>
                            
                            <Text>{`Helpers Needed: ${item.helpersNeeded !== undefined ? item.helpersNeeded : 'Not specified'}`}</Text>
                            <Text>{`Estimated Time: ${item.estimatedTime !== undefined ? item.estimatedTime : 'Not specified'} hours`}</Text>
                            <Text>{`Hourly Rate: $${item.price || 'Not specified'}`}</Text>
                        </View>
                    )}
                />
            ) : (
                <Text>No moving help listings available.</Text>
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

export default MovingHelpScreen;
