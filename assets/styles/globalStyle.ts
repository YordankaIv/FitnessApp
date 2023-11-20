import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize, verticalScale} from './scaling';

const globalStyle = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  pageContainer: {
    marginHorizontal: horizontalScale(24),
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
  XLSize: {
    fontSize: scaleFontSize(25),
  },
  LSize: {
    fontSize: scaleFontSize(18),
  },
  MSize: {
    fontSize: scaleFontSize(16),
  },
  SSize: {
    fontSize: scaleFontSize(12),
  },
  FontPlayfairDisplay: {
    fontFamily: 'PlayfairDisplay',
  },
  marginBottom25: {
    marginBottom: verticalScale(25),
  },
});

export default globalStyle;
