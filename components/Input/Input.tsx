import React, {useState} from 'react';
import {View, Text, TextInput, KeyboardTypeOptions} from 'react-native';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Input: React.FC<{
  placeholder: string;
  inputValue?: string;
  label?: string;
  onChangeText?: (val: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}> = ({
  label,
  placeholder,
  inputValue,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
}) => {
  const [value, setValue] = useState('');

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
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder ?? undefined}
        style={[
          style.input,
          globalStyle.FontPlayfairDisplay,
          globalStyle.MSize,
        ]}
        value={inputValue ?? value}
        onChangeText={val => {
          setValue(val);
          onChangeText && onChangeText(val);
        }}
      />
    </View>
  );
};

export default Input;
