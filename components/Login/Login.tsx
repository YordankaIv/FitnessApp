import React from 'react';
import {Text, View} from 'react-native';
import {Form} from '../../components';
import {auth} from '../../utils/constants';
import {loginUser} from '../../api/user';
import {
  ButtonType,
  Fields,
  FormField,
  KeyboardType,
  LoginForm,
  Navigation,
} from '../../types/CommonTypes';
import {useMutation} from 'react-query';
import {useDispatch} from 'react-redux';
import {logIn} from '../../redux/reducers/User';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<Navigation>();

  const {mutate: mutateSignIn, error} = useMutation({
    mutationFn: async (data: LoginForm) => {
      return await loginUser(data.email, data.password);
    },
    onSuccess: (user: {
      status: boolean;
      data: {
        displayName: string | null;
        email: string | null;
        token: string;
      };
    }) => {
      dispatch(logIn(user.data));
      navigation.navigate(Routes.FitnessWizard);
    },
  });

  const loginFields: Array<FormField<LoginForm>> = [
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

  const onPressSignIn = async (data?: LoginForm) => {
    if (data) {
      mutateSignIn({email: data.email, password: data.password});
    }
  };

  const loginButtons = [
    {
      title: auth.SIGN_IN,
      type: ButtonType.submit,
      onPress: (data?: LoginForm) => onPressSignIn(data),
    },
  ];

  return (
    <View style={[globalStyle.flex, style.container]}>
      {error instanceof Error && (
        <Text style={globalStyle.error}>{error.message}</Text>
      )}
      <Form<LoginForm> fields={loginFields} buttons={loginButtons} />
    </View>
  );
};

export default Login;
