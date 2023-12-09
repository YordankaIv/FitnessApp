import {KeyboardTypeOptions, ReturnKeyTypeOptions} from 'react-native';
import store from '../redux/store';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FieldPath, FieldValues} from 'react-hook-form';

export enum Fields {
  email = 'email',
  password = 'password',
  fullName = 'fullName',
  name = 'name',
  age = 'age',
  weight = 'weight',
  height = 'height',
}

export type ParamsType = {key: string};
export type ButtonType = 'submit' | 'reset' | 'button';
export type RootState = ReturnType<typeof store.getState>;
export type HookBooleanReturnType = () => boolean;
export type SwitchType = {initialState: boolean; onPress: () => void};
export type IconType = {color: string; size: number; icon: IconProp};
export type ErrorType = {code: string};
export type Navigation = {
  navigate: (props: string, params?: ParamsType) => void;
  jumpTo: (props: string) => void;
};

export type WorkoutListItem = {label: string; checked: boolean; key?: string};
export type ExerciseListItem = {label: string};
export type Workout = {label: string; name: string};

export type FormField<T extends FieldValues> = {
  label: string;
  name: FieldPath<T>;
  required: boolean;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
};

export type FormButton<T> = {
  title: string;
  type?: ButtonType;
  onPress: (data?: T) => void;
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

export interface User {
  name: string;
  age: string;
  goal: string;
  height: string;
  weight: string;
  level: string;
  workouts: WorkoutListItem[];
}

export interface FormProps<T extends FieldValues> {
  fields: Array<FormField<T>>;
  buttons: Array<FormButton<T>>;
  formData?: T;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface Step1Form {
  name: string;
  age: string;
  weight: string;
  height: string;
}

export interface RegistrationForm {
  fullName: string;
  email: string;
  password: string;
}
