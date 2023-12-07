import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {exercises, paths, wizard} from '../../utils/constants';
import {useQuery} from 'react-query';
import {getSubData, getUserId} from '../../utils/firebaseUtils';
import {Navigation, WorkoutListItem} from '../../types/CommonTypes';
import {useNavigation} from '@react-navigation/native';
import {FirebaseDatabaseTypes} from '@react-native-firebase/database';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Exercises: React.FC = () => {
  const navigation = useNavigation<Navigation>();
  const uid = getUserId();

  const getWorkouts = async () => {
    const workoutsSnapshot = await getSubData(
      paths.USERS_PATH,
      paths.WORKOUTS_PATH,
      uid,
    );
    const workouts: Array<WorkoutListItem> = [];

    workoutsSnapshot.forEach(
      (childSnapshot: FirebaseDatabaseTypes.DataSnapshot) => {
        const value = childSnapshot.val();
        workouts.push({...value, key: childSnapshot.key});
        return undefined;
      },
    );

    return workouts;
  };

  const {data: savedWorkouts} = useQuery<Array<WorkoutListItem>, Error>(
    wizard.WORKOUTS,
    getWorkouts,
  );

  const onPressWorkout = (workoutKey?: string) => {
    if (workoutKey) {
      navigation.navigate(exercises.LIST, {
        key: workoutKey,
      });
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={globalStyle.pageContainer}>
      <View style={[globalStyle.flex]}>
        {savedWorkouts && (
          <>
            {savedWorkouts.map((workout, index) => (
              <Pressable
                key={index}
                onPress={() => onPressWorkout(workout.key)}
                style={[style.workoutContainer, style.shadowProp]}>
                <Text>{workout.label}</Text>
              </Pressable>
            ))}
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Exercises;
