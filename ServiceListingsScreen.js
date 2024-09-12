import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ServiceListingsScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Service Listings</Text>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Tutoring')}>
                <Text style={styles.buttonText}>Tutoring</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('MovingHelp')}>
                <Text style={styles.buttonText}>Moving Help</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('EventCleanup')}>
                <Text style={styles.buttonText}>Event Cleanup</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Other')}>
                <Text style={styles.buttonText}>Other</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.postButtonContainer} onPress={() => navigation.navigate('PostListingScreen')}>
                <Text style={styles.postButtonText}>POST A LISTING</Text>
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
        marginBottom: 24,
    },
    buttonContainer: {
        backgroundColor: '#E0E0E0',
        padding: 10,
        marginVertical: 10,
        width: '80%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#1E90FF',
    },
    postButtonContainer: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#1E90FF',
        borderRadius: 5,
    },
    postButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default ServiceListingsScreen;
