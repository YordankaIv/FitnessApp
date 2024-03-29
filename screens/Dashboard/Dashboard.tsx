import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabs} from '../../utils/constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faFire,
  faRocket,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import {ExercisesStackScreen, Profile} from '../../components';
import {IconType} from '../../types/CommonTypes';

const Dashboard: React.FC = () => {
  const Tab = createBottomTabNavigator();

  const menuTabs = [
    {name: tabs.PROFILE, component: Profile, icon: faUserCircle},
    {name: tabs.EXERCISES, component: ExercisesStackScreen, icon: faRocket},
    // {name: tabs.WORKOUTS, component: Profile, icon: faFire},
  ];

  const setTabBarIcon = (props: IconType) => <FontAwesomeIcon {...props} />;

  return (
    <Tab.Navigator
      initialRouteName={tabs.PROFILE}
      screenOptions={{headerShown: false}}>
      {menuTabs.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarLabel: tab.name,
            tabBarIcon: ({color, size}) =>
              setTabBarIcon({color, size, icon: tab.icon}),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Dashboard;
