import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {Button} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
import {intro, wizard} from '../../utils/constants';
import {Navigation} from '../../types/CommonTypes';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Intro: React.FC = () => {
  const navigation = useNavigation<Navigation>();

  return (
    <SafeAreaView style={[globalStyle.flex, style.loginContainer]}>
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
                <Text
                  style={[
                    globalStyle.FontPlayfairDisplay,
                    globalStyle.XXXLSize,
                    globalStyle.bolderWeight,
                    globalStyle.header,
                  ]}>
                  {intro.APP_NAME}
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    globalStyle.FontPlayfairDisplay,
                    globalStyle.MSize,
                    globalStyle.header,
                  ]}>
                  {intro.HEADER}
                </Text>
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
    </SafeAreaView>
  );
};

export default Intro;
