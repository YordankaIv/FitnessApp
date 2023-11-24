import React, {useEffect, useState} from 'react';
import {Image, Keyboard, SafeAreaView, ScrollView} from 'react-native';
import {Wizard} from 'react-use-wizard';
import {Step1, Step2, StepWrapper, WizardFooter} from '../../components';
import {wizard} from '../../utils/constants';

import globalStyle from '../../assets/styles/globalStyle';

const FitnessWizard: React.FC = () => {
  const [status, setStatus] = useState(false);

  const wizardSteps = [
    {component: Step1, header: wizard.ABOUT_YOU},
    {component: Step2, header: wizard.FITNESS_LEVEL},
  ];

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
          {wizardSteps.map((step, index) => (
            <StepWrapper key={index} {...step} />
          ))}
        </Wizard>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FitnessWizard;
