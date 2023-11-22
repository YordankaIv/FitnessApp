import React, {useState} from 'react';
import {KeyboardTypeOptions, Text, View} from 'react-native';
import Form from '../Form/Form';
import {createUser, onCreateUserError} from '../../api/user';
import constants from '../../utils/constants';
import {ButtonType, Data} from '../../types/CommonTypes';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from 'react-query';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Registration: React.FC = () => {
  const navigation = useNavigation<{
    jumpTo: (props: string) => void;
  }>();

  const {mutate: mutateSignUp} = useMutation({
    mutationFn: async (data: {
      fullName: string;
      email: string;
      password: string;
    }) => {
      return await createUser(data.fullName, data.email, data.password);
    },
    onError: async (error: {code: string}) => {
      let userError = onCreateUserError(error);
      setError(userError);
    },
    onSuccess: () => {
      setError('');
      setSuccess(constants.REGISTRATION_SUCCESS);
      navigation.jumpTo(constants.SIGN_IN);
    },
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const type: ButtonType = 'submit';
  const keyboardType: KeyboardTypeOptions = 'email-address';
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
      keyboardType,
    },
    {
      label: constants.PASSWORD_LABEL,
      placeholder: constants.PASSWORD_PLACEHOLDER,
      name: constants.PASSWORD_LABEL.toLowerCase(),
      required: true,
      secureTextEntry: true,
    },
  ];

  const registrationButtons = [
    {
      title: constants.SIGN_UP,
      type,
      onPress: (data?: Data) => onPressSignUp(data),
    },
  ];

  const onPressSignUp = (data?: Data) => {
    if (data) {
      mutateSignUp({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });
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
