import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const PostListingScreen = ({ navigation }) => {
    const [category, setCategory] = useState('Tutoring');
    const [details, setDetails] = useState('');

    // For Tutoring-specific fields
    const [subject, setSubject] = useState('');
    const [className, setClassName] = useState('');
    const [hourlyRate, setHourlyRate] = useState('');

    // For Moving Help-specific fields
    const [helpersNeeded, setHelpersNeeded] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [movingDescription, setMovingDescription] = useState('');

    // For Event Cleanup-specific fields
    const [eventType, setEventType] = useState('');
    const [startTime, setStartTime] = useState('');
    const [cleanersNeeded, setCleanersNeeded] = useState('');
    const [cleanupDescription, setCleanupDescription] = useState('');
    const [eventHourlyRate, setEventHourlyRate] = useState('');

    // For Other-specific fields
    const [jobType, setJobType] = useState('');
    const [paymentType, setPaymentType] = useState('');
    const [otherDescription, setOtherDescription] = useState('');

    const handleSubmit = async () => {
        // Prepare the listing object with appropriate field names
        const listing = {
            title: subject, // Assuming 'subject' is meant to be the title
            description: details || 'No additional details provided',
            price: hourlyRate, // Assuming 'hourlyRate' is the price
            type: category, // Category such as 'Tutoring'
            createdBy: '66e75eb3632eda9f2cabcd44', // Replace this with the actual user ID if available
            school: 'UCLA', // Replace this with the actual school if it varies
        };
    

        if (category === 'Tutoring') {
            listing.subject = subject;
            listing.className = className;
            listing.hourlyRate = hourlyRate;
        } else if (category === 'Moving Help') {
            listing.helpersNeeded = helpersNeeded;
            listing.estimatedTime = estimatedTime;
            listing.movingDescription = movingDescription;
            listing.hourlyRate = hourlyRate;
        } else if (category === 'Event Cleanup') {
            listing.eventType = eventType;
            listing.startTime = startTime;
            listing.cleanersNeeded = cleanersNeeded;
            listing.cleanupDescription = cleanupDescription;
            listing.hourlyRate = eventHourlyRate;
        } else if (category === 'Other') {
            listing.jobType = jobType;
            listing.paymentType = paymentType;
            listing.otherDescription = otherDescription;
        }

        try {
            const response = await axios.post('http://192.168.1.169:5000/listings', listing);
            console.log('Listing created:', response.data);
            navigation.navigate('ServiceListingsScreen');
        } catch (error) {
            console.error('Error creating xlisting:', error);
        }
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

            {/* Fields for Tutoring */}
            {category === 'Tutoring' && (
                <>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Subject (e.g., Math, Physics)"
                        value={subject}
                        onChangeText={setSubject}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Class Name (e.g., Math 101)"
                        value={className}
                        onChangeText={setClassName}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Hourly Rate (e.g., 20)"
                        keyboardType="numeric"
                        value={hourlyRate}
                        onChangeText={setHourlyRate}
                    />
                </>
            )}

            {/* Fields for Moving Help */}
            {category === 'Moving Help' && (
                <>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Number of Helpers Needed"
                        keyboardType="numeric"
                        value={helpersNeeded}
                        onChangeText={setHelpersNeeded}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Estimated Time (hours)"
                        keyboardType="numeric"
                        value={estimatedTime}
                        onChangeText={setEstimatedTime}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Brief Description (e.g., Moving heavy items)"
                        value={movingDescription}
                        onChangeText={setMovingDescription}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Hourly Rate (e.g., 15)"
                        keyboardType="numeric"
                        value={hourlyRate}
                        onChangeText={setHourlyRate}
                    />
                </>
            )}

            {/* Fields for Event Cleanup */}
            {category === 'Event Cleanup' && (
                <>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Event Type (e.g., Wedding, Party)"
                        value={eventType}
                        onChangeText={setEventType}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Start Time (e.g., 5:00 PM)"
                        value={startTime}
                        onChangeText={setStartTime}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Number of Cleaners Needed"
                        keyboardType="numeric"
                        value={cleanersNeeded}
                        onChangeText={setCleanersNeeded}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Brief Description (e.g., Post-event cleanup)"
                        value={cleanupDescription}
                        onChangeText={setCleanupDescription}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Hourly Rate (e.g., 12)"
                        keyboardType="numeric"
                        value={eventHourlyRate}
                        onChangeText={setEventHourlyRate}
                    />
                </>
            )}

            {/* Fields for Other */}
            {category === 'Other' && (
                <>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Job Type"
                        value={jobType}
                        onChangeText={setJobType}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Payment Type (Hourly or Fixed)"
                        value={paymentType}
                        onChangeText={setPaymentType}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Brief Description of the job"
                        value={otherDescription}
                        onChangeText={setOtherDescription}
                    />
                </>
            )}

            {/* Common Field: Details */}
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
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
    },
});

export default PostListingScreen;


