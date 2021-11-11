import React from 'react';
import {
  Text, View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';

export const Card = ({ onClick, text }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.card}>
        <Text style={styles.cardText}>{text}</Text>
      </View>
    </TouchableOpacity>

  );
};
