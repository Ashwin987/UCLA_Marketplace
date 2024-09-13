import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker'; // Import the picker

const SellScreen = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const pickImage = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            maxWidth: 200,
            maxHeight: 200,
            quality: 1,
        });

        if (result.didCancel) {
            console.log('User cancelled image picker');
        } else if (result.errorMessage) {
            console.log('ImagePicker Error: ', result.errorMessage);
        } else {
            setImage(result.assets[0].uri);
        }
    };

    const handleSubmit = () => {
        if (image && description && price) {
            // Logic to submit the listing
            console.log("Item listed for sale:", { image, description, price });
            setImage(null);
            setDescription('');
            setPrice('');
            navigation.goBack();
        } else {
            alert("Please fill in all the fields");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sell an Item</Text>

            <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                ) : (
                    <Text style={styles.imageText}>Upload Item Picture</Text>
                )}
            </TouchableOpacity>

            <TextInput
                style={styles.textInput}
                placeholder="Brief Description"
                value={description}
                onChangeText={setDescription}
            />

            <TextInput
                style={styles.textInput}
                placeholder="Price"
                value={price}
                keyboardType="numeric"
                onChangeText={setPrice}
            />

            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    imagePicker: {
        width: 200,
        height: 200,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#f0f0f0',
    },
    imageText: {
        color: '#aaa',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    textInput: {
        width: '80%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 8,
        marginBottom: 20,
        borderRadius: 5,
    },
});

export default SellScreen;
