import React, { useEffect } from 'react';
import {
  SafeAreaView, ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Card } from '@components/Card';

import { styles } from './styles';

import { appStyles } from 'commons/styles';

export const HomeScreenController = ({ navigation }: any) => {
  useEffect(() => {}, []);

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={appStyles.safeArea}>
      <SafeAreaView style={appStyles.safeArea}>
        <ScrollView style={styles.cards}>
          <Card text="Pair with a Smart Device" />
          <Card text="Input measurements" />
          <Card text="Observe Recommendations" />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

