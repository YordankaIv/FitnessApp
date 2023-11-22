import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
import constants from '../../utils/constants';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Intro: React.FC = () => {
  const navigation = useNavigation<{navigate: (props: string) => void}>();

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
              <View style={globalStyle.marginBottom25}>
                <Text
                  style={[
                    globalStyle.FontPlayfairDisplay,
                    globalStyle.XLSize,
                    globalStyle.bolderWeight,
                    globalStyle.header,
                  ]}>
                  {constants.APP_NAME}
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    globalStyle.FontPlayfairDisplay,
                    globalStyle.MSize,
                    globalStyle.header,
                  ]}>
                  {constants.HEADER}
                </Text>
              </View>
            </View>
            <View>
              <Button
                title={constants.NEXT}
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
