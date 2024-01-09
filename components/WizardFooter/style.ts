import {StyleSheet} from 'react-native';
import {verticalScale} from '../../assets/styles/scaling';
import {wizard} from '../../utils/constants';

const style = StyleSheet.create({
  footerContainer: {
    height: verticalScale(wizard.FOOTER_HEIGHT),
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(-23),
  },
});

export default style;
