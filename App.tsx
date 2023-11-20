import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => (
  <NavigationContainer>
    <MainNavigation />
  </NavigationContainer>
);

export default App;
