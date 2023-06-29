import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import IndexScreen from './navigator/IndexScreen';
const App = () => {
  return (
    <NavigationContainer>
      <IndexScreen />
    </NavigationContainer>
  );
};

export default App;
