import React from 'react';
import {
  ImageBackground,
  View,
  Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';

export const Card = ({ onClick, text, img }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <ImageBackground
        imageStyle={styles.image}
        style={styles.card}
        source={img}
      >
        <View style={styles.imageOverlay}>
          <Text style={styles.cardText}>{text}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>

  );
};
