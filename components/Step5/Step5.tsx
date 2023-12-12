import React from 'react';
import {View} from 'react-native';
import {wizard} from '../../utils/constants';
import {selectWizard} from '../../redux/reducers/WizardData';
import {useSelector} from 'react-redux';
import {fitnessWizardSummary} from '../../utils/fitnessConstants';
import DefaultText from '../DefaultText/DefaultText';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Step5: React.FC = () => {
  const wizardData = useSelector(selectWizard);

  return (
    <View style={style.summaryContainer}>
      <View style={style.summaryBlock}>
        {fitnessWizardSummary.map((summary, index) => (
          <View style={style.accountDetails} key={index}>
            <View style={globalStyle.MMarginRight}>
              <DefaultText
                key={index + summary.label}
                customStyle={[
                  globalStyle.MSize,
                  globalStyle.bolderWeight,
                  style.summaryText,
                ]}>
                {summary.label}
              </DefaultText>
            </View>
            <View>
              <DefaultText
                key={index + summary.name}
                customStyle={[globalStyle.MSize, style.summaryText]}>
                {wizardData[summary.name]}
              </DefaultText>
            </View>
          </View>
        ))}
      </View>
      <View style={[globalStyle.LMarginTop, style.summaryBlock]}>
        <DefaultText
          customStyle={[
            globalStyle.LSize,
            globalStyle.bolderWeight,
            style.summaryText,
          ]}>
          {wizard.WORKOUTS_LABEL}
        </DefaultText>
        {wizardData.workouts.map((workout, index) => (
          <DefaultText
            key={index + workout.label}
            customStyle={[globalStyle.MSize, style.summaryText]}>
            {workout.label}
          </DefaultText>
        ))}
      </View>
    </View>
  );
};

export default Step5;
