import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ExerciseActions, Exercises, ExercisesList} from '../../components';
import {exercises} from '../../utils/constants';

const ExercisesStack = createNativeStackNavigator();

const ExercisesStackScreen: React.FC = () => (
  <ExercisesStack.Navigator initialRouteName={exercises.CATEGORIES}>
    <ExercisesStack.Screen name={exercises.CATEGORIES} component={Exercises} />
    <ExercisesStack.Screen name={exercises.LIST} component={ExercisesList} />
    <ExercisesStack.Screen
      name={exercises.EXERCISE}
      component={ExerciseActions}
    />
  </ExercisesStack.Navigator>
);

export default ExercisesStackScreen;
