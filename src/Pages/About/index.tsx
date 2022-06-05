import React, { FunctionComponent } from 'react';
import { Stack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'
import Overview from './Overview';

const About: FunctionComponent = (props) => {
  return (
    <Flex
      direction='column'
      mt={'70px'} 
      px={{base:'20px', lg:'190px'}}
      w={'100%'}
    >
      <Overview />
    </Flex>
  );
}
export default About;