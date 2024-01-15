import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {Button, DefaultText} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
import {intro, wizard} from '../../utils/constants';
import {Navigation} from '../../types/CommonTypes';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Intro: React.FC = () => {
  const navigation = useNavigation<Navigation>();

  return (
    <View style={[globalStyle.flex, style.loginContainer]}>
      <ImageBackground
        resizeMode={'cover'}
        source={require('../../assets/images/blob.png')}
        style={globalStyle.image}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={globalStyle.pageContainer}>
          <View style={[globalStyle.flex, style.container]}>
            <View style={globalStyle.image}>
              <View style={globalStyle.LMarginBottom}>
                <DefaultText
                  customStyle={[
                    globalStyle.XXXLSize,
                    globalStyle.bolderWeight,
                    globalStyle.header,
                  ]}>
                  {intro.APP_NAME}
                </DefaultText>
              </View>
              <View>
                <DefaultText
                  customStyle={[globalStyle.MSize, globalStyle.header]}>
                  {intro.HEADER}
                </DefaultText>
              </View>
            </View>
            <View style={style.buttonContainer}>
              <Button
                title={wizard.NEXT}
                onPress={() => navigation.navigate(Routes.Account)}
              />
            </View>
            <Image source={require('../../assets/images/fit_girl.png')} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Intro;
