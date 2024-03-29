import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Form from '../Form/Form';
import {createUser, onCreateUserError} from '../../api/user';
import {auth} from '../../utils/constants';
import {
  ButtonType,
  ErrorType,
  Fields,
  FormField,
  KeyboardType,
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
    mutationFn: async (formValues: RegistrationForm) => {
      const {fullName, email, password} = formValues;
      return await createUser(fullName, email, password);
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
      keyboardType: KeyboardType.email,
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
      type: ButtonType.submit,
      onPress: (formValues?: RegistrationForm) => onPressSignUp(formValues),
    },
  ];

  const onPressSignUp = (formValues?: RegistrationForm) => {
    if (!formValues) {
      return;
    }

    const {fullName, email, password} = formValues;
    mutateSignUp({
      fullName,
      email,
      password,
    });
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
