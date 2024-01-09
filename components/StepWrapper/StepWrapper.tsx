import React from 'react';
import {Image, View} from 'react-native';
import DefaultText from '../DefaultText/DefaultText';

import globalStyle from '../../assets/styles/globalStyle';

const StepWrapper: React.FC<{component: React.FC; header: string}> = ({
  component,
  header,
}) => {
  const WrappedComponent = component;

  return (
    <View style={globalStyle.flex}>
      <View>
        <Image source={require('../../assets/images/wizard_girl.png')} />
        <View style={globalStyle.wizardHeader}>
          <DefaultText
            customStyle={[
              globalStyle.XLSize,
              globalStyle.bolderWeight,
              globalStyle.header,
            ]}>
            {header}
          </DefaultText>
        </View>
      </View>
      <WrappedComponent />
    </View>
  );
};

export default StepWrapper;
