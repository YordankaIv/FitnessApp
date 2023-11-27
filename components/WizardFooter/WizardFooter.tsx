import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Button} from '../../components';
import {useWizard} from 'react-use-wizard';
import {wizard} from '../../utils/constants';
import {keyboardListeners} from '../../utils/utils';

import style from './style';

const WizardFooter: React.FC = () => {
  const [status, setStatus] = useState(false);
  const {isFirstStep, isLastStep, previousStep, nextStep} = useWizard();

  useEffect(() => {
    keyboardListeners(
      () => setStatus(true),
      () => setStatus(false),
    );
  }, []);

  return (
    <View style={style.headerContainer}>
      {!status && (
        <View style={style.buttonContainer}>
          {!isFirstStep && (
            <Button title={wizard.BACK} onPress={() => previousStep()} />
          )}
          {!isFirstStep && !isLastStep && (
            <Button title={wizard.NEXT} onPress={() => nextStep()} />
          )}
        </View>
      )}
    </View>
  );
};

export default WizardFooter;
