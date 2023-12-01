import {KeyboardTypeOptions, ReturnKeyTypeOptions} from 'react-native';
import store from '../redux/store';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

export type StringObject = {[key: string]: string};
export type ButtonType = 'submit' | 'reset' | 'button';
export type RootState = ReturnType<typeof store.getState>;
export type HookBooleanReturnType = () => boolean;
export type IconType = {color: string; size: number; icon: IconProp};
export type Navigation = {navigate: (props: string) => void};

export type ListItem = {label: string; checked: boolean};
export type Workout = {label: string; name: string};

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
  onPress: (data?: StringObject) => void;
};

export type InputProps = {
  placeholder?: string;
  inputValue?: string;
  label?: string;
  returnKeyType?: ReturnKeyTypeOptions;
  onChangeText?: (val: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  onInputBlur?: (val: string) => void;
};
