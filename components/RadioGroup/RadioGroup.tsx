import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import {Colors} from '../../utils/colors';
import DefaultText from '../DefaultText/DefaultText';
import {RadioGroupProps} from '../../types/CommonTypes';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const RadioGroup: React.FC<RadioGroupProps> = ({
  radioButtons,
  onSelect,
  selectedValue,
}) => {
  const [userOption, setUserOption] = useState<string | null>(
    selectedValue ?? null,
  );

  const selectOption = (selectedOption: string) => {
    setUserOption(selectedOption);
    onSelect(selectedOption);
  };

  return (
    <View>
      {radioButtons.map((item, index) => (
        <Pressable
          key={index}
          style={item.value === userOption ? style.selected : style.unselected}
          onPress={() => selectOption(item.value)}>
          <DefaultText
            customStyle={[
              globalStyle.LSize,
              style.option,
              item.value === userOption
                ? {color: Colors.white}
                : {color: Colors.black},
            ]}>
            {item.value}
          </DefaultText>
        </Pressable>
      ))}
    </View>
  );
};

export default RadioGroup;
