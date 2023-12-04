import React, {useState} from 'react';
import {KeyboardTypeOptions, View} from 'react-native';
import {useWizard} from 'react-use-wizard';
import {ButtonType, StringObject} from '../../types/CommonTypes';
import {auth, wizard} from '../../utils/constants';
import {Form} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {selectWizard, updateUserData} from '../../redux/reducers/WizardData';

import globalStyle from '../../assets/styles/globalStyle';

const Step1: React.FC = () => {
  const dispatch = useDispatch();
  const {nextStep} = useWizard();
  const wizardData = useSelector(selectWizard);

  const [userData, setUserData] = useState({
    name: wizardData.name,
    age: wizardData.age,
    weight: wizardData.weight,
    height: wizardData.height,
  });

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
      label: wizard.WEIGHT_LABEL,
      name: wizard.WEIGHT,
      required: false,
      keyboardType,
    },
    {
      label: wizard.HEIGHT_LABEL,
      name: wizard.HEIGHT,
      required: false,
      keyboardType,
    },
  ];

  const onPressNext = async (data?: StringObject) => {
    if (data) {
      dispatch(updateUserData(data));
      nextStep();
    }
  };

  const userButtons = [
    {
      title: wizard.NEXT,
      type,
      onPress: (data?: StringObject) => onPressNext(data),
    },
  ];

  return (
    <View style={globalStyle.flex}>
      {wizardData && (
        <Form fields={userFields} buttons={userButtons} formData={userData} />
      )}
    </View>
  );
};

export default Step1;
