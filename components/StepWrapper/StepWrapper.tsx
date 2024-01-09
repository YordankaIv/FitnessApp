import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import DefaultText from '../DefaultText/DefaultText';
import {wizard} from '../../utils/constants';
import {StepWrapperProps} from '../../types/CommonTypes';

import globalStyle from '../../assets/styles/globalStyle';

const StepWrapper: React.FC<StepWrapperProps> = ({component, header}) => {
  const WrappedComponent = component;
  const ScreenHeight = Dimensions.get('window').height - wizard.FOOTER_HEIGHT;

  return (
    <View style={[globalStyle.flex, {height: ScreenHeight}]}>
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
