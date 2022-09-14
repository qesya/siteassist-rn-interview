import React from 'react';
import {PressableProps} from 'react-native';
import styled from 'styled-components/native';
import {
  flexbox,
  space,
  color,
  layout,
  border,
  position,
  FlexboxProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  BorderProps,
  PositionProps,
} from 'styled-system';

type PressableType = PressableProps &
  FlexboxProps &
  SpaceProps &
  ColorProps &
  LayoutProps &
  BorderProps &
  PositionProps;

const Pressable: React.FC<PressableType> = styled.Pressable`
  ${space}
  ${color}
  ${layout}
  ${border}
  ${flexbox}
  ${position}
`;

export {Pressable};
export type {PressableProps};
