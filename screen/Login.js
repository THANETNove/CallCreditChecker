import React from 'react';
import {View, Button} from 'react-native';

function Login({navigation}) {
  const handleLogin = () => {
    // ทำการเปลี่ยนหน้าไปยัง indexScreen
    navigation.navigate('indexScreen');
  };

  return (
    <View>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

export default Login;
