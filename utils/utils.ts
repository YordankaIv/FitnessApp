import {Keyboard, KeyboardEventListener} from 'react-native';

export const keyboardListeners = (
  showListener: KeyboardEventListener,
  hideListener: KeyboardEventListener,
) => {
  const show = Keyboard.addListener('keyboardDidShow', showListener);

  const hide = Keyboard.addListener('keyboardDidHide', hideListener);

  return () => {
    show.remove();
    hide.remove();
  };
};
