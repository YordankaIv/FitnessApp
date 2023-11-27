import React from 'react';
import {View} from 'react-native';
import {Button} from '../../components';
import {useWizard} from 'react-use-wizard';
import {wizard} from '../../utils/constants';

import style from './style';

const WizardFooter: React.FC = () => {
  const {isFirstStep, isLastStep, previousStep, nextStep} = useWizard();

  return (
    <View style={style.headerContainer}>
      <View style={style.buttonContainer}>
        {!isFirstStep && (
          <Button title={wizard.BACK} onPress={() => previousStep()} />
        )}
        {!isFirstStep && !isLastStep && (
          <Button title={wizard.NEXT} onPress={() => nextStep()} />
        )}
      </View>
    </View>
  );
};

export default WizardFooter;
