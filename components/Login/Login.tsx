import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Form from '../Form/Form';
import constants from '../../utils/constants';
import {loginUser} from '../../api/user';
import {ButtonType, Data} from '../../types/CommonTypes';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Login: React.FC = () => {
  const [error, setError] = useState('');

  const buttonType: ButtonType = 'submit';
  const loginFields = [
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

  const onPressSignIn = async (data?: Data) => {
    if (data) {
      const user = await loginUser(data.email, data.password);
      if ('error' in user) {
        setError(user.error);
      } else {
        setError('');
        // Navigate to the wizard
      }
    }
  };

  const loginButtons = [
    {
      title: constants.SIGN_IN,
      type: buttonType,
      onPress: (data?: Data) => onPressSignIn(data),
    },
  ];

  return (
    <View style={[globalStyle.flex, style.container]}>
      {error.length > 0 && <Text style={globalStyle.error}>{error}</Text>}
      <Form fields={loginFields} buttons={loginButtons} />
    </View>
  );
};

export default Login;
