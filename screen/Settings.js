import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../image/iconApp.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.profileName}>John Doe</Text>
      </View>
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>john.doe@example.com</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>New York, USA</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.value}>30</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  info: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    width: 80,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    flex: 1,
    color: '#555',
  },
  logoutButton: {
    backgroundColor: '#f44336', // Red color for logout button
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Settings;
