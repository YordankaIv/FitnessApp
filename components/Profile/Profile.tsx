import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {exercises, iconSizes, paths, wizard} from '../../utils/constants';
import {useQuery} from 'react-query';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBolt, faHeart} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../../utils/colors';
import {getData, getUserId} from '../../utils/firebaseUtils';
import {User} from '../../types/CommonTypes';
import DefaultText from '../DefaultText/DefaultText';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Profile: React.FC = () => {
  const uid = getUserId();

  const getUser = async () =>
    await (await getData(paths.USERS_PATH, uid)).val();

  const {data: userData, isFetching} = useQuery<User, Error>(
    exercises.USER_KEY,
    getUser,
  );

  const profileInfoItems = [
    {title: wizard.GOAL, icon: faHeart},
    {title: wizard.LEVEL, icon: faBolt},
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={globalStyle.pageContainer}>
      <View style={[globalStyle.flex]}>
        <View>
          <DefaultText
            customStyle={[
              globalStyle.bolderWeight,
              globalStyle.XXLSize,
              style.profileText,
            ]}>
            {userData?.name}
          </DefaultText>
        </View>
        <View style={style.profileImageContainer}>
          <Image
            resizeMode="cover"
            style={style.profileImage}
            source={require('../../assets/images/avatar_girl.jpg')}
          />
        </View>
        <View style={style.profileHeader}>
          {!isFetching &&
            profileInfoItems.map((info, index) => (
              <View key={index} style={style.profileBlock}>
                <FontAwesomeIcon
                  icon={info.icon}
                  size={iconSizes.MSize}
                  color={Colors.black}
                />
                <DefaultText
                  customStyle={[globalStyle.LSize, style.profileText]}>
                  {userData && userData[info.title.toLocaleLowerCase()]}
                </DefaultText>
                <DefaultText customStyle={globalStyle.LSize}>
                  {info.title}
                </DefaultText>
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
