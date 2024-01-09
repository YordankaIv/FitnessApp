import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize, verticalScale} from './scaling';
import {Colors} from '../../utils/colors';

const globalStyle = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  header: {
    color: Colors.white,
    textAlign: 'center',
  },
  wizardHeader: {
    position: 'absolute',
    bottom: verticalScale(50),
    left: horizontalScale(10),
    width: '60%',
  },
  pageContainer: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
  },
  pageMargin: {
    marginHorizontal: horizontalScale(24),
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
  XXXLSize: {
    fontSize: scaleFontSize(48),
  },
  XXLSize: {
    fontSize: scaleFontSize(40),
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
  LMarginBottom: {
    marginBottom: verticalScale(25),
  },
  LMarginTop: {
    marginTop: verticalScale(30),
  },
  MMarginRight: {
    marginRight: horizontalScale(20),
  },
  imageBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  input: {
    borderWidth: 2,
    borderColor: Colors.lightPink,
    backgroundColor: Colors.lightPink,
    borderRadius: horizontalScale(25),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(12),
  },
});

export default globalStyle;
