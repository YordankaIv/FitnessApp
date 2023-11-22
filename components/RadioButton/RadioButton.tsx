import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {Colors} from '../../utils/colors';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const RadioButton: React.FC<{
  data: {value: string}[];
  onSelect: (option: string) => void;
  selectedValue?: string;
}> = ({data, onSelect, selectedValue}) => {
  const [userOption, setUserOption] = useState<string | null>(
    selectedValue ?? null,
  );

  return (
    <View>
      {data.map((item, index) => (
        <Pressable
          key={index}
          style={item.value === userOption ? style.selected : style.unselected}
          onPress={() => {
            setUserOption(item.value);
            onSelect(item.value);
          }}>
          <Text
            style={[
              globalStyle.FontPlayfairDisplay,
              globalStyle.LSize,
              style.option,
              item.value === userOption
                ? {color: Colors.white}
                : {color: Colors.black},
            ]}>
            {item.value}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default RadioButton;
