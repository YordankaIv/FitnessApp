import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
import {Colors} from '../../utils/colors';

const style = StyleSheet.create({
  button: {
    height: verticalScale(45),
    paddingHorizontal: horizontalScale(25),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
    backgroundColor: Colors.white,
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    textAlign: 'center',
    color: Colors.black,
  },
});

export default style;
