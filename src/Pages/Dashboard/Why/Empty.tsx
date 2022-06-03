import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'

interface Props{
}
const Empty: FunctionComponent<Props> = (props) => {
  return (
    <Flex
      display={{base:'none', lg:'flex'}}
      w={{base:'100%', lg:'100%'}}
      maxW={{base:'100%', lg: '300px'}}
      h='280px'
      direction='column'
      m='20px'
      px='24px'
      py='50px'
    >
      
    </Flex>
  );
}
export default Empty;