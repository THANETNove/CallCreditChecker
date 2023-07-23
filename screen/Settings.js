import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setAuthUserName, setAuthPassword, setLanguage} from '../redux/action';
import SelectDropdown from 'react-native-select-dropdown';

const Settings = ({navigation}) => {
  const {auth_username, auth_password, language} = useSelector(
    state => state.authUser,
  );
  const dispatch = useDispatch();

  const countries = ['ไทย', 'England', '中国', '한국'];
  const handleSelectLanguage = (selectedItem, index) => {
    dispatch(setLanguage(selectedItem)); 
  };

  useEffect(() => {
    console.log('language', language);
  }, [language]);

  const logout = () => {
    dispatch(setAuthUserName(null));
    navigation.navigate('Login');
  };

  const selectedLanguage =
    language == 'th' ? 'Thai' : language == 'eng' ? 'England' : language;
  console.log('auth_username', language);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../image/iconApp.png')}
          style={styles.profilePicture}
        />
        {/* <Text style={styles.profileName}>{auth_username[0].username}</Text> */}
      </View>
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>username:</Text>
          <Text style={styles.value}>{auth_username[0].username}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>expiration date:</Text>
          <Text style={styles.value}>{auth_username[0].expiration_date}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>
            {language == 'ไทย'
              ? 'ภาษา'
              : language == 'eng'
              ? 'language'
              : language == '中国'
              ? '中国人'
              : '한국'}
          </Text>
          <View style={styles.language}>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                handleSelectLanguage(selectedItem);
              }}
              defaultValue={language} // กำหนดค่าเริ่มต้นเป็น 'th'
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
          {/*  <View style={styles.language}>
          <View style={styles.language}>
            <Text style={styles.valueLanguage}>ไทย</Text>
          </View>
          <View style={styles.language}>
            <Text style={styles.valueLanguage}>England</Text>
          </View>
          <View style={styles.language}>
            <Text style={styles.valueLanguage}>中国</Text>
          </View>
          <View style={[styles.language, {marginLeft: 78}]}>
            <Text style={styles.valueLanguage}>한국</Text>
          </View> */}
        </View>
        {/*  ////th ไทย/eng อังกฤษ/语言- 中国 จีน /언어-한국인เกาหลี */}
        <TouchableOpacity style={styles.logoutButton} onPress={() => logout()}>
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
    marginTop: 10,
  },
  infoItem: {
    flexDirection: 'row', // เพิ่ม flexDirection: 'row' เพื่อให้ตัวอื่น ๆ อยู่ในแนวนอน
    alignItems: 'center', // จัดเรียงตำแหน่งข้อความให้อยู่ตรงกลาง
    marginBottom: 10,
    flexWrap: 'wrap',
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
  valueLanguage: {
    color: '#fff',
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
  language: {
    marginRight: 4,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
});

export default Settings;
