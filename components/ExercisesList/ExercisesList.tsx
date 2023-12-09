import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {exercises, paths} from '../../utils/constants';
import {useQuery} from 'react-query';
import {getSubData, getUserId} from '../../utils/firebaseUtils';
import {ExerciseListItem, Navigation} from '../../types/CommonTypes';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../Button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Colors} from '../../utils/colors';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

import globalStyle from '../../assets/styles/globalStyle';

const ExercisesList: React.FC = () => {
  const navigation = useNavigation<Navigation>();
  const uid = getUserId();
  const route = useRoute();
  const workoutKey = route.params?.key;

  const getExercises = async () => {
    const data = await (
      await getSubData(
        paths.USERS_PATH,
        paths.WORKOUTS_PATH + '/' + workoutKey,
        uid,
      )
    ).val();
    return data.exercises;
  };

  const {data: savedExercises} = useQuery<Array<ExerciseListItem>, Error>(
    exercises.EXERCISES_KEY,
    getExercises,
  );

  const onPressAddExercise = () => {
    // navigation.navigate(exercises.ADD_EXERCISE, {
    //   key: workoutKey,
    // });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={globalStyle.pageContainer}>
      <View style={[globalStyle.flex]}>
        <Pressable onPress={onPressAddExercise}>
          <FontAwesomeIcon icon={faPlus} size={22} color={Colors.black} />
        </Pressable>
        {(!savedExercises || !savedExercises.length) && (
          <View>
            <Text style={[globalStyle.FontPlayfairDisplay, globalStyle.LSize]}>
              {exercises.NO_EXERCISES_TEXT}
            </Text>
            <Button
              title={exercises.ADD_EXERCISE}
              onPress={onPressAddExercise}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ExercisesList;
