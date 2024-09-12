import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ListingsContext } from './ListingsContext'; // Import ListingsContext

const PostListingScreen = ({ navigation }) => {
    const [category, setCategory] = useState('Tutoring');
    const [details, setDetails] = useState('');
    const { addListing } = useContext(ListingsContext);

    const handleSubmit = () => {
        addListing({ category, details });
        navigation.navigate('ServiceListingsScreen'); // Navigate back to Service Listings Screen
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Post a Listing</Text>

            <Picker
                selectedValue={category}
                onValueChange={(itemValue) => setCategory(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Tutoring" value="Tutoring" />
                <Picker.Item label="Moving Help" value="Moving Help" />
                <Picker.Item label="Event Cleanup" value="Event Cleanup" />
                <Picker.Item label="Other" value="Other" />
            </Picker>

            <TextInput
                style={styles.textInput}
                placeholder="Details about the job"
                multiline
                value={details}
                onChangeText={setDetails}
            />

            <Button title="Post Listing" onPress={handleSubmit} />
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
    picker: {
        height: 50,
        marginBottom: 20,
    },
    textInput: {
        height: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
    },
});

export default PostListingScreen;
