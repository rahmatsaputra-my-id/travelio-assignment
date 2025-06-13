import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  handlerCapitalizeEveryWord,
  rdxDispatch,
  useMergeState,
} from '../../helper/functional';
import {Colors} from '../../constants/colors';
import {IMAGES} from '../../assets/images';
import {KEYS} from '../../constants/key';
import {LoadingIndicator} from '../../component/LoadingIndicator';
import {provider_books} from '../../helper/provider';
import {styles} from './style';
import {useSelector} from 'react-redux';
import React from 'react';
import StarRating from '../../component/StarRating';

const ExploreScreen = ({}) => {
  const {favoriteList} = useSelector(reduxState => reduxState);
  const [state, setState] = useMergeState({
    isLoading: false,
    bookList: [],
    query: '',
  });
  const {isLoading, bookList, query} = state;

  const handleSavedBook = value => {
    let arrayFavorite = favoriteList;
    const isIncludedInFavoriteList = favoriteList.some(
      item => item?.id === value?.id,
    );

    if (isIncludedInFavoriteList) {
      arrayFavorite = favoriteList.filter(val => val?.id !== value.id);
    } else {
      if (Array.isArray(favoriteList)) {
        arrayFavorite.push(value);
      } else {
        arrayFavorite = [value];
      }
    }

    rdxDispatch({
      type: KEYS.FAVORITE_LIST,
      favoriteList: arrayFavorite,
    });
  };

  const handleGetBookList = async () => {
    setState({isLoading: true});
    try {
      const res = await provider_books.getBooks(query);
      setState({bookList: res?.data?.items, isLoading: false});
    } catch (error) {
      setState({bookList: [], isLoading: false});
    }
  };

  const renderItem = (value, idx) => {
    const {volumeInfo} = value;
    const isIncludedInFavoriteList = favoriteList.some(
      item => item?.id === value?.id,
    );

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
            onPress={() => handleSavedBook(value)}>
            <Image
              style={styles.favoriteImage}
              source={
                isIncludedInFavoriteList
                  ? IMAGES.icon_bookmark_filled
                  : IMAGES.icon_bookmark_empty
              }
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
    <Text style={styles.cardTitle} children={'No Records Found'} />
  );

  const renderScreen = () => (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputSearch}
        placeholder={'Search'}
        placeholderTextColor={Colors.grey2}
        value={query}
        onChangeText={value => setState({query: value})}
        returnKeyType={'send'}
        onSubmitEditing={() => handleGetBookList()}
      />
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}>
          {bookList && bookList?.length > 0
            ? bookList?.map((val, idx) => renderItem(val, idx))
            : renderNoRecord()}
        </ScrollView>
      )}
    </View>
  );

  return renderScreen();
};

export {ExploreScreen};
