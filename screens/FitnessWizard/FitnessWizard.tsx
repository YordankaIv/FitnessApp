import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {Wizard} from 'react-use-wizard';
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  StepWrapper,
  WizardFooter,
} from '../../components';
import {wizard} from '../../utils/constants';
import {useKeyboardListeners} from '../../utils/hooks';

import globalStyle from '../../assets/styles/globalStyle';

const FitnessWizard: React.FC = () => {
  const isKeyboardVisible = useKeyboardListeners();

  const wizardSteps = [
    {component: Step1, header: wizard.ABOUT_YOU},
    {component: Step2, header: wizard.FITNESS_LEVEL},
    {component: Step3, header: wizard.FITNESS_GOAL},
    {component: Step4, header: wizard.FITNESS_WORKOUTS},
    {component: Step5, header: wizard.SUMMARY},
    {component: Step6, header: wizard.FINAL},
  ];

  return (
    <View style={globalStyle.flex}>
      {!isKeyboardVisible && (
        <Image
          style={globalStyle.imageBottom}
          source={require('../../assets/images/ellipse.png')}
        />
      )}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyle.pageMargin}>
        <Wizard
          startIndex={wizard.DEFAULT_WIZARD_INDEX}
          footer={<WizardFooter />}>
          {wizardSteps.map((step, index) => (
            <StepWrapper key={index} {...step} />
          ))}
        </Wizard>
      </ScrollView>
    </View>
  );
};

export default FitnessWizard;
