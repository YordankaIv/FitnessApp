import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  addExerciseButton: {
    alignSelf: 'flex-end',
    marginTop: verticalScale(15),
    alignItems: 'center',
    justifyContent: 'center',
    width: horizontalScale(38),
    height: verticalScale(38),
    backgroundColor: Colors.white,
    borderRadius: horizontalScale(10),
    borderColor: Colors.black,
    borderWidth: 1,
  },
  exercisesListContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  exerciseContainer: {
    backgroundColor: Colors.lightPink,
    borderRadius: horizontalScale(10),
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(25),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: verticalScale(10),
  },
  exerciseText: {
    color: Colors.black,
  },
});

export default style;
