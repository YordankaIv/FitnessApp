import React from 'react';
import {View, Pressable} from 'react-native';
import DefaultText from '../DefaultText/DefaultText';

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
        <DefaultText
          customStyle={[
            style.title,
            globalStyle.bolderWeight,
            globalStyle.LSize,
          ]}>
          {title}
        </DefaultText>
      </Pressable>
    </View>
  );
};

export default Button;
