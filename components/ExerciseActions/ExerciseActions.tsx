import React from 'react';
import {exercises, paths} from '../../utils/constants';
import {
  getSubData,
  getUserId,
  upsertFirebaseItem,
} from '../../utils/firebaseUtils';
import {ExerciseDetailsForm, Navigation} from '../../types/CommonTypes';
import {useNavigation, useRoute} from '@react-navigation/native';
import ExerciseForm from '../ExerciseForm/ExerciseForm';
import {useQuery} from 'react-query';

const ExerciseActions: React.FC = () => {
  const navigation = useNavigation<Navigation>();
  const uid = getUserId();
  const route = useRoute();
  const {workoutKey, exerciseKey} = route.params;
  const buttonTitle = exerciseKey
    ? exercises.EDIT_EXERCISE
    : exercises.ADD_EXERCISE;

  const getExercise = async () => {
    const subDataResponse = await getSubData(
      paths.USERS_PATH,
      `${paths.WORKOUTS_PATH}/${workoutKey}/${paths.EXERCISES_PATH}/${exerciseKey}`,
      uid,
    );
    return subDataResponse.val();
  };

  const {data: savedExercise, isFetching} = useQuery<
    ExerciseDetailsForm,
    Error
  >(exercises.EXERCISE, getExercise);

  const onPressSubmit = async (exercise?: ExerciseDetailsForm) => {
    if (!exercise) {
      return;
    }

    await upsertFirebaseItem(
      paths.USERS_PATH,
      `${uid}/${paths.WORKOUTS_PATH}/${workoutKey}/${paths.EXERCISES_PATH}`,
      exercise,
      exerciseKey,
    );

    navigation.goBack();
  };

  return (
    <>
      {!isFetching && (
        <ExerciseForm
          submitButtonTitle={buttonTitle}
          onPressSubmit={onPressSubmit}
          initialExerciseValues={savedExercise}
        />
      )}
    </>
  );
};

export default ExerciseActions;
