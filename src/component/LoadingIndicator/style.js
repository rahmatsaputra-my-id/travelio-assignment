import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColorModal,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: Colors.backgroundCardLoading,
    borderRadius: 20,
    padding: 32,
  },
});
