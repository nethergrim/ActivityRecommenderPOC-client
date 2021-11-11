import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {appStyles} from 'commons/styles';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreenController = ({navigation}: any) => {
  useEffect(() => {}, []);

  return (
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={appStyles.safeArea}>
        <SafeAreaView style={appStyles.safeArea}>
          <View>
           <View></View> 
           <View></View> 
           <View></View> 
          </View>
        </SafeAreaView>
      </LinearGradient>
  );
};

export default HomeScreenController;
