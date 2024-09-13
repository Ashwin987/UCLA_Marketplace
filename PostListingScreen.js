import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ListingsContext } from './ListingsContext';

const PostListingScreen = ({ navigation }) => {
    const [category, setCategory] = useState('Tutoring');
    const [details, setDetails] = useState('');
    const { addListing } = useContext(ListingsContext);

    // For Tutoring-specific fields
    const [subject, setSubject] = useState('');
    const [className, setClassName] = useState('');
    const [hourlyRate, setHourlyRate] = useState('');

    // For Moving Help-specific fields
    const [helpersNeeded, setHelpersNeeded] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [movingDescription, setMovingDescription] = useState(''); // Brief description for moving help

    // For Event Cleanup-specific fields
    const [eventType, setEventType] = useState('');
    const [startTime, setStartTime] = useState('');
    const [cleanersNeeded, setCleanersNeeded] = useState('');
    const [cleanupDescription, setCleanupDescription] = useState(''); // Brief description for event cleanup
    const [eventHourlyRate, setEventHourlyRate] = useState(''); // Hourly rate for event cleanup

    // For Other-specific fields
    const [jobType, setJobType] = useState('');
    const [paymentType, setPaymentType] = useState('');
    const [otherDescription, setOtherDescription] = useState(''); // Brief description for other

    const handleSubmit = () => {
        // Prepare the listing object
        const listing = { 
            category, 
            details: details || 'No additional details provided',
        };

        if (category === 'Tutoring') {
            listing.subject = subject;
            listing.className = className;
            listing.hourlyRate = hourlyRate;
        } else if (category === 'Moving Help') {
            listing.helpersNeeded = helpersNeeded;
            listing.estimatedTime = estimatedTime;
            listing.movingDescription = movingDescription; // Added description for moving help
            listing.hourlyRate = hourlyRate;
        } else if (category === 'Event Cleanup') {
            listing.eventType = eventType;
            listing.startTime = startTime;
            listing.cleanersNeeded = cleanersNeeded;
            listing.cleanupDescription = cleanupDescription; // Added description for event cleanup
            listing.hourlyRate = eventHourlyRate; // Added hourly rate for event cleanup
        } else if (category === 'Other') {
            listing.jobType = jobType;
            listing.paymentType = paymentType;
            listing.otherDescription = otherDescription; // Added description for other
        }

        addListing(listing);
        navigation.navigate('ServiceListings');
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
