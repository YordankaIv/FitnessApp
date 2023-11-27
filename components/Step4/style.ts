import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
import {Colors} from '../../utils/colors';

const style = StyleSheet.create({
  workoutListContainer: {
    maxHeight: verticalScale(200),
    marginTop: verticalScale(20),
  },
  selectedWorkoutItem: {
    borderBottomWidth: 1,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    maxHeight: verticalScale(40),
    minHeight: verticalScale(40),
    borderColor: Colors.black,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(8),
    marginBottom: horizontalScale(8),
    marginRight: horizontalScale(13),
    flexBasis: '100%',
  },
  itemLabel: {
    color: Colors.black,
  },
});

export default style;
