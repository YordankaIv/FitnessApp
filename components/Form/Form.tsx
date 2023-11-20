import React from 'react';
import {View, Text} from 'react-native';
import Input from '../Input/Input';
import {Controller, useForm} from 'react-hook-form';
import Button from '../Button/Button';
import {FormButton, FormField} from '../../types/CommonTypes';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Form: React.FC<{
  fields: FormField[];
  buttons: FormButton[];
}> = ({fields, buttons}) => {
  const {handleSubmit, control} = useForm();

  return (
    <View style={[globalStyle.flex, style.formContainer]}>
      {fields.map(field => (
        <View key={field.name} style={style.fieldContainer}>
          <Text
            style={[
              style.label,
              globalStyle.FontPlayfairDisplay,
              globalStyle.LSize,
            ]}>
            {field.label}
          </Text>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <View style={style.field}>
                <Input
                  placeholder={field.placeholder}
                  onChangeText={val => onChange(val)}
                  keyboardType={field.keyboardType}
                  secureTextEntry={field.secureTextEntry}
                  inputValue={value}
                />
              </View>
            )}
            name={field.name}
            rules={{required: true}}
          />
        </View>
      ))}

      {buttons.map(button => (
        <View key={button.title} style={style.buttonContainer}>
          <Button
            title={button.title}
            onPress={
              button.type === 'submit'
                ? handleSubmit(button.onPress)
                : button.onPress
            }
          />
        </View>
      ))}
    </View>
  );
};

export default Form;
