import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  FlatList,
  StyleSheet,
} from 'react-native';
import Contacts from 'react-native-contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contact Permission',
          message: 'This app needs access to your contacts.',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Contacts.getAll().then(contacts => {
          setContacts(contacts);
        });
      } else {
        console.log('Contact permission denied.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderContact = ({item}) => {
    return (
      <View style={styles.contactItem}>
        <View style={styles.placeholder}>
          <Text style={styles.displayName}>{item.displayName[0]}</Text>
        </View>
        <View style={styles.displayNameUser}>
          <Text style={styles.displayName}>{item.displayName}</Text>
          {item.phoneNumbers.map((phoneNumber, index) => (
            <Text key={index} style={styles.phoneNumber}>
              {phoneNumber.number}
            </Text>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderContact}
        keyExtractor={item => item.recordID}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contactItem: {
    marginBottom: 12,
    flexDirection: 'row',
  },
  displayName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  phoneNumber: {
    fontSize: 16,
    color: 'gray',
  },
  imgCon: {},
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayNameUser: {
    marginLeft: 10,
  },
});

export default App;
