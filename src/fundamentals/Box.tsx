import React from 'react';
import {
  SafeAreaView,
  Platform,
  ViewProps,
  KeyboardAvoidingViewProps,
} from 'react-native';
import styled from 'styled-components/native';
import {
  flexbox,
  space,
  color,
  layout,
  border,
  position,
  shadow,
  background,
  FlexboxProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  BackgroundProps,
} from 'styled-system';

type BoxProps = ViewProps &
  FlexboxProps &
  SpaceProps &
  ColorProps &
  LayoutProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  BackgroundProps & {
    opacity?: number;
    keyboardAvoiding?: boolean;
  };

const StyledBox: React.FC<BoxProps> = styled.View<BoxProps>`
  flex-direction: column;
  ${space}
  ${color}
  ${layout}
  ${border}
  ${shadow}
  ${flexbox}
  ${background}
  ${position}
  ${props => props.opacity && `opacity: ${props.opacity};`}
`;

const KeyboardAvoidingBox: React.FC<
  BoxProps & KeyboardAvoidingViewProps
> = styled.KeyboardAvoidingView<BoxProps>`
  flex-direction: column;
  ${space}
  ${color}
  ${layout}
  ${border}
  ${shadow}
  ${flexbox}
  ${background}
  ${position}
  ${props => props.opacity && `opacity: ${props.opacity};`}
`;

const SafeAreaBox: React.FC<
  BoxProps & {edges?: Array<'top' | 'left' | 'right' | 'bottom'>}
> = styled(SafeAreaView)<BoxProps>`
  flex-direction: column;
  ${space}
  ${color}
  ${layout}
  ${border}
  ${shadow}
  ${flexbox}
  ${background}
  ${position}
  ${props => props.opacity && `opacity: ${props.opacity};`}
`;

const Box: React.FC<BoxProps> = ({keyboardAvoiding, children, ...props}) => {
  if (keyboardAvoiding) {
    return (
      <KeyboardAvoidingBox
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={10}
        {...props}>
        {children}
      </KeyboardAvoidingBox>
    );
  }
  return <StyledBox {...props}>{children}</StyledBox>;
};

export {Box, SafeAreaBox};
export type {BoxProps};
