import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Store, persistor} from './redux/store';
import IndexScreen from './navigator/IndexScreen';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <IndexScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
