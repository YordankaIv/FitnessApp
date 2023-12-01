import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {paths, wizard} from '../../utils/constants';
import {useQuery} from 'react-query';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBolt, faHeart} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../../utils/colors';
import {getData, getUserId} from '../../utils/firebaseUtils';
import {StringObject} from '../../types/CommonTypes';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Profile: React.FC = () => {
  const uid = getUserId();

  const getUserData = async () =>
    await (await getData(paths.USERS_PATH, uid)).val();

  const {data: userData, isFetching} = useQuery<StringObject, Error>(
    'user',
    getUserData,
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
          <Text
            style={[
              globalStyle.FontPlayfairDisplay,
              globalStyle.bolderWeight,
              globalStyle.XXLSize,
              style.profileText,
            ]}>
            {userData?.name}
          </Text>
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
                  size={22}
                  color={Colors.black}
                />
                <Text
                  style={[
                    globalStyle.FontPlayfairDisplay,
                    globalStyle.LSize,
                    style.profileText,
                  ]}>
                  {userData && userData[info.title.toLocaleLowerCase()]}
                </Text>
                <Text
                  style={[globalStyle.FontPlayfairDisplay, globalStyle.LSize]}>
                  {info.title}
                </Text>
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
