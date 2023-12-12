import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {InputProps} from '../../types/CommonTypes';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Input: React.FC<InputProps> = ({
  label,
  onInputBlur,
  onChangeText,
  ...rest
}) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const onFieldBlur = () => {
    setIsFocused(false);
    onInputBlur?.(value);
  };

  return (
    <View>
      {label && (
        <Text
          style={[
            style.label,
            globalStyle.FontPlayfairDisplay,
            globalStyle.MSize,
          ]}>
          {label}
        </Text>
      )}
      <TextInput
        style={[
          globalStyle.input,
          globalStyle.bolderWeight,
          globalStyle.FontPlayfairDisplay,
          globalStyle.MSize,
          isFocused && style.focusedInput,
        ]}
        onBlur={onFieldBlur}
        onFocus={() => setIsFocused(true)}
        onChangeText={val => {
          setValue(val);
          onChangeText?.(val);
        }}
        {...rest}
      />
    </View>
  );
};

export default Input;
