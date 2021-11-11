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

import { useValidateInput } from './hooks/useValidateInput';
import { styles } from './styles';

import { appStyles } from 'commons/styles';

const START_DATE = new Date(2000, 0, 1);
const alert = (title: string) => {
  Alert.alert(title, '', [{ text: 'OK' }]);
};

export const Measurements = () => {
  const usesMetricSystem = RNLocalize.usesMetricSystem();
  const [birthdate, setDate] = React.useState<Date | null>(null);
  const [weight, setWeight] = React.useState<string | undefined>();
  const [height, setHeight] = React.useState<string | undefined>();

  const validateInput = useValidateInput({
    height, weight, birthdate, alert,
  });

  const handleApply = () => {
    if (validateInput()) {
      // TODO make request

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
      </SafeAreaView>
    </LinearGradient>
  );
};
