import auth from '@react-native-firebase/auth';
import {errors} from '../utils/constants';
import store from '../redux/store';
import {updateToken} from '../redux/reducers/User';

export const createUser = async (
  fullName: string,
  email: string,
  password: string,
) => {
  const user = await auth().createUserWithEmailAndPassword(email, password);
  await user.user.updateProfile({displayName: fullName});
  return user;
};

export const onCreateUserError = (error: {code: string}) => {
  if (error.code === 'auth/email-already-in-use') {
    return errors.USER_IN_USE_EMAIL_ERROR;
  } else if (error.code === 'auth/invalid-email') {
    return errors.USER_INVALID_EMAIL_ERROR;
  }

  return errors.USER_CREATE_ERROR;
};

export const loginUser = async (email: string, password: string) => {
  const response = await auth().signInWithEmailAndPassword(email, password);
  const token = await response.user.getIdToken();
  return {
    status: true,
    data: {
      displayName: response.user.displayName,
      email: response.user.email,
      token,
    },
  };
};

export const logout = async () => {
  await auth().signOut();
};

export const checkToken = async () => {
  try {
    const response = await auth().currentUser?.getIdToken(true);
    store.dispatch(updateToken(response));
    return response;
  } catch (error) {
    return error;
  }
};
