import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Input from '../Input/Input';
import {Controller, useForm} from 'react-hook-form';
import Button from '../Button/Button';
import {Data, FormButton, FormField} from '../../types/CommonTypes';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Form: React.FC<{
  fields: FormField[];
  buttons: FormButton[];
  formData?: Data;
}> = ({fields, buttons, formData}) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: {isValid},
  } = useForm();

  useEffect(() => {
    reset(formData);
  }, [formData]);

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
                  onChangeText={val => {
                    const currentVal =
                      field.keyboardType === 'numeric'
                        ? val.replace(/[^0-9]/g, '')
                        : val;
                    onChange(currentVal);
                  }}
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
