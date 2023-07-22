import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {Store} from './redux/store';
import IndexScreen from './navigator/IndexScreen';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <IndexScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
