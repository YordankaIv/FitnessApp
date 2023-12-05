import React, {useState} from 'react';
import {KeyboardTypeOptions, Text, View} from 'react-native';
import Form from '../Form/Form';
import {createUser, onCreateUserError} from '../../api/user';
import {auth} from '../../utils/constants';
import {
  ButtonType,
  ErrorType,
  Fields,
  FormField,
  Navigation,
  RegistrationForm,
} from '../../types/CommonTypes';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from 'react-query';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Registration: React.FC = () => {
  const navigation = useNavigation<Navigation>();

  const {mutate: mutateSignUp} = useMutation({
    mutationFn: async (data: RegistrationForm) => {
      return await createUser(data.fullName, data.email, data.password);
    },
    onError: async (error: ErrorType) => {
      let userError = onCreateUserError(error);
      setError(userError);
    },
    onSuccess: () => {
      setError('');
      setSuccess(auth.REGISTRATION_SUCCESS);
      navigation.jumpTo(auth.SIGN_IN);
    },
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const type: ButtonType = 'submit';
  const keyboardType: KeyboardTypeOptions = 'email-address';
  const registrationFields: Array<FormField<RegistrationForm>> = [
    {
      label: auth.NAME_LABEL,
      placeholder: auth.NAME_PLACEHOLDER,
      name: Fields.fullName,
      required: true,
    },
    {
      label: auth.EMAIL_LABEL,
      placeholder: auth.EMAIL_PLACEHOLDER,
      name: Fields.email,
      required: true,
      keyboardType,
    },
    {
      label: auth.PASSWORD_LABEL,
      placeholder: auth.PASSWORD_PLACEHOLDER,
      name: Fields.password,
      required: true,
      secureTextEntry: true,
    },
  ];

  const registrationButtons = [
    {
      title: auth.SIGN_UP,
      type,
      onPress: (data?: RegistrationForm) => onPressSignUp(data),
    },
  ];

  const onPressSignUp = (data?: RegistrationForm) => {
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
      <Form<RegistrationForm>
        fields={registrationFields}
        buttons={registrationButtons}
      />
    </View>
  );
};

export default Registration;
