import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';

import { recommendationsReducer } from '@store/recommendations';

import { AppStackScreen, navigationRef } from 'Navigation';

const App = () => {
  const store = createStore(recommendationsReducer);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <AppStackScreen />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
