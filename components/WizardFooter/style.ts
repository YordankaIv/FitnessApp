import {StyleSheet} from 'react-native';
import {verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  headerContainer: {
    height: verticalScale(90),
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(-23),
  },
});

export default style;
