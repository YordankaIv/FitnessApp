import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {Input} from '../../components';
import {selectWizard, updateUserData} from '../../redux/reducers/WizardData';
import {useDispatch, useSelector} from 'react-redux';
import {fitnessWorkouts} from '../../utils/fitnessConstants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../../utils/colors';
import {wizard} from '../../utils/constants';
import {ListItem} from '../../types/CommonTypes';
import {fitnessWorkoutsSchema} from '../../utils/yup/yupWorkoutsSchema';
import * as Yup from 'yup';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Step4 = () => {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{customWorkoutValue: string}>({
    customWorkoutValue: '',
  });
  const dispatch = useDispatch();
  const [customWorkoutValue, setCustomWorkoutValue] = useState('');
  const wizardData = useSelector(selectWizard);
  const [fitnessCategoriesWorkout, setFitnessCategoriesWorkout] = useState<
    Array<ListItem>
  >([...fitnessWorkouts]);

  useEffect(() => {
    let unselectedItems: Array<ListItem>;

    if (wizardData.workouts.length) {
      const filterUnselectedItems = (category: {label: string}) =>
        wizardData.workouts.findIndex(
          workout => workout.label === category.label,
        ) === wizard.NONE_INDEX;

      unselectedItems = fitnessCategoriesWorkout.filter(filterUnselectedItems);
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
      setSuccess(true);

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
      setSuccess(false);

      if (error instanceof Yup.ValidationError) {
        const yupErrors = {customWorkoutValue: ''};
        error.inner.forEach(innerError => {
          yupErrors[innerError.path] = innerError.message;
        });

        setErrors(yupErrors);
      }
    }
  };

  const onPressWorkoutItem = (workout: ListItem) => {
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
    <View style={[globalStyle.marginTop30, globalStyle.flex]}>
      <View style={globalStyle.input}>
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
        <ScrollView>
          {fitnessCategoriesWorkout.map((workout, index) => (
            <Pressable
              key={index}
              style={style.selectedWorkoutItem}
              onPress={() => {
                onPressWorkoutItem(workout);
              }}>
              <Text
                style={[
                  globalStyle.FontPlayfairDisplay,
                  globalStyle.bolderWeight,
                  globalStyle.MSize,
                  style.itemLabel,
                ]}>
                {workout.label}
              </Text>
              <Text>{workout.checked}</Text>
              <FontAwesomeIcon
                icon={faCheck}
                size={25}
                color={workout.checked ? Colors.pink : Colors.gray}
              />
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Step4;
