import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
import {Colors} from '../../utils/colors';

const style = StyleSheet.create({
  workoutContainer: {
    backgroundColor: Colors.lightPink,
    borderRadius: horizontalScale(10),
    paddingVertical: verticalScale(45),
    paddingHorizontal: horizontalScale(25),
    width: '100%',
    marginVertical: verticalScale(10),
  },
  shadowProp: {
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default style;
