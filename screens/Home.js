import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Contacts from 'react-native-contacts';
import { check, PERMISSIONS, request } from 'react-native-permissions';

const PhoneNumberList = () => {
    const [phoneContacts, setPhoneContacts] = useState([]);

    useEffect(() => {
        fetchPhoneContacts();
    }, []);

    const fetchPhoneContacts = async () => {
        try {
            /*  const permissionStatus = await check(PERMISSIONS.ANDROID.READ_CONTACTS);
             if (permissionStatus === 'granted') {
                 Contacts.getAll().then((contacts) => {
                     setPhoneContacts(contacts);
                 });
             } else {
                 const permissionResponse = await request(
                     PERMISSIONS.ANDROID.READ_CONTACTS
                 );
                 if (permissionResponse === 'granted') {
                     Contacts.getAll().then((contacts) => {
                         setPhoneContacts(contacts);
                     });
                 } else {
                     console.log('Permission denied');
                 }
             } */
        } catch (error) {
            console.error(error);
        }
    };

    /*   const renderPhoneContact = ({ item }) => (
          <View style={{ padding: 10 }}>
              <Text>Name: {item.displayName}</Text>
              <Text>Phone: {item.phoneNumbers[0].number}</Text>
          </View>
      ); */

    return (
        <View>
            {/*    <FlatList
                data={phoneContacts}
                renderItem={renderPhoneContact}
                keyExtractor={(item) => item.recordID}
            /> */}
        </View>
    );
};

export default PhoneNumberList;
