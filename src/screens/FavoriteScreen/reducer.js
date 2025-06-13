import {DEFAULT_STATE} from '../../helper/reducer';
import {KEYS} from '../../constants/key';

export const favoriteReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case KEYS.FAVORITE_LIST:
      return {
        ...state,
        favoriteList: action.favoriteList,
      };

    default:
      return state;
  }
};
