import {StyleSheet} from 'react-native';
import {STATUSBAR_HEIGHT} from '../functional';
import {Colors} from '../../constants/colors';

export const styleProps = color =>
  StyleSheet.create({
    icon: {
      tintColor: color,
      resizeMode: 'contain',
      width: 24,
      height: 32,
    },
  });

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: STATUSBAR_HEIGHT,
  },
});
