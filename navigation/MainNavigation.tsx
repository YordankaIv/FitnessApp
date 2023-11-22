import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import {FitnessWizard, Intro, Account} from '../screens';

const Stack = createStackNavigator();

const NonAuthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Intro}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Intro} component={Intro} />
      <Stack.Screen name={Routes.Account} component={Account} />
    </Stack.Navigator>
  );
};

const Authenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.FitnessWizard}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.FitnessWizard} component={FitnessWizard} />
    </Stack.Navigator>
  );
};

export {NonAuthenticated, Authenticated};
