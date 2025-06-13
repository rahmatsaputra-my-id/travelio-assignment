import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 24,
    color: Colors.black,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scrollView: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '49%',
    borderColor: 'black',
  },
  cardThumbnailContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardThumbnail: {
    width: '100%',
    height: 250,
    borderRadius: 8,
  },
  cardWrapperText: {
    paddingTop: 4,
    paddingHorizontal: 8,
    marginBottom: 24,
  },
  ratingFavoriteContainer: {
    paddingTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favoriteContainer: {
    paddingTop: 4,
    justifyContent: 'center',
  },
  favoriteImage: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.black,
    textAlign: 'left',
  },
  cardDescription: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.grey89,
    textAlign: 'left',
  },
  textInputSearch: {
    backgroundColor: Colors.greyLight,
    borderRadius: 4,
    padding: 16,
    marginBottom: 16,
    color: Colors.black1,
  },
});
