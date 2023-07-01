import React from "react";
import { Flex, FlexProps, Text } from "@chakra-ui/react";

interface ContainerProps extends FlexProps {
  children: React.ReactNode;
}

export const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <Flex direction="column" px="36" py="6" {...rest}>
      {children}
    </Flex>
  );
};
