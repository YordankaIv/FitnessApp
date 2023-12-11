import React from 'react';
import {View} from 'react-native';
import {paths, wizard} from '../../utils/constants';
import {selectWizard} from '../../redux/reducers/WizardData';
import {useSelector} from 'react-redux';
import Button from '../Button/Button';
import {useMutation} from 'react-query';
import {getUserId, saveData} from '../../utils/firebaseUtils';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
import {Navigation, User} from '../../types/CommonTypes';

import globalStyle from '../../assets/styles/globalStyle';

const Step6: React.FC = () => {
  const navigation = useNavigation<Navigation>();
  const wizardData = useSelector(selectWizard);
  const uid = getUserId();

  const {mutate: mutateSaveFitnessData} = useMutation({
    mutationFn: async (data: User) => {
      return await saveData(paths.USERS_PATH, uid, data);
    },
  });

  const onPressFinish = () => {
    mutateSaveFitnessData(wizardData);
    navigation.navigate(Routes.Dashboard);
  };

  return (
    <View style={globalStyle.LMarginTop}>
      <Button title={wizard.FINISH} onPress={onPressFinish} />
    </View>
  );
};

export default Step6;
