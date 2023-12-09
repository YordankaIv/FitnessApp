import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Input, Switch} from '../../components';
import {selectWizard, updateUserData} from '../../redux/reducers/WizardData';
import {useDispatch, useSelector} from 'react-redux';
import {fitnessWorkouts} from '../../utils/fitnessConstants';
import {wizard} from '../../utils/constants';
import {WorkoutListItem} from '../../types/CommonTypes';
import {fitnessWorkoutsSchema} from '../../utils/yup/yupWorkoutsSchema';
import * as Yup from 'yup';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Step4: React.FC = () => {
  const [errors, setErrors] = useState<{customWorkoutValue: string}>({
    customWorkoutValue: '',
  });
  const dispatch = useDispatch();
  const [customWorkoutValue, setCustomWorkoutValue] = useState('');
  const wizardData = useSelector(selectWizard);
  const [fitnessCategoriesWorkout, setFitnessCategoriesWorkout] = useState<
    Array<WorkoutListItem>
  >([]);

  useEffect(() => {
    let unselectedItems: Array<WorkoutListItem>;

    if (wizardData.workouts.length) {
      const filterUnselectedItems = (category: {label: string}) =>
        wizardData.workouts.findIndex(
          workout => workout.label === category.label,
        ) === wizard.NONE_INDEX;

      unselectedItems = fitnessWorkouts.filter(filterUnselectedItems);
    } else {
      unselectedItems = [...fitnessWorkouts];
    }

    setFitnessCategoriesWorkout([...wizardData.workouts, ...unselectedItems]);
  }, []);

  const onBlurFitnessInput = async (value: string) => {
    try {
      await fitnessWorkoutsSchema.validate(
        {customWorkoutValue: value},
        {abortEarly: false},
      );
      setErrors({customWorkoutValue: ''});

      setFitnessCategoriesWorkout([
        {label: value, checked: true},
        ...fitnessCategoriesWorkout,
      ]);

      dispatch(
        updateUserData({
          workouts: [...wizardData.workouts, {label: value, checked: true}],
        }),
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const yupErrors = {customWorkoutValue: ''};
        error.inner.forEach(innerError => {
          yupErrors[innerError.path] = innerError.message;
        });

        setErrors(yupErrors);
      }
    }
  };

  const onPressWorkoutItem = (workout: WorkoutListItem) => {
    const changedCategory = {label: workout.label, checked: !workout.checked};
    const changedWorkouts = fitnessCategoriesWorkout.map(category =>
      category.label === workout.label ? changedCategory : category,
    );
    setFitnessCategoriesWorkout([...changedWorkouts]);

    dispatch(
      updateUserData({
        workouts: changedWorkouts.filter(category => category.checked),
      }),
    );
  };

  return (
    <View style={[globalStyle.LMarginTop, globalStyle.flex]}>
      <View>
        <Input
          placeholder={wizard.WORKOUT_INPUT_PLACEHOLDER}
          onChangeText={(value: string) => setCustomWorkoutValue(value)}
          onInputBlur={onBlurFitnessInput}
          returnKeyType={'done'}
          inputValue={customWorkoutValue}
        />
      </View>
      {errors.customWorkoutValue && (
        <Text style={globalStyle.error}>{errors.customWorkoutValue}</Text>
      )}
      <View style={style.workoutListContainer}>
        <ScrollView persistentScrollbar={true} fadingEdgeLength={300}>
          {fitnessCategoriesWorkout.map((workout, index) => (
            <View key={index} style={style.selectedWorkoutItem}>
              <Text
                style={[
                  globalStyle.FontPlayfairDisplay,
                  globalStyle.bolderWeight,
                  globalStyle.MSize,
                  style.itemLabel,
                ]}>
                {workout.label}
              </Text>
              <Switch
                initialState={workout.checked}
                onPress={() => {
                  onPressWorkoutItem(workout);
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Step4;
