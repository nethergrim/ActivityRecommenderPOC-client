import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { Measurements } from '@screens/measurements';

import { HomeScreenController } from 'screens/home/HomeController';

export const navigationRef: any = React.createRef();
export function navigate(parameters: { name: any; params: any }) {
  const { name, params } = parameters;
  navigationRef.current?.navigate(name, params);
}

const AppStack = createStackNavigator();
export const AppStackScreen: any = () => {
  return (
    <AppStack.Navigator
      initialRouteName="Activity Recommendations"
      screenOptions={{
        headerStyle: {
          shadowOpacity: 0,
          backgroundColor: 'rgba(40, 120, 205, 0.70)',
        },
        headerTintColor: 'rgba(255, 255, 255, 1.00)',
      }}
    >
      <AppStack.Screen
        name="Activity Recommendations"
        component={HomeScreenController}
        options={{}}
      />
      <AppStack.Screen
        name="Measurements"
        component={Measurements}
        options={{}}
      />
    </AppStack.Navigator>
  );
};
