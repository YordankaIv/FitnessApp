import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Controller, FieldValues, useForm} from 'react-hook-form';
import {Button, Input} from '../../components';
import {
  ButtonType,
  FormField,
  FormProps,
  KeyboardType,
  ReturnKeyType,
} from '../../types/CommonTypes';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Form = <T extends FieldValues>({
  fields,
  buttons,
  formData,
}: FormProps<T>) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: {isValid},
  } = useForm<T>();

  useEffect(() => {
    reset(formData);
  }, [formData, reset]);

  const onChangeValue = (
    value: string,
    field: FormField<T>,
    onChange: (event: string) => void,
  ) => {
    const currentVal =
      field.keyboardType === KeyboardType.numeric
        ? value.replace(/[^0-9]/g, '')
        : value;
    onChange(currentVal);
  };

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
              <Input
                placeholder={field.placeholder}
                onChangeText={val => onChangeValue(val, field, onChange)}
                returnKeyType={ReturnKeyType.next}
                keyboardType={field.keyboardType}
                secureTextEntry={field.secureTextEntry}
                value={value}
                multiline={field.multiline}
                numberOfLines={field.numberOfLines}
              />
            )}
            name={field.name}
            rules={{required: field.required}}
          />
        </View>
      ))}

      {buttons.map(button => (
        <View key={button.title} style={style.buttonContainer}>
          <Button
            title={button.title}
            isDisabled={!isValid}
            onPress={
              button.type === ButtonType.submit
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
