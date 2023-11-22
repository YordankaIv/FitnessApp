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
  registrationButton: {
    alignItems: 'center',
    marginTop: verticalScale(15),
  },
});

export default style;
