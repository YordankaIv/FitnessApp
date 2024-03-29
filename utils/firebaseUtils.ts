import database, {
  FirebaseDatabaseTypes,
  firebase,
} from '@react-native-firebase/database';
import {ExerciseDetailsForm} from '../types/CommonTypes';

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
  return await database().ref(path).child(`${userId}/${subpath}`).once('value');
};

export const getSubArray = async (
  path: string,
  subpath: string,
  userId: string,
) => {
  const snapshot = await getSubData(path, subpath, userId);

  const array: Array<ExerciseDetailsForm> = [];
  snapshot.forEach((childSnapshot: FirebaseDatabaseTypes.DataSnapshot) => {
    const item = childSnapshot.val();
    const newItem = {
      id: childSnapshot.key,
      ...item,
    };
    array.push(newItem);
    return undefined;
  });

  return array;
};

export const saveData = async <T>(path: string, userId: string, data: T) => {
  return await database().ref(path).child(userId).set(data);
};

export const upsertFirebaseItem = async <T>(
  path: string,
  subpath: string,
  item: T,
  key?: string,
) => {
  const itemsRef = database().ref(path).child(`${subpath}`);
  if (key) {
    itemsRef.update({[key]: item});
  } else {
    itemsRef.push(item);
  }
};
