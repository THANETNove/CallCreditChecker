import React, {useEffect, useState} from 'react';
import {View, Button, Text, StyleSheet, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../constants/colors';
import {TouchableWithoutFeedback} from 'react-native';
import ApiService from '../service/ApiService';
import {log} from 'console';

function Login({navigation}) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorUser, setErrorUser] = useState(null);

  const handleLogin = async () => {
    if (
      username !== null &&
      password !== null &&
      username !== '' &&
      password !== ''
    ) {
      console.log('username', username);
      console.log('password', password);
      const result = await ApiService.getLogin(username, password);

      if (result) {
        navigation.navigate('indexScreen');
      } else {
        setErrorUser(2);
        setTimeout(() => {
          setErrorUser(null);
        }, 1500);
      }
    } else {
      setErrorUser(1);
      setTimeout(() => {
        setErrorUser(null);
      }, 1500);
    }

    // ทำการเปลี่ยนหน้าไปยัง indexScreen
    /*     */
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleFocus2 = () => setIsFocused2(true);
  const handleBlur2 = () => setIsFocused2(false);

  return (
    <LinearGradient colors={['#D43A3A', 'white', 'white']} style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={styles.nameApp}>Call Credit Checker </Text>
        <View style={{width: '100%', paddingHorizontal: 16}}>
          <TextInput
            style={[styles.input, isFocused && styles.inputIsFocused]}
            onFocus={handleFocus}
            onChange={e => setUsername(e.nativeEvent.text)}
            onBlur={handleBlur}
            placeholder={'username'}
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.input, isFocused2 && styles.inputIsFocused]}
            onFocus={handleFocus2}
            onBlur={handleBlur2}
            onChange={e => setPassword(e.nativeEvent.text)}
            placeholder={'password'}
            autoCapitalize="none"
          />
          {errorUser == 1 ? (
            <Text style={styles.error}>กรุณากรอก username password</Text>
          ) : (
            errorUser == 2 && (
              <Text style={styles.error}>username password ไม่ถูกต้อง</Text>
            )
          )}
        </View>
        <TouchableWithoutFeedback onPress={handleLogin}>
          <View style={styles.login}>
            <Text style={styles.loginName}>เข้าสู่ระบบ</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  nameApp: {
    marginTop: '50%',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  inputIsFocused: {
    borderColor: colors.persianBlue,
  },
  input: {
    width: '100%',
    height: 56,
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderColor: colors.grey4,
    color: colors.grey1,
    backgroundColor: colors.white,
    fontSize: 16,
    marginBottom: 16,
    fontFamily: 'IBMPlexSansThai-Regular',
  },
  login: {
    marginTop: 10,
    backgroundColor: colors.orange,
    while: 'auto',
    paddingVertical: 6,
    paddingHorizontal: 46,
    borderRadius: 100,
  },
  loginName: {
    fontSize: 24,
    color: colors.white,
  },
  error: {
    marginTop: -10,
    color: colors.negative1,
    marginBottom: 16,
  },
});

export default Login;
