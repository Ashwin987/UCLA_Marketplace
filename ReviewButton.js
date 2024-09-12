import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

const ReviewButton = () => {
    const handleReviewPress = () => {
        const reviewUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeTZSWmSIhq5o2kpMQoJecUyZSjXVDXL95T7spYPlXKa57wdA/viewform?usp=sf_link';
        Linking.openURL(reviewUrl);
    };

    return (
        <TouchableOpacity style={styles.reviewButtonContainer} onPress={handleReviewPress}>
            <Text style={styles.reviewButtonText}>Leave us a review</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    reviewButtonContainer: {
        marginTop: 40,
        padding: 10,
        backgroundColor: '#1E90FF',
        borderRadius: 5,
        alignItems: 'center',
    },
    reviewButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default ReviewButton;
