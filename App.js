/* import React from 'react';
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

export default App; */

import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import IndexScreen from './navigator/IndexScreen';
import {PersistGate} from 'redux-persist/integration/react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist'; // นำเข้า persistStore
import rootReducer from './redux/reducers';

import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));
const persistor = persistStore(store); // ใช้ persistStore เพื่อสร้าง persistor

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <IndexScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default ReduxApp;
