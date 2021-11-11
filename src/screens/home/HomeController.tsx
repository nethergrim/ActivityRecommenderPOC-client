/* eslint-disable global-require */
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Card } from '@components/Card';

import { styles } from './styles';

import { appStyles } from 'commons/styles';

export const HomeScreenController = ({ navigation }: any) => {
  useEffect(() => {}, []);

  const handleClickMeasurements = () => {
    navigation.push('Measurements');
  };

  const handleClickPair = () => {
    Alert.alert('Pairing is not ready yet', 'Will be available soon', [{ text: 'OK' }]);
  };

  return (
    <LinearGradient colors={['rgba(80, 120, 205, 0.70)', 'rgba(200, 120, 205, 0.70)']} style={appStyles.safeArea}>
      <SafeAreaView style={appStyles.safeArea}>
        <ScrollView style={styles.cards}>
          <Image style={styles.image} source={require('./img/img2.jpg')} />
          <Card
            text="Pair with a Smart Device"
            onClick={handleClickPair}
            img={require('@components/Card/img/img1.jpg')}
          />
          <Card
            text="Input measurements"
            onClick={handleClickMeasurements}
            img={require('@components/Card/img/img2.jpg')}
          />
          <Card
            text="Observe Recommendations"
            img={require('@components/Card/img/img3.jpg')}
          />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

