import React, {useEffect, useState} from 'react';
import {Box, Flex, Text, BoxProps, Icon} from '.';

import CollapsibleComponent from 'react-native-collapsible';
import {TouchableOpacity} from 'react-native';

type CollapsibleProps = BoxProps & {
  collapsed?: boolean;
  label?: string | {collapsed: string; open: string};
  onAnimationEnd?: (collapsed: any) => void;
  fontSize?: number | string;
};

const Collapsible: React.FC<CollapsibleProps> = ({
  collapsed = true,
  children,
  label,
  onAnimationEnd,
  fontSize,
  ...props
}) => {
  const [processedCollapsed, setCollapsed] = useState<boolean>(collapsed);
  useEffect(() => {
    setCollapsed(collapsed);
  }, [collapsed]);
  return (
    <Box {...props}>
      {label && (
        <TouchableOpacity onPress={() => setCollapsed(!processedCollapsed)}>
          <Flex alignItems="center">
            <Text color="primary.10" fontSize={fontSize}>
              {typeof label === 'string'
                ? label
                : label[processedCollapsed ? 'collapsed' : 'open']}
            </Text>
            <Icon
              name={`chevron-${processedCollapsed ? 'down' : 'up'}`}
              color="primary.10"
              size={20}
              ml="5"
              onPress={() => setCollapsed(!processedCollapsed)}
            />
          </Flex>
        </TouchableOpacity>
      )}
      <CollapsibleComponent
        onAnimationEnd={() =>
          onAnimationEnd && onAnimationEnd(processedCollapsed)
        }
        collapsed={processedCollapsed}
        style={{paddingTop: 5}}>
        {children}
      </CollapsibleComponent>
    </Box>
  );
};

export {Collapsible};
