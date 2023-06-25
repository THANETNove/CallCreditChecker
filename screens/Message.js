import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Settings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.greenText}>This text is green</Text>
            <View style={styles.greenBox} />
            <View style={styles.otherBox} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greenText: {
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold',
    },
    greenBox: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        marginVertical: 10,
    },
    otherBox: {
        width: 150,
        height: 150,
        backgroundColor: 'lightgreen',
    },
});

export default Settings;
