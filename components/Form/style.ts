import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  formContainer: {
    width: '100%',
  },
  fieldContainer: {
    marginVertical: verticalScale(8),
  },
  label: {
    marginBottom: verticalScale(5),
  },
  field: {
    backgroundColor: Colors.lightPink,
    borderRadius: horizontalScale(25),
    paddingHorizontal: horizontalScale(10),
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default style;
