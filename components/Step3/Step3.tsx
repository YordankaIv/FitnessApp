import React from 'react';
import {View} from 'react-native';
import {RadioGroup} from '../../components';
import {wizard} from '../../utils/constants';
import {selectWizard, updateUserData} from '../../redux/reducers/WizardData';
import {useDispatch, useSelector} from 'react-redux';

import globalStyle from '../../assets/styles/globalStyle';

const Step3: React.FC = () => {
  const dispatch = useDispatch();
  const wizardData = useSelector(selectWizard);

  const fitnessLevels = [
    {value: wizard.LOSE_WEIGHT},
    {value: wizard.BUILD_STRENGTH},
    {value: wizard.STAY_FIT},
    {value: wizard.FAT_BURNING},
    {value: wizard.REGULAR_TRAINING},
  ];

  const onSelectOption = (option: string) => {
    dispatch(updateUserData({goal: option}));
  };

  return (
    <View style={globalStyle.LMarginTop}>
      <RadioGroup
        radioButtons={fitnessLevels}
        onSelect={onSelectOption}
        selectedValue={wizardData.goal}
      />
    </View>
  );
};

export default Step3;
