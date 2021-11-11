import React from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  Alert,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as RNLocalize from 'react-native-localize';
import DatePicker from 'react-native-date-picker';
import Spinner from 'react-native-loading-spinner-overlay';

import { useRecommendations } from '../../store/recommendations';

import { useValidateInput } from './hooks/useValidateInput';
import { styles } from './styles';
import { useApplyMeasurements } from './hooks/useApplyMeasurements';

import { appStyles } from 'commons/styles';

const START_DATE = new Date(2000, 0, 1);
const alert = (title: string) => {
  Alert.alert(title, '', [{ text: 'OK' }]);
};

export const Measurements = ({ navigation }) => {
  const usesMetricSystem = RNLocalize.usesMetricSystem();
  const [birthdate, setDate] = React.useState<Date | null>(null);
  const [weight, setWeight] = React.useState<string | undefined>();
  const [height, setHeight] = React.useState<string | undefined>();
  const { loading, error, recommendations } = useRecommendations();

  const validateInput = useValidateInput({
    height, weight, birthdate, alert,
  });

  const applyMeasurements = useApplyMeasurements({
    height, weight, birthdate, usesMetricSystem,
  });

  const handleNavigateRecommendations = React.useCallback(() => {
    navigation.push('Recommendations');
  }, [navigation]);

  React.useEffect(() => {
    console.log(error);
    console.log(recommendations);

    if (error) {
      Alert.alert('Error', error, [{ text: 'OK' }]);
    }
    if (recommendations && recommendations.length) {
      Alert.alert('Success', 'Your personal recommendations are ready, do you want to check them?',
        [
          { text: 'Maybe later', style: 'cancel' },
          { text: 'Yes', onPress: handleNavigateRecommendations },

        ]);
    }
  }, [error, recommendations, handleNavigateRecommendations]);

  const handleApply = () => {
    if (validateInput()) {
      applyMeasurements();
    }
  };

  return (
    <LinearGradient
      colors={['rgba(80, 120, 205, 0.70)', 'rgba(200, 120, 205, 0.70)']}
      style={appStyles.safeArea}
    >
      <SafeAreaView style={appStyles.safeArea}>
        <ScrollView keyboardDismissMode="on-drag">
          <Text style={styles.title}>
            Body height,
            {' '}
            {usesMetricSystem ? 'cm' : 'feet'}
          </Text>
          <TextInput
            keyboardType="decimal-pad"
            style={styles.input}
            placeholder="5.5"
            returnKeyType="next"
            value={height}
            onChangeText={setHeight}
          />
          <Text style={styles.title}>
            Body weight,
            {' '}
            {usesMetricSystem ? 'kg' : 'lb'}
          </Text>
          <TextInput
            keyboardType="decimal-pad"
            style={styles.input}
            placeholder="140.0"
            returnKeyType="next"
            value={weight}
            onChangeText={setWeight}
          />
          <Text style={styles.title}>
            Select Birth Date
          </Text>
          <DatePicker
            style={styles.datepicker}
            open
            mode="date"
            date={START_DATE}
            onDateChange={setDate}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleApply}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['rgba(49, 87, 117, 0.75)', 'rgba(78,69, 117, 0.75)']}
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                Apply
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
        <Spinner
          visible={loading}
          textContent="Building Recommendations..."
          textStyle={styles.spinnerTextStyle}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};
