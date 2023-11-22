import React from 'react';
import {View} from 'react-native';
import Button from '../Button/Button';
import {useWizard} from 'react-use-wizard';
import constants from '../../utils/constants';

import style from './style';

const WizardFooter: React.FC = () => {
  const {isFirstStep, previousStep} = useWizard();

  return (
    <View style={style.headerContainer}>
      <View style={style.buttonContainer}>
        {!isFirstStep && (
          <Button title={constants.BACK} onPress={() => previousStep()} />
        )}
      </View>
    </View>
  );
};

export default WizardFooter;
