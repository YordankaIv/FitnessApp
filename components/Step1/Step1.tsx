import React, {useEffect, useState} from 'react';
import {Image, KeyboardTypeOptions, Text, View} from 'react-native';
import {useWizard} from 'react-use-wizard';
import {ButtonType, Data} from '../../types/CommonTypes';
import constants from '../../utils/constants';
import Form from '../Form/Form';
import {useDispatch, useSelector} from 'react-redux';
import {updateUserData} from '../../redux/reducers/WizardData';

import globalStyle from '../../assets/styles/globalStyle';

export const Step1 = () => {
  const dispatch = useDispatch();
  const {nextStep} = useWizard();
  const [formData, setFormData] = useState({});
  const wizardData = useSelector(
    (state: {
      wizard: {name: string; age: number; weight: number; height: number};
    }) => state.wizard,
  );

  useEffect(() => {
    setFormData(wizardData);
  }, []);

  const type: ButtonType = 'submit';
  const keyboardType: KeyboardTypeOptions = 'numeric';
  const userFields = [
    {
      label: constants.NAME_LABEL,
      name: constants.NAME.toLowerCase(),
      required: false,
    },
    {
      label: constants.AGE,
      name: constants.AGE.toLowerCase(),
      required: false,
      keyboardType,
    },
    {
      label: constants.WEIGHT,
      name: constants.WEIGHT.toLowerCase(),
      required: false,
      keyboardType,
    },
    {
      label: constants.HEIGHT,
      name: constants.HEIGHT.toLowerCase(),
      required: false,
      keyboardType,
    },
  ];

  const onPressNext = async (data?: Data) => {
    if (data) {
      dispatch(updateUserData(data));
      nextStep();
    }
  };

  const userButtons = [
    {
      title: constants.NEXT,
      type,
      onPress: (data?: Data) => onPressNext(data),
    },
  ];

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
            {constants.ABOUT_YOU}
          </Text>
        </View>
      </View>
      <View style={globalStyle.flex}>
        <Form
          fields={userFields}
          buttons={userButtons}
          formData={formData ?? undefined}
        />
      </View>
    </View>
  );
};
