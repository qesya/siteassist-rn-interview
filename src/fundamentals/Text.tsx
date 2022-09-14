import React from 'react';
import ReactNative from 'react-native';
import styled from 'styled-components/native';
import {
  flexbox,
  space,
  color,
  typography,
  layout,
  position,
  FlexboxProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  TypographyProps,
} from 'styled-system';
import {Flex} from './Flex';

type TextProps = ReactNative.TextProps &
  FlexboxProps &
  SpaceProps &
  ColorProps &
  LayoutProps &
  TypographyProps &
  PositionProps & {
    type?: string;
    opacity?: number;
    bulletPoint?: boolean;
  };

const StyledText: React.FC<TextProps> = styled(ReactNative.Text)<TextProps>`
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${position}
  ${props => props.opacity && `opacity: ${props.opacity};`}
`;

const Text: React.FC<TextProps> = ({children, bulletPoint, ...props}) => {
  const withBulletPoint = text => {
    if (bulletPoint) {
      return (
        <Flex alignItems="center">
          <StyledText mr="10" mb={3}>
            {'\u2022'}
          </StyledText>
          {text}
        </Flex>
      );
    }
    return text;
  };
  return withBulletPoint(<StyledText {...props}>{children}</StyledText>);
};

export {Text};
