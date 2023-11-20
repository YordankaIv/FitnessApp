import {StyleSheet} from 'react-native';
import {verticalScale} from '../../assets/styles/scaling';
import {Colors} from '../../utils/colors';

const style = StyleSheet.create({
  label: {
    color: Colors.white,
  },
  input: {
    paddingVertical: verticalScale(12),
  },
});

export default style;
