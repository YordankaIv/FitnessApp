import React from 'react';
import {View} from 'react-native';
import {paths, wizard} from '../../utils/constants';
import {selectWizard} from '../../redux/reducers/WizardData';
import {useSelector} from 'react-redux';
import Button from '../Button/Button';
import {useMutation} from 'react-query';
import {saveData} from '../../utils/firebaseUtils';
import {firebase} from '@react-native-firebase/auth';

import globalStyle from '../../assets/styles/globalStyle';

const Step6 = () => {
  const wizardData = useSelector(selectWizard);
  const user = firebase.auth().currentUser;
  const uid = user ? user.uid : '';

  const {mutate: mutateSaveFitnessData} = useMutation({
    mutationFn: async (data: {
      name: string;
      age: string;
      weight: string;
      height: string;
      level: string;
      goal: string;
      workouts: Array<{label: string; name: string}>;
    }) => {
      return await saveData(paths.USERS_PATH, uid, data);
    },
  });

  const onPressFinish = () => {
    mutateSaveFitnessData(wizardData);
  };

  return (
    <View style={globalStyle.marginTop30}>
      <Button title={wizard.FINISH} onPress={onPressFinish} />
    </View>
  );
};

export default Step6;
