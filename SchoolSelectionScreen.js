import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ReviewButton from './ReviewButton'; // Ensure the path is correct

const SchoolSelectionScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="UCLA"
                onPress={() => navigation.navigate('LoginScreen', { url: 'https://my.ucla.edu/' })}
                color="#1E90FF"
            />
            <View style={styles.buttonSpacing}>
                <Button
                    title="UCR"
                    onPress={() => navigation.navigate('LoginScreen', { url: 'https://auth.ucr.edu/cas/login?service=https%3A%2F%2Fportal.ucr.edu%2FuPortal%2FLogin%3FrefUrl%3D%2FuPortal%2F' })}
                    color="#1E90FF"
                />
            </View>
            <ReviewButton navigation={navigation} />
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
    buttonSpacing: {
        marginTop: 20,
    },
});

export default SchoolSelectionScreen;
