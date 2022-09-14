import React from 'react';
import styled from 'styled-components/native';
import {Box, SafeAreaBox, BoxProps} from './Box';

const Flex: React.FC<BoxProps> = styled(Box)`
  flex-direction: ${({flexDirection}) =>
    flexDirection ? flexDirection : 'row'};
`;

const SafeAreaFlex: React.FC<
  BoxProps & {edges?: Array<'top' | 'left' | 'right' | 'bottom'>}
> = styled(SafeAreaBox)`
  flex-direction: ${({flexDirection}) =>
    flexDirection ? flexDirection : 'row'};
`;

export {Flex, SafeAreaFlex};
