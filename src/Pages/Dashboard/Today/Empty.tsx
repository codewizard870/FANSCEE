import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'

interface Props{
}
const Empty: FunctionComponent<Props> = (props) => {
  return (
    <Flex
      mt='20px'
      w='160px'
      minW='160px'
      direction='column'
      mr='40px'
      display={{base:'none', lg:'flex'}}
    >

    </Flex>
  );
}
export default Empty;