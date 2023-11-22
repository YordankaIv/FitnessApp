import React, {useEffect, useState} from 'react';
import {Image, Keyboard, SafeAreaView, ScrollView} from 'react-native';
import {Wizard} from 'react-use-wizard';
import {Step1, Step2, WizardFooter} from '../../components';
import {wizard} from '../../utils/constants';

import globalStyle from '../../assets/styles/globalStyle';

const FitnessWizard: React.FC = () => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const show = Keyboard.addListener('keyboardDidShow', () => {
      setStatus(true);
    });

    const hide = Keyboard.addListener('keyboardDidHide', () => {
      setStatus(false);
    });

    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  return (
    <SafeAreaView style={globalStyle.flex}>
      {!status && (
        <Image
          style={globalStyle.imageBottom}
          source={require('../../assets/images/ellipse.png')}
        />
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyle.pageContainer}>
        <Wizard
          startIndex={wizard.DEFAULT_WIZARD_INDEX}
          footer={<WizardFooter />}>
          <Step1 />
          <Step2 />
        </Wizard>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FitnessWizard;
