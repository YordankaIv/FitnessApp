import React from 'react';
import {Image, Text, View} from 'react-native';

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
          <Text
            style={[
              globalStyle.FontPlayfairDisplay,
              globalStyle.XLSize,
              globalStyle.bolderWeight,
              globalStyle.header,
            ]}>
            {header}
          </Text>
        </View>
      </View>
      <WrappedComponent />
    </View>
  );
};

export default StepWrapper;
