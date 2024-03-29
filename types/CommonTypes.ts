import {TextInputProps, TextStyle} from 'react-native';
import store from '../redux/store';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FieldPath, FieldValues} from 'react-hook-form';
import {PropsWithChildren} from 'react';

export enum Fields {
  email = 'email',
  password = 'password',
  fullName = 'fullName',
  name = 'name',
  age = 'age',
  weight = 'weight',
  height = 'height',
  duration = 'duration',
  description = 'description',
  times = 'times',
}

export enum KeyboardType {
  email = 'email-address',
  password = 'email-address',
  numeric = 'numeric',
}

export enum ButtonType {
  submit = 'submit',
  reset = 'reset',
  button = 'button',
}

export enum ReturnKeyType {
  next = 'next',
  done = 'done',
}

export type ParamsType = {workoutKey?: string; exerciseKey?: string};
export type RootState = ReturnType<typeof store.getState>;
export type HookBooleanReturnType = () => boolean;
export type SwitchType = {initialState: boolean; onPress: () => void};
export type IconType = {color: string; size: number; icon: IconProp};
export type ErrorType = {code: string};
export type Navigation = {
  navigate: (props: string, params?: ParamsType) => void;
  jumpTo: (props: string) => void;
  goBack: () => void;
};

export type RadioGroupProps = {
  radioButtons: Array<{value: string}>;
  onSelect: (option: string) => void;
  selectedValue?: string;
};

export type StepWrapperProps = {component: React.FC; header: string};

export type WorkoutListItem = {label: string; checked: boolean; key?: string};
export type Workout = {label: string; name: string};

export type FormField<T extends FieldValues> = TextInputProps & {
  label: string;
  name: FieldPath<T>;
  required: boolean;
};

export type FormButton<T> = {
  title: string;
  type?: ButtonType;
  onPress: (formValues?: T) => void;
};

export type InputProps = TextInputProps & {
  label?: string;
  onInputBlur?: (val: string) => void;
};

export type FirebaseUser = {
  status: boolean;
  data: {
    displayName: string | null;
    email: string | null;
    token: string;
  };
};

export type DefaultTextProps = PropsWithChildren & {
  customStyle?: TextStyle | Array<TextStyle>;
};

export interface ExerciseFormProps {
  submitButtonTitle: string;
  onPressSubmit: (exerciseDetails: ExerciseDetailsForm | undefined) => void;
  initialExerciseValues?: ExerciseDetailsForm;
}

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

export interface ExerciseDetailsForm {
  id: string;
  name: string;
  duration: string;
  times: string;
  description: string;
}
