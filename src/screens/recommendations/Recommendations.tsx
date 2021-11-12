import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useRecommendations } from '../../store/recommendations';

import { styles } from './styles';

import { appStyles } from 'commons/styles';

const keyExtractor = ({ id }) => String(id);

const Item = ({ title, details }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    {details ? (<Text style={styles.description}>{details}</Text>) : null}
  </View>
);

export const Recommendations = ({ navigation }) => {
  const { recommendations } = useRecommendations();

  const handleOpenMeasurements = React.useCallback(() => {
    navigation.push('Measurements');
  }, [navigation]);

  React.useEffect(() => {
    if (!recommendations || !recommendations.length) {
      Alert.alert('No recommendations yet', 'Please provide body measurements first',
        [
          { text: 'Maybe later', style: 'cancel' },
          { text: 'Yes', onPress: handleOpenMeasurements },

        ]);
    }
  }, []);

  const renderItem = ({ item }) => (
    <Item title={item.title} details={item.details} />
  );

  return (
    <LinearGradient
      colors={['rgba(80, 120, 205, 0.70)', 'rgba(200, 120, 205, 0.70)']}
      style={appStyles.safeArea}
    >
      <SafeAreaView style={appStyles.safeArea}>

        <FlatList
          data={recommendations}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </SafeAreaView>

    </LinearGradient>
  );
};
