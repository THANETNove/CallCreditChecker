import React, {useEffect, useState} from 'react';
import {View, Button, Text, StyleSheet, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../constants/colors';

function Login({navigation}) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const handleLogin = () => {
    // ทำการเปลี่ยนหน้าไปยัง indexScreen
    navigation.navigate('indexScreen');
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
            onBlur={handleBlur}
            placeholder={'username'}
            autoCapitalize="none"
          />
          <TextInput
            style={[styles.input, isFocused2 && styles.inputIsFocused]}
            onFocus={handleFocus2}
            onBlur={handleBlur2}
            placeholder={'password'}
            autoCapitalize="none"
          />
        </View>
        {/*  <Button
          title="Login"
          style={{backgroundColor: colors.orange}}
          onPress={handleLogin}
        /> */}
        <View style={styles.login}>
          <Text style={styles.loginName}>เข้าสู่ระบบ</Text>
        </View>
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
    fontFamily: 'IBMPlexSansThai-Regular',
    marginBottom: 16,
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
});

export default Login;
