import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Intro from '../screens/Intro/Intro';
import Account from '../screens/Account/Account';

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
      {/* <Stack.Screen name={Routes.FitnessWizard} component={FitnessWizard} /> */}
    </Stack.Navigator>
  );
};

export {NonAuthenticated, Authenticated};
