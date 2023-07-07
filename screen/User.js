import React, {useEffect, useState} from 'react';
import {View, Text, PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';

const User = () => {
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

  return (
    <View>
      <Text>Contact List:</Text>
      {contacts.map(contact => (
        <Text key={contact.recordID}>{contact.displayName}</Text>
      ))}
    </View>
  );
};

export default User;
