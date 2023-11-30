import React from 'react';
import {View} from 'react-native';
import {RadioGroup} from '../../components';
import {wizard} from '../../utils/constants';
import {selectWizard, updateUserData} from '../../redux/reducers/WizardData';
import {useDispatch, useSelector} from 'react-redux';

import globalStyle from '../../assets/styles/globalStyle';

const Step2: React.FC = () => {
  const dispatch = useDispatch();
  const wizardData = useSelector(selectWizard);

  const fitnessLevels = [
    {value: wizard.BEGINNER},
    {value: wizard.INTERMEDIATE},
    {value: wizard.ADVANCED},
  ];

  const onSelectOption = (option: string) => {
    dispatch(updateUserData({level: option}));
  };

  return (
    <View style={globalStyle.LMarginTop}>
      <RadioGroup
        data={fitnessLevels}
        onSelect={onSelectOption}
        selectedValue={wizardData.level}
      />
    </View>
  );
};

export default Step2;
