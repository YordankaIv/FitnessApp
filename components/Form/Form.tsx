import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Controller, FieldValues, useForm} from 'react-hook-form';
import {Button, Input} from '../../components';
import {FormField, FormProps} from '../../types/CommonTypes';

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
      field.keyboardType === 'numeric' ? value.replace(/[^0-9]/g, '') : value;
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
              <View style={globalStyle.input}>
                <Input
                  placeholder={field.placeholder}
                  onChangeText={val => onChangeValue(val, field, onChange)}
                  returnKeyType={'next'}
                  keyboardType={field.keyboardType}
                  secureTextEntry={field.secureTextEntry}
                  inputValue={value}
                />
              </View>
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
