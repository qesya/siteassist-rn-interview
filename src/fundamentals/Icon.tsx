import React from 'react';
import styled from 'styled-components/native';
import {flexbox, space, color, position} from 'styled-system';
import ION from 'react-native-vector-icons/Ionicons';
import FA5Pro from 'react-native-vector-icons/FontAwesome5';
import {Box, BoxProps} from './Box';
import {Pressable} from './Pressable';

type IconProps = BoxProps & {
  name: string;
  size: number;
  type?: 'fa' | 'ion';
  style?: object;
  circular?: boolean;
  solid?: boolean;
  light?: boolean;
  bold?: boolean;
  inverse?: boolean;
  inverseSize?: number;
  onPress?: () => void;
};

const StyledIconContainer = styled(Box)<IconProps>`
  justify-content: center;
  align-items: center;
  ${({inverse, size, circular}) =>
    inverse && {borderRadius: circular ? size / 2 : '2px'}}
`;

const StyledFA5Pro = styled(FA5Pro)`
  ${flexbox}
  ${space}
  ${color}
  ${position}
`;

const StyledION = styled(ION)`
  ${flexbox}
  ${space}
  ${color}
  ${position}
`;

const Icon: React.FC<IconProps> = ({
  size,
  type = 'fa',
  solid,
  name,
  color,
  style,
  inverse,
  inverseSize,
  circular,
  light,
  bold,
  onPress,
  position,
  top,
  left,
  right,
  bottom,
  ...props
}) => {
  const IconComponent = type === 'fa' ? StyledFA5Pro : StyledION;
  const getIcon = (pressed?) => (
    <StyledIconContainer
      pressed={pressed}
      inverse={inverse}
      size={inverse && (inverseSize || size + 12)}
      opacity={pressed ? 0.6 : 1}
      circular={circular}
      {...props}>
      <IconComponent
        name={name}
        size={size}
        color={color}
        style={style}
        solid={solid}
        light={light}
        bold={bold}
      />
    </StyledIconContainer>
  );
  if (onPress)
    return (
      <Box
        alignItems="baseline"
        position={position}
        left={left}
        right={right}
        top={top}
        bottom={bottom}>
        <Pressable onPress={onPress}>
          {({pressed}) => getIcon(pressed)}
        </Pressable>
      </Box>
    );
  return getIcon();
};

export {Icon};
