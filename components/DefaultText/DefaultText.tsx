import React from 'react';
import {Text} from 'react-native';
import {DefaultTextProps} from '../../types/CommonTypes';

import globalStyle from '../../assets/styles/globalStyle';

const DefaultText: React.FC<DefaultTextProps> = ({children, customStyle}) => (
  <Text style={[globalStyle.FontPlayfairDisplay, customStyle]}>{children}</Text>
);

export default DefaultText;
