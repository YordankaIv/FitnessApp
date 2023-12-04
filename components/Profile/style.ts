import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  profileText: {
    color: Colors.black,
    textAlign: 'center',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: verticalScale(30),
  },
  profileImage: {
    height: verticalScale(200),
    width: horizontalScale(200),
    borderRadius: horizontalScale(100),
  },
  profileHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileBlock: {
    height: verticalScale(100),
    width: horizontalScale(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: horizontalScale(15),
    marginRight: horizontalScale(20),
  },
});

export default style;
