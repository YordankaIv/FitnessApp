import React from 'react';
import {ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import constants from '../../utils/constants';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Login from '../../components/Login/Login';
import Registration from '../../components/Registration/Registration';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Account: React.FC = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView style={[globalStyle.flex, style.loginContainer]}>
      <ImageBackground
        resizeMode={'cover'}
        source={require('../../assets/images/blob.png')}
        style={globalStyle.image}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={globalStyle.pageContainer}>
          <Tab.Navigator
            screenOptions={{
              swipeEnabled: false,
              tabBarStyle: style.tabBar,
              tabBarIndicatorStyle: style.tabBarIndicator,
              tabBarContentContainerStyle: style.tabBarContentContainer,
            }}
            sceneContainerStyle={style.sceneContainer}>
            <Tab.Screen name={constants.SIGN_IN} component={Login} />
            <Tab.Screen name={constants.SIGN_UP} component={Registration} />
          </Tab.Navigator>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Account;
