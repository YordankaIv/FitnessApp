import React, {useState} from 'react';
import {View} from 'react-native';
import {useWizard} from 'react-use-wizard';
import {
  ButtonType,
  Fields,
  FormField,
  KeyboardType,
  Step1Form,
} from '../../types/CommonTypes';
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

  const userFields: Array<FormField<Step1Form>> = [
    {
      label: auth.NAME_LABEL,
      name: Fields.name,
      required: false,
    },
    {
      label: wizard.AGE,
      name: Fields.age,
      required: false,
      keyboardType: KeyboardType.numeric,
    },
    {
      label: wizard.WEIGHT_LABEL,
      name: Fields.weight,
      required: false,
      keyboardType: KeyboardType.numeric,
    },
    {
      label: wizard.HEIGHT_LABEL,
      name: Fields.height,
      required: false,
      keyboardType: KeyboardType.numeric,
    },
  ];

  const onPressNext = async (data?: Step1Form) => {
    if (data) {
      dispatch(updateUserData(data));
      nextStep();
    }
  };

  const userButtons = [
    {
      title: wizard.NEXT,
      type: ButtonType.submit,
      onPress: (data?: Step1Form) => onPressNext(data),
    },
  ];

  return (
    <View style={globalStyle.flex}>
      {wizardData && (
        <Form<Step1Form>
          fields={userFields}
          buttons={userButtons}
          formData={userData}
        />
      )}
    </View>
  );
};

export default Step1;
