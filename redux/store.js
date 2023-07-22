import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // นำเข้า AsyncStorage

import userReducer from './reducers';

const rootReducer = combineReducers({
  authUser: userReducer,
});

const persistConfig = {
  key: 'root', // กำหนดคีย์หลักในการจัดเก็บข้อมูลใน AsyncStorage
  storage: AsyncStorage, // กำหนดให้ใช้ AsyncStorage ในการจัดเก็บข้อมูล
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(Store); //
