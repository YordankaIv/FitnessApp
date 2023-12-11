import React from 'react';
import {ScrollView, View} from 'react-native';
import {exercises} from '../../utils/constants';
import {
  ButtonType,
  ExerciseDetailsForm,
  ExerciseFormProps,
  Fields,
  FormField,
  KeyboardType,
} from '../../types/CommonTypes';
import Form from '../Form/Form';

import globalStyle from '../../assets/styles/globalStyle';

const ExerciseForm: React.FC<ExerciseFormProps> = ({
  submitButtonTitle,
  onPressSubmit,
  initialExerciseValues,
}) => {
  const exerciseFields: Array<FormField<ExerciseDetailsForm>> = [
    {
      label: exercises.EXERCISE_NAME,
      name: Fields.name,
      required: true,
    },
    {
      label: exercises.TIMES,
      keyboardType: KeyboardType.numeric,
      name: Fields.times,
      required: false,
    },
    {
      label: exercises.DURATION,
      keyboardType: KeyboardType.numeric,
      name: Fields.duration,
      required: true,
    },
    {
      label: exercises.DESCRIPTION,
      name: Fields.description,
      multiline: true,
      numberOfLines: exercises.DEFAULT_NUMBER_OF_TEXTAREA,
      required: false,
    },
  ];

  const exerciseButtons = [
    {
      title: submitButtonTitle,
      type: ButtonType.submit,
      onPress: (exerciseDetails?: ExerciseDetailsForm) =>
        onPressSubmit(exerciseDetails),
    },
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={globalStyle.pageContainer}>
      <View style={[globalStyle.flex]}>
        <Form<ExerciseDetailsForm>
          fields={exerciseFields}
          buttons={exerciseButtons}
          formData={initialExerciseValues}
        />
      </View>
    </ScrollView>
  );
};

export default ExerciseForm;
