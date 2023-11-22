import React from 'react';
import {Image, Text, View} from 'react-native';
import {RadioGroup} from '../../components';
import {wizard} from '../../utils/constants';
import {updateUserData} from '../../redux/reducers/WizardData';
import {useDispatch, useSelector} from 'react-redux';

import globalStyle from '../../assets/styles/globalStyle';

const Step2 = () => {
  const dispatch = useDispatch();
  const wizardData = useSelector(
    (state: {wizard: {level: string}}) => state.wizard,
  );

  const fitnessLevels = [
    {value: wizard.BEGINNER},
    {value: wizard.INTERMEDIATE},
    {value: wizard.ADVANCED},
  ];

  const onSelectOption = (option: string) => {
    dispatch(updateUserData({level: option}));
  };

  return (
    <View style={globalStyle.flex}>
      <View>
        <Image source={require('../../assets/images/wizard_girl.png')} />
        <View style={globalStyle.wizardHeader}>
          <Text
            style={[
              globalStyle.FontPlayfairDisplay,
              globalStyle.XLSize,
              globalStyle.bolderWeight,
              globalStyle.header,
            ]}>
            {wizard.FITNESS_LEVEL}
          </Text>
        </View>
      </View>
      <View style={globalStyle.marginTop30}>
        <RadioGroup
          data={fitnessLevels}
          onSelect={onSelectOption}
          selectedValue={wizardData.level}
        />
      </View>
    </View>
  );
};

export default Step2;
