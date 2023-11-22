import React from 'react';
import {Image, KeyboardTypeOptions, Text, View} from 'react-native';
import {useWizard} from 'react-use-wizard';
import {ButtonType, Data} from '../../types/CommonTypes';
import {auth, wizard} from '../../utils/constants';
import {Form} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {selectWizard, updateUserData} from '../../redux/reducers/WizardData';

import globalStyle from '../../assets/styles/globalStyle';

const Step1 = () => {
  const dispatch = useDispatch();
  const {nextStep} = useWizard();
  const wizardData = useSelector(selectWizard);

  const type: ButtonType = 'submit';
  const keyboardType: KeyboardTypeOptions = 'numeric';
  const userFields = [
    {
      label: auth.NAME_LABEL,
      name: auth.NAME.toLowerCase(),
      required: false,
    },
    {
      label: wizard.AGE,
      name: wizard.AGE.toLowerCase(),
      required: false,
      keyboardType,
    },
    {
      label: wizard.WEIGHT,
      name: wizard.WEIGHT.toLowerCase(),
      required: false,
      keyboardType,
    },
    {
      label: wizard.HEIGHT,
      name: wizard.HEIGHT.toLowerCase(),
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
      title: wizard.NEXT,
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
            {wizard.ABOUT_YOU}
          </Text>
        </View>
      </View>
      <View style={globalStyle.flex}>
        {wizardData && (
          <Form
            fields={userFields}
            buttons={userButtons}
            formData={wizardData}
          />
        )}
      </View>
    </View>
  );
};

export default Step1;
