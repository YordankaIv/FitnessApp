import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  formContainer: {
    width: '100%',
  },
  fieldContainer: {
    marginVertical: verticalScale(8),
  },
  label: {
    color: Colors.black,
    marginBottom: verticalScale(5),
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default style;
