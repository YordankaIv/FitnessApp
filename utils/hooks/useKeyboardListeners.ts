import {useEffect, useState} from 'react';
import {Keyboard, Platform} from 'react-native';

const useKeyboardListeners: () => boolean = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => setIsVisible(true),
    );

    const keyboardHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => setIsVisible(false),
    );

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return isVisible;
};

export default useKeyboardListeners;
