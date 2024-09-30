import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const EventCleanupScreen = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await axios.get('http://192.168.0.107:5000/listings');

                const eventCleanupListings = response.data.filter(listing => listing.type === 'Event Cleanup');
                setListings(eventCleanupListings);
            } catch (error) {
                console.error('Error fetching event cleanup listings:', error);
            }
        };

        fetchListings();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Event Cleanup Listings</Text>
            <FlatList
                data={listings}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                    <View style={styles.listingContainer}>
                        <Text style={styles.listingTitle}>{item.title || 'Untitled'}</Text>
                        <Text>{item.cleanupDescription}</Text>
                        <Text>Event Type: {item.eventType || 'undefined'}</Text>
                        <Text>Cleaners Needed: {item.cleanersNeeded || 'undefined'}</Text>
                        <Text>Hourly Rate: ${item.price || 'undefined'}</Text>
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

export default EventCleanupScreen;
