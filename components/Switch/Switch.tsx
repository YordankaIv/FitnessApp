import React, {useState} from 'react';
import {Switch as RNSwitch} from 'react-native';
import {Colors} from '../../utils/colors';
import {SwitchType} from '../../types/CommonTypes';

const Switch: React.FC<SwitchType> = ({initialState, onPress}) => {
  const [isEnabled, setIsEnabled] = useState(initialState);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onPress();
  };

  return (
    <RNSwitch
      trackColor={{false: Colors.gray, true: Colors.pink}}
      thumbColor={Colors.white}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default Switch;
