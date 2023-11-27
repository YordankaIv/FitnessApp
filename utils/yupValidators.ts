import * as Yup from 'yup';
import {fitnessWorkouts} from './fitnessConstants';

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
