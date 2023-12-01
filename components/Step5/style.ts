import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
import {Colors} from '../../utils/colors';

const style = StyleSheet.create({
  summaryContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: horizontalScale(30),
  },
  summaryBlock: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: horizontalScale(18),
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
  },
  accountDetails: {
    flexDirection: 'row',
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
  summaryText: {
    color: Colors.black,
  },
});

export default style;
