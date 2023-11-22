import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  option: {
    textAlign: 'left',
    paddingLeft: horizontalScale(10),
  },
  unselected: {
    marginVertical: verticalScale(5),
    marginHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(5),
    borderLeftWidth: 3,
    borderColor: Colors.black,
  },
  selected: {
    backgroundColor: Colors.pink,
    color: Colors.white,
    marginVertical: verticalScale(6),
    marginHorizontal: horizontalScale(6),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    borderRadius: horizontalScale(10),
  },
});

export default style;
