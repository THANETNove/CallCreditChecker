import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import configureStore from './redux/reducers';
import IndexScreen from './navigator/IndexScreen';
const App = () => {
  const {store, persistor} = configureStore();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <IndexScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
