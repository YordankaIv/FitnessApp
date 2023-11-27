import * as Yup from 'yup';
import {fitnessWorkouts} from '../fitnessConstants';
import {wizard} from '../constants';

Yup.addMethod(Yup.string, 'existingKindOfWorkout', function (errorMessage) {
  return this.test('testExistingKindOfWorkout', errorMessage, function (value) {
    const {path, createError} = this;
    const existingWorkouts = fitnessWorkouts.filter(
      workout =>
        workout.label.toLocaleLowerCase() === value?.toLocaleLowerCase(),
    );
    const isExistingWorkout = existingWorkouts.length;

    return (
      (value && !isExistingWorkout) ||
      createError({path, message: errorMessage})
    );
  });
});

export const fitnessWorkoutsSchema = Yup.object().shape({
  customWorkoutValue: Yup.string()
    .existingKindOfWorkout(wizard.WORKOUT_ERROR)
    .required(wizard.WORKOUT_ERROR_REQUIRED),
});
