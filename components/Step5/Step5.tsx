import React from 'react';
import {Text, View} from 'react-native';
import {wizard} from '../../utils/constants';
import {selectWizard} from '../../redux/reducers/WizardData';
import {useSelector} from 'react-redux';
import {fitnessWizardSummary} from '../../utils/fitnessConstants';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Step5: React.FC = () => {
  const wizardData = useSelector(selectWizard);

  return (
    <View style={style.summaryContainer}>
      <View style={style.summaryBlock}>
        {fitnessWizardSummary.map((summary, index) => (
          <View style={style.accountDetails}>
            <View style={globalStyle.MMarginRight}>
              <Text
                key={index + summary.label}
                style={[
                  globalStyle.FontPlayfairDisplay,
                  globalStyle.MSize,
                  globalStyle.bolderWeight,
                  style.summaryText,
                ]}>
                {summary.label}
              </Text>
            </View>
            <View>
              <Text
                key={index + summary.name}
                style={[
                  globalStyle.FontPlayfairDisplay,
                  globalStyle.MSize,
                  style.summaryText,
                ]}>
                {wizardData[summary.name]}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <View style={[globalStyle.LMarginTop, style.summaryBlock]}>
        <Text
          style={[
            globalStyle.FontPlayfairDisplay,
            globalStyle.LSize,
            globalStyle.bolderWeight,
            style.summaryText,
          ]}>
          {wizard.WORKOUTS_LABEL}
        </Text>
        {wizardData.workouts.map((workout, index) => (
          <Text
            key={index + workout.label}
            style={[
              globalStyle.FontPlayfairDisplay,
              globalStyle.MSize,
              style.summaryText,
            ]}>
            {workout.label}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Step5;
