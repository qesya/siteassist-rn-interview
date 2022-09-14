import ReactNative from 'react-native';
import styled from 'styled-components/native';
import {
  flexbox,
  space,
  color,
  border,
  position,
  layout,
  FlexboxProps,
  SpaceProps,
  ColorProps,
  BorderProps,
  PositionProps,
  LayoutProps,
} from 'styled-system';

type ImageProps = ReactNative.ImageProps &
  FlexboxProps &
  SpaceProps &
  ColorProps &
  BorderProps &
  PositionProps &
  LayoutProps;

const StyledImage = styled(ReactNative.Image)`
  ${space}
  ${color}
  ${border}
  ${flexbox}
  ${position}
  ${layout}
`;

const Image: React.FC<ImageProps> = props => {
  return <StyledImage {...props} />;
};

export {Image};
