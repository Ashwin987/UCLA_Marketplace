import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const TutoringDetailsScreen = ({ route, navigation }) => {
    const { listing } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{listing.title}</Text>
            <Text style={styles.detailText}>Subject: {listing.subject || 'N/A'}</Text>
            <Text style={styles.detailText}>Class: {listing.className || 'N/A'}</Text>
            <Text style={styles.detailText}>Description: {listing.description}</Text>
            <Text style={styles.detailText}>Price: ${listing.price}</Text>
            <Text style={styles.detailText}>School: {listing.school}</Text>
            
            {/* Contact Me Button */}
            <TouchableOpacity
                style={styles.contactButton}
                onPress={() => Alert.alert('Contact Me', 'Contact functionality to be implemented!')}
            >
                <Text style={styles.contactButtonText}>Contact Me</Text>
            </TouchableOpacity>
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
        marginBottom: 10,
    },
    contactButton: {
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    contactButtonText: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default TutoringDetailsScreen;
