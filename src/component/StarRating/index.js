import {IMAGES} from '../../assets/images';
import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';

const StarRating = ({
  rating = 0,
  maxStars = 5,
  starSize = 32,
  onRate = () => {},
}) => {
  const getStarType = index => {
    const full = index + 1 <= Math.floor(rating);
    const half = rating > index && rating < index + 1;
    if (full) {
      return IMAGES.icon_star_filled_black;
    }
    if (half) {
      return IMAGES.icon_star_half_black;
    }
    return IMAGES.icon_star_empty_black;
  };

  const handlePress = value => {
    onRate(value);
  };

  return (
    <View style={styles.row}>
      {Array.from({length: maxStars}).map((_, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => handlePress(i + 1)}
          activeOpacity={0.7}>
          <Image
            style={[styles.star, {height: starSize, width: starSize}]}
            source={getStarType(i)}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default StarRating;
