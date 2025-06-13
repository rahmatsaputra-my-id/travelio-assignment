import {DEFAULT_STATE} from './state';
import {favoriteReducer} from '../../screens/FavoriteScreen/reducer';
import {KEYS} from '../../constants/key';

const appReducer = (state = DEFAULT_STATE, action) => {
  let _state = favoriteReducer(state, action);

  switch (action.type) {
    case KEYS.IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      break;
  }

  state = {_state, ..._state};

  return state;
};

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export {DEFAULT_STATE, rootReducer};
