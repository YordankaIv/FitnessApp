import React, {useState} from 'react';
import {KeyboardTypeOptions, Text, View} from 'react-native';
import Form from '../Form/Form';
import constants from '../../utils/constants';
import {loginUser} from '../../api/user';
import {ButtonType, Data} from '../../types/CommonTypes';
import {useMutation} from 'react-query';
import {useDispatch} from 'react-redux';
import {logIn} from '../../redux/reducers/User';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const signInUser = useMutation({
    mutationFn: async (data: {email: string; password: string}) => {
      return await loginUser(data.email, data.password);
    },
    onError: async (error: string) => {
      setError(error);
    },
    onSuccess: (user: {
      status: boolean;
      data: {
        displayName: string | null;
        email: string | null;
        token: string;
      };
    }) => {
      setError('');
      dispatch(logIn(user.data));
      // Navigate to the wizard
    },
  });

  const [error, setError] = useState('');

  const buttonType: ButtonType = 'submit';
  const keyBoardType: KeyboardTypeOptions = 'email-address';
  const loginFields = [
    {
      label: constants.EMAIL_LABEL,
      placeholder: constants.EMAIL_PLACEHOLDER,
      name: constants.EMAIL_LABEL.toLowerCase(),
      required: true,
      keyboardType: keyBoardType,
    },
    {
      label: constants.PASSWORD_LABEL,
      placeholder: constants.PASSWORD_PLACEHOLDER,
      name: constants.PASSWORD_LABEL.toLowerCase(),
      required: true,
      secureTextEntry: true,
    },
  ];

  const onPressSignIn = async (data?: Data) => {
    if (data) {
      signInUser.mutate({email: data.email, password: data.password});
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
