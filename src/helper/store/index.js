import {createStore} from 'redux';
import {Platform} from 'react-native';
import {defaultState, rootReducer} from '../reducer';
import {persistReducer, persistStore} from 'redux-persist';
import {KEYS} from '../../constants/key';

let reducer = false;
if (Platform.OS === 'android' || Platform.OS === 'ios') {
  const createSensitiveStorage = require('redux-persist-sensitive-storage');
  const storageApp = createSensitiveStorage.default({
    keychainService: KEYS.KEYCHAIN_SERVICE,
    sharedPreferencesName: KEYS.SHARED_PREFERENCES_NAME,
  });

  reducer = persistReducer(
    {
      key: KEYS.REACT_APP,
      timeout: 30000,
      storage: storageApp,
    },
    rootReducer,
  );
}

const store = createStore(reducer, defaultState);

const persistor = persistStore(store);
export {persistor, store};
