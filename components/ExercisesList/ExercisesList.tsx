import React, {useCallback} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {exercises, iconSizes, paths} from '../../utils/constants';
import {useQuery} from 'react-query';
import {getSubArray, getUserId} from '../../utils/firebaseUtils';
import {ExerciseDetailsForm, Navigation} from '../../types/CommonTypes';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Button from '../Button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Colors} from '../../utils/colors';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {getExercisesPath} from '../../utils/utils';
import DefaultText from '../DefaultText/DefaultText';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const ExercisesList: React.FC = () => {
  const navigation = useNavigation<Navigation>();
  const uid = getUserId();
  const route = useRoute();
  const workoutKey = route.params?.workoutKey;

  const getExercises = async () => {
    const subpath = getExercisesPath(workoutKey);
    return await getSubArray(paths.USERS_PATH, subpath, uid);
  };

  const {data: savedExercises, refetch} = useQuery<
    Array<ExerciseDetailsForm>,
    Error
  >(exercises.EXERCISES_KEY, getExercises);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  const onPressExerciseButton = (exerciseKey?: string) => {
    navigation.navigate(exercises.EXERCISE, {
      workoutKey,
      exerciseKey,
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={globalStyle.pageContainer}>
      <View style={[globalStyle.flex]}>
        <Pressable
          onPress={() => onPressExerciseButton()}
          style={style.addExerciseButton}>
          <FontAwesomeIcon
            icon={faPlus}
            size={iconSizes.LSize}
            color={Colors.black}
          />
        </Pressable>
        {!savedExercises || !savedExercises.length ? (
          <View>
            <DefaultText customStyle={globalStyle.LSize}>
              {exercises.NO_EXERCISES_TEXT}
            </DefaultText>
            <Button
              title={exercises.ADD_EXERCISE}
              onPress={onPressExerciseButton}
            />
          </View>
        ) : (
          <>
            {savedExercises.map((exercise, index) => (
              <Pressable
                key={index}
                style={style.exerciseContainer}
                onPress={() => onPressExerciseButton(exercise.id)}>
                <DefaultText
                  customStyle={[
                    globalStyle.MSize,
                    globalStyle.bolderWeight,
                    style.exerciseText,
                  ]}>
                  {exercise.name}
                </DefaultText>
              </Pressable>
            ))}
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default ExercisesList;
