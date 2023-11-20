import React from 'react';
import {View, Text, Pressable} from 'react-native';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Button: React.FC<{
  title: string;
  onPress: () => void;
  isDisabled?: boolean;
}> = ({onPress, title, isDisabled = false}) => {
  return (
    <View>
      <Pressable
        disabled={isDisabled}
        onPress={() => onPress()}
        style={[style.button, isDisabled && style.disabled]}>
        <Text
          style={[
            style.title,
            globalStyle.FontPlayfairDisplay,
            globalStyle.bolderWeight,
            globalStyle.LSize,
          ]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;
