import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    resizeMode: 'contain',
    marginHorizontal: 4,
    tintColor: Colors.golden,
  },
});
