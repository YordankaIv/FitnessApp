import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  loginContainer: {
    backgroundColor: Colors.pink,
  },
  header: {
    color: Colors.white,
    textAlign: 'center',
  },
  registrationButton: {
    alignItems: 'center',
    marginTop: verticalScale(15),
  },
  tabBar: {
    backgroundColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
  },
  tabBarIndicator: {
    borderBottomColor: 'white',
  },
  tabBarContentContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sceneContainer: {
    backgroundColor: 'transparent',
  },
});

export default style;
