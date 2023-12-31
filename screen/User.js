import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  FlatList,
  StyleSheet,
  TextInput,
  Linking,
  Dimensions,
  Pressable,
} from 'react-native';
import Contacts from 'react-native-contacts';
import Icon from 'react-native-vector-icons/Entypo';

const User = () => {
  const [contacts, setContacts] = useState([]);
  const [searchUser, setSearchUser] = useState('');

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

  const onChangeText = text => {
    setSearchUser(text);
  };

  const renderContact = ({item}) => {
    return (
      <View style={styles.contactItem}>
        <View style={styles.placeholder}>
          <Text style={[styles.displayName, {color: '#fff'}]}>
            {item.displayName[0]}
          </Text>
        </View>
        <View style={styles.displayNameUser}>
          <View>
            <Text style={styles.displayName}>{item.displayName}</Text>
            {item.phoneNumbers.map((phoneNumber, index) => (
              <Text key={index} style={styles.phoneNumber}>
                {phoneNumber.number}
              </Text>
            ))}
          </View>
          {item.phoneNumbers.map((phoneNumber, index) => (
            <Pressable
              onPress={() => Linking.openURL(`tel:${phoneNumber.number}`)}>
              <View style={styles.iconPhone}>
                <Icon name="phone" size={24} color="red" />
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    );
  };

  const filteredContacts = contacts.filter(item => {
    const displayName = item.displayName.toLowerCase();
    const numbers = item.phoneNumbers.map(phoneNumber =>
      phoneNumber.number.toString().toLowerCase(),
    );

    return (
      displayName.includes(searchUser?.toLowerCase()) ||
      numbers.some(number => number.includes(searchUser?.toLowerCase()))
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Search"
        />
      </View>

      <FlatList
        contentContainerStyle={{paddingTop: 20, paddingBottom: 20}}
        data={filteredContacts}
        renderItem={renderContact}
        keyExtractor={item => item.recordID}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contactItem: {
    paddingHorizontal: 16,
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
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#D43A3A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayNameUser: {
    flexDirection: 'row',
    width: deviceWidth - 110,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  head: {
    backgroundColor: '#D43A3A',
    height: 60,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderColor: 'red',
    borderRadius: 8,
  },
  iconPhone: {
    padding: 10,
  },
});

export default User;
