import database, {firebase} from '@react-native-firebase/database';

export const getUserId = () => {
  const user = firebase.auth().currentUser;
  const uid = user ? user.uid : '';

  return uid;
};

export const getData = async (path: string, userId: string) => {
  return await database().ref(path).child(userId).once('value');
};

export const getSubData = async (
  path: string,
  subpath: string,
  userId: string,
) => {
  return await database()
    .ref(path)
    .child(userId + `/${subpath}`)
    .once('value');
};

export const saveData = async <T>(path: string, userId: string, data: T) => {
  return await database().ref(path).child(userId).set(data);
};
