import {KeyboardTypeOptions} from 'react-native';

export type Data = {[key: string]: string};
export type ButtonType = 'submit' | 'reset' | 'button';

export type FormField = {
  label: string;
  name: string;
  required: boolean;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean | undefined;
};

export type FormButton = {
  title: string;
  type?: ButtonType;
  onPress: (data?: Data) => void;
};
