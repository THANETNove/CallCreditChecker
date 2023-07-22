// store/index.js

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Import your root reducer here

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
