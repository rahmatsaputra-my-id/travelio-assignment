import {useState} from 'react';
import {StatusBar, Platform} from 'react-native';
import {store} from '../store';

export const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export const useMergeState = initialState => {
  const [state, setState] = useState(initialState);
  const setMergedState = newState =>
    setState(prevState => Object.assign({}, prevState, newState));
  return [state, setMergedState];
};

export const handlerCapitalizeEveryWord = text => {
  let result = text;
  if (text) {
    const upperCaseFirstChar = text?.charAt(0)?.toUpperCase() + text?.slice(1);
    const sentence =
      upperCaseFirstChar && upperCaseFirstChar?.replaceAll('-', ' ');

    const capitalizeWords = [];
    const words = sentence?.toLowerCase()?.split(' ');

    for (let index = 0; index < words.length; index++) {
      const capitalLetters =
        words?.[index]?.charAt(0)?.toUpperCase() + words?.[index]?.slice(1);
      capitalizeWords?.push(capitalLetters);
    }

    result = capitalizeWords?.join(' ');
  }

  return result;
};

export const rdxDispatch = (action = false) => {
  return store.dispatch(action);
};
