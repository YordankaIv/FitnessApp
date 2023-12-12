import {paths} from './constants';

export const getExercisesPath = (workoutKey: string) => {
  return `${paths.WORKOUTS_PATH}/${workoutKey}/${paths.EXERCISES_PATH}`;
};
