export type Data = {[key: string]: string};
export type ButtonType = 'submit' | 'reset' | 'button';

export type FormField = {
  label: string;
  placeholder: string;
  name: string;
  required: boolean;
};

export type FormButton = {
  title: string;
  type?: ButtonType;
  onPress: (data?: Data) => void;
};
