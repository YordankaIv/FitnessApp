import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Form from '../Form/Form';
import {createUser} from '../../api/user';
import constants from '../../utils/constants';
import {ButtonType, Data} from '../../types/CommonTypes';
import {useNavigation} from '@react-navigation/native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Registration: React.FC = () => {
  const navigation = useNavigation<{jumpTo: (props: string) => void}>();
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const buttonType: ButtonType = 'submit';
  const registrationFields = [
    {
      label: constants.NAME_LABEL,
      placeholder: constants.NAME_PLACEHOLDER,
      name: constants.NAME,
      required: true,
    },
    {
      label: constants.EMAIL_LABEL,
      placeholder: constants.EMAIL_PLACEHOLDER,
      name: constants.EMAIL_LABEL.toLowerCase(),
      required: true,
    },
    {
      label: constants.PASSWORD_LABEL,
      placeholder: constants.PASSWORD_PLACEHOLDER,
      name: constants.PASSWORD_LABEL.toLowerCase(),
      required: true,
    },
  ];

  const registrationButtons = [
    {
      title: constants.SIGN_UP,
      type: buttonType,
      onPress: (data?: Data) => onPressSignUp(data),
    },
  ];

  const onPressSignUp = async (data?: Data) => {
    if (data) {
      const user = await createUser(data.name, data.email, data.password);
      if ('error' in user) {
        setError(user.error);
      } else {
        setError('');
        setSuccess(constants.REGISTRATION_SUCCESS);
        navigation.jumpTo(constants.SIGN_UP);
      }
    }
  };

  return (
    <View style={[globalStyle.flex, style.container]}>
      {error.length > 0 && <Text style={globalStyle.error}>{error}</Text>}
      {success.length > 0 && <Text style={globalStyle.success}>{success}</Text>}
      <Form fields={registrationFields} buttons={registrationButtons} />
    </View>
  );
};

export default Registration;
