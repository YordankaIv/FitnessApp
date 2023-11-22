import {StyleSheet} from 'react-native';
import {verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  headerContainer: {
    height: verticalScale(90),
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: verticalScale(-23),
  },
});

export default style;
