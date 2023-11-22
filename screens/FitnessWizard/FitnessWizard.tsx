import React, {useEffect, useState} from 'react';
import {Image, Keyboard, SafeAreaView, ScrollView} from 'react-native';
import {Wizard} from 'react-use-wizard';
import {Step1} from '../../components/Step1/Step1';
import {Step2} from '../../components/Step2/Step2';
import WizardFooter from '../../components/WizardFooter/WizardFooter';

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
        <Wizard startIndex={0} footer={<WizardFooter />}>
          <Step1 />
          <Step2 />
        </Wizard>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FitnessWizard;
