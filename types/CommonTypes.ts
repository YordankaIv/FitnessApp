import {KeyboardTypeOptions, ReturnKeyTypeOptions} from 'react-native';
import store from '../redux/store';

export type Data = {[key: string]: string};
export type ButtonType = 'submit' | 'reset' | 'button';
export type RootState = ReturnType<typeof store.getState>;

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

export type InputProps = {
  placeholder?: string;
  inputValue?: string;
  label?: string;
  returnKeyType?: ReturnKeyTypeOptions;
  onChangeText?: (val: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
};
