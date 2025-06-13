import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  handlerCapitalizeEveryWord,
  rdxDispatch,
  useMergeState,
} from '../../helper/functional';
import {IMAGES} from '../../assets/images';
import {KEYS} from '../../constants/key';
import {LoadingIndicator} from '../../component/LoadingIndicator';
import {styles} from './style';
import {useSelector} from 'react-redux';
import StarRating from '../../component/StarRating';
import {Colors} from '../../constants/colors';

const FavoriteScreen = ({}) => {
  const {favoriteList} = useSelector(reduxState => reduxState);
  const [state, setState] = useMergeState({
    isLoading: false,
    query: '',
    tempFavoriteList: [],
  });
  const {isLoading, query, tempFavoriteList} = state;

  const handleUnSavedBook = value => {
    const newFavoriteList = favoriteList.filter(val => val?.id !== value.id);

    rdxDispatch({
      type: KEYS.FAVORITE_LIST,
      favoriteList: newFavoriteList,
    });
  };

  const handleOnChangeSearch = q => {
    const array = favoriteList.filter(items =>
      items?.volumeInfo?.title.includes(q),
    );
    setState({query: q, tempFavoriteList: array});
  };

  const renderItem = (value, idx) => {
    const {volumeInfo} = value;
    return (
      <TouchableOpacity key={idx} style={styles.card}>
        {volumeInfo?.imageLinks?.thumbnail ? (
          <View style={styles.cardThumbnailContainer}>
            <Image
              style={styles.cardThumbnail}
              source={{uri: volumeInfo?.imageLinks?.thumbnail}}
            />
          </View>
        ) : null}
        <View style={styles.ratingFavoriteContainer}>
          <StarRating rating={volumeInfo?.averageRating || 0} starSize={18} />
          <TouchableOpacity
            style={styles.favoriteContainer}
            onPress={() => handleUnSavedBook(value)}>
            <Image
              style={styles.favoriteImage}
              source={IMAGES.icon_bookmark_filled}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cardWrapperText}>
          <Text
            style={styles.cardTitle}
            numberOfLines={1}
            children={
              volumeInfo?.title
                ? handlerCapitalizeEveryWord(volumeInfo?.title)
                : ''
            }
          />
          <Text
            style={styles.cardDescription}
            numberOfLines={1}
            children={
              volumeInfo?.authors?.[0]
                ? handlerCapitalizeEveryWord(volumeInfo?.authors?.[0])
                : ''
            }
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderNoRecord = () => (
    <Text style={styles.cardTitle} children={'No Favorite Books Found'} />
  );

  const renderScreen = () => {
    const list = query ? tempFavoriteList : favoriteList;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Favorite'}</Text>
        <TextInput
          style={styles.textInputSearch}
          placeholder={'Search favorite books'}
          placeholderTextColor={Colors.grey2}
          value={query}
          onChangeText={value => handleOnChangeSearch(value)}
        />
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollView}>
            {list && list?.length > 0
              ? list?.map((val, idx) => renderItem(val, idx))
              : renderNoRecord()}
          </ScrollView>
        )}
      </View>
    );
  };

  return renderScreen();
};

export {FavoriteScreen};
