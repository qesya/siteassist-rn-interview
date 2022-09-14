import {legacy_createStore as createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducer = (state = {history: []}, action) => {
  switch (action.type) {
    case 'CALCULATE':
      const data = {
        calculation: action.calculation,
        result: action.result,
      };
      return {...state, history: [...state.history, data]};
    case 'CLEAR':
      return {...state, history: []};
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return {store, persistor};
};
