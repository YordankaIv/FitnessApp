import {StyleSheet} from 'react-native';
import {scaleFontSize, verticalScale} from './scaling';

const globalStyle = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  error: {
    fontFamily: 'PlayfairDisplay',
    fontSize: scaleFontSize(16),
    marginBottom: verticalScale(24),
  },
  success: {
    fontFamily: 'PlayfairDisplay',
    fontSize: scaleFontSize(16),
    marginBottom: verticalScale(24),
  },
  normalWeight: {
    fontWeight: '400',
  },
  mediumWeight: {
    fontWeight: '500',
  },
  boldWeight: {
    fontWeight: '600',
  },
  bolderWeight: {
    fontWeight: '700',
  },
  FontPlayfairDisplay: {
    fontFamily: 'PlayfairDisplay',
  },
});

export default globalStyle;
