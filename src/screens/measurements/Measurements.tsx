import React, { useEffect } from 'react';
import {
  SafeAreaView, ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { appStyles } from 'commons/styles';

export const Measurements = () => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={appStyles.safeArea}>
      <SafeAreaView style={appStyles.safeArea} />
    </LinearGradient>
  );
};
